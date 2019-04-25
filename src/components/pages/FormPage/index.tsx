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

import { Berths } from '../../berths/types';

import { BOAT_TYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';
import './FormPage.scss';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
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
      <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
        {({
          loading,
          // error, TODO: handle errors
          data: { boatTypes } = { boatTypes: [] },
          client
        }) => {
          return (
            <Layout>
              <div className="vene-form-page">
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
              </div>
              <Wizard
                step={step}
                initialValues={initialValues}
                goForward={async (values: {}) => {
                  await onSubmit(values);

                  const choices = selectedBerths
                    .map((harbor, priority) => ({
                      harborId: harbor.id,
                      priority: priority + 1
                    }))
                    .toArray();
                  // @ts-ignore
                  const { language, boatType, ...reservation } = values;
                  const boatTypeId = boatTypes.find(type => type.id === boatType);
                  await client.mutate({
                    variables: {
                      reservation: {
                        choices,
                        ...reservation,
                        boatType: boatTypeId && boatTypeId.id
                      }
                    },
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
                {!loading && (
                  <Overview selectedBerths={selectedBerths} boatTypes={boatTypes} tabs={tabs} />
                )}
              </Wizard>
            </Layout>
          );
        }}
      </BoatsBerthsQuery>
    );
  }
}
export default BoatPage;
