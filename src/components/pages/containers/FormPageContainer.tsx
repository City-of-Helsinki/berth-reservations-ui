import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { APPLICATION_OPTIONS } from '../../../constants/ApplicationConstants';
import { BOAT_TYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';

import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

import { ApplicationState, Store } from '../../../redux/types';
import { Berths } from '../../berths/types';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: Function;
  tab: string;
  step: number;
  application: ApplicationState;
}

const mapSteps = [
  ['registered_boat', 'unregistered_boat', 'no_boat'],
  ['private_person', 'company'],
  ['overview']
];

const FormPageContainer = ({ selectedBerths, localePush, tab, application, ...rest }: Props) => {
  const [step, setStep] = useState(0);
  const [currTab, setTab] = useState('');
  const [tabs, setTabs] = useState(['registered_boat', 'private_person', 'overview']);

  useEffect(() => {
    const currStep = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    setStep(currStep);
    setTab(tab || mapSteps[currStep][0]);
  });

  const steps = [
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
  ];

  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        loading,
        // error, TODO: handle errors
        data,
        client
      }) => {
        const boatTypes = data ? data.boatTypes : [];
        const goForward = async (values: {}) => {
          await onSubmit(values);

          const choices = selectedBerths
            .map((harbor, priority) => ({
              harborId: harbor.id,
              priority: priority + 1
            }))
            .toArray();

          // Append berthSwitch property only when exchange application is selected.
          const payload = Object.assign(
            {},
            {
              reservation: {
                choices,
                acceptBoatingNewsletter: false,
                acceptFitnessNews: false,
                acceptLibraryNews: false,
                acceptOtherCultureNews: false,
                ...values
              }
            },
            APPLICATION_OPTIONS.EXCHANGE_APPLICATION === application.selectedApplicationType && {
              berthSwitch: application.berthSwitch
            }
          );

          await client.mutate({
            variables: payload,
            mutation: CREATE_RESERVATION
          });

          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('/thank_you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('/selected_berths');
        };

        const goToStep = (nextStep: number) => (values: {}) => {
          onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          localePush(`/form/${tabs[nextStep]}`);
        };

        return (
          <FormPage
            goForward={goForward}
            goBackwards={goBackwards}
            nextStep={goToStep(step + 1)}
            prevStep={goToStep(step - 1)}
            step={step}
            steps={steps}
            {...rest}
          >
            <BoatDetails tab={tab} values={{}} boatTypes={boatTypes} />
            <ApplicantDetails tab={tab} />
            {!loading && (
              <Overview
                selectedBerths={selectedBerths}
                boatTypes={boatTypes}
                tabs={tabs}
                application={application}
              />
            )}
          </FormPage>
        );
      }}
    </BoatsBerthsQuery>
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths,
      application: state.application
    }),
    { onSubmit }
  )
)(FormPageContainer);
