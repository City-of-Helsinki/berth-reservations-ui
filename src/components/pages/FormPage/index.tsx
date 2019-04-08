import { findIndex } from 'lodash';
import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

import BoatsBerthsQuery from '../../common/BoatsBerthsQuery';
import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import Wizard from '../../forms/Wizard';
import Layout from '../../layout';
import FormLegend from '../../legends/FormLegend';
import Steps from '../../steps';

import { Berths, SelectedBerths } from '../../berths/types';

import { getBerths } from '../../../utils/berths';
import { BOATTYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';

interface Props {
  initialValues: {};
  berths: Berths;
  selectedBerths: SelectedBerths;
  onSubmit: Function;
  localePush: Function;
  tab: string;
}

const mapSteps = [
  ['registered_boat', 'unregistered_boat', 'no_boat'],
  ['private_person', 'company'],
  ['overview']
];

class BoatPage extends PureComponent<Props, { step: number; tab: string; tabs: string[] }> {
  state = {
    step: 0,
    tab: '',
    tabs: ['registered_boat', 'private_person', 'overview']
  };

  componentDidMount() {
    const { tab } = this.props;

    const step = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    this.setState(() => ({ step, tab: tab || mapSteps[step][0] }));
  }

  componentDidUpdate() {
    const { tab } = this.props;
    const step = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    this.setState(() => ({ step, tab: tab || mapSteps[step][0] }));
  }

  render() {
    const { initialValues, selectedBerths, onSubmit, localePush } = this.props;
    const { step, tabs, tab } = this.state;

    return (
      <BoatsBerthsQuery query={BOATTYPES_BERTHS_QUERY}>
        {({
          // error, TODO: handle errors
          data: { boatTypes, harbors } = { boatTypes: [], harbors: { edges: [] } },
          client
        }) => {
          const berthsData = harbors ? harbors.edges : [];
          const berths = getBerths(berthsData);

          return (
            <Layout>
              <Container>
                <Row>
                  <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                    <Steps
                      steps={[
                        {
                          key: 'berths',
                          completed: true,
                          current: false,
                          linkTo: `berths`
                        },
                        {
                          key: 'selected_berths',
                          completed: true,
                          current: false,
                          linkTo: `selected_berths`
                        },
                        {
                          key: 'boat_information',
                          completed: step > 0,
                          current: step === 0,
                          linkTo: step > 0 ? `form/${tabs[0]}` : undefined
                        },
                        {
                          key: 'applicant',
                          completed: step > 1,
                          current: step === 1,
                          linkTo: step > 1 ? `form/${tabs[1]}` : undefined
                        },
                        {
                          key: 'send_application',
                          completed: step > 2,
                          current: step === 2,
                          linkTo: step > 2 ? `form/${tabs[2]}` : undefined
                        }
                      ]}
                    />
                    <FormLegend step={step} />
                  </Col>
                </Row>
              </Container>
              <Wizard
                step={step}
                initialValues={initialValues}
                goForward={async (values: {}) => {
                  await onSubmit(values);

                  const choices = selectedBerths
                    .map((harbor, priority) => ({
                      harborId: harbor,
                      priority: priority + 1
                    }))
                    .toArray();
                  // @ts-ignoree
                  const { language, ...reservation } = values;
                  await client.mutate({
                    variables: { reservation: { choices, ...reservation, boatType: 1 } },
                    mutation: CREATE_RESERVATION
                  });

                  tabs[step] = tab;
                  this.setState(() => ({ tabs }));
                  await localePush('/thank-you');
                }}
                goBackwards={async (values: {}) => {
                  await onSubmit(values);
                  tabs[step] = tab;
                  this.setState(() => ({ tabs }));
                  await localePush('/selected_berths');
                }}
                nextStep={(values: {}) => {
                  onSubmit(values);
                  tabs[step] = tab;
                  this.setState(() => ({ tabs }));
                  localePush(`/form/${tabs[step + 1]}`);
                }}
                prevStep={(values: {}) => {
                  onSubmit(values);
                  tabs[step] = tab;
                  this.setState(() => ({ tabs }));
                  localePush(`/form/${tabs[step - 1]}`);
                }}
              >
                <BoatDetails tab={tab} values={{}} boatTypes={boatTypes} />
                <ApplicantDetails tab={tab} />
                <Overview
                  selectedBerths={
                    selectedBerths.map(key =>
                      berths.find(berth => key === berth.identifier)
                    ) as Berths
                  }
                  boatTypes={boatTypes}
                  tabs={tabs}
                />
              </Wizard>
            </Layout>
          );
        }}
      </BoatsBerthsQuery>
    );
  }
}
export default BoatPage;
