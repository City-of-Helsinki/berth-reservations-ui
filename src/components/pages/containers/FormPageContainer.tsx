import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';

import { onSubmit } from '../../../redux/actions/FormActions';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { BOAT_TYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';

import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

import { ApplicationState, Store } from '../../../redux/types';
import { ApplicationOptions } from '../../../types/applicationType';
import { Berths } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

type Props = {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: LocalePush;
  step: number;
  application: ApplicationState;
} & RouteComponentProps<{ tab: string }>;

const mapSteps = [
  ['registered-boat', 'unregistered-boat', 'no-boat'],
  ['private-person', 'company'],
  ['overview']
];

const FormPageContainer = ({
  selectedBerths,
  localePush,
  match: {
    params: { tab }
  },
  application,
  ...rest
}: Props) => {
  const [step, setStep] = useState(0);
  const [currTab, setTab] = useState('');
  const [tabs, setTabs] = useState(['registered-boat', 'private-person', 'overview']);

  useEffect(() => {
    const currStep = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    setStep(currStep);
    setTab(tab || mapSteps[currStep][0]);
  });

  const steps: StepType[] = [
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
      linkTo: `berths/selected`
    },
    {
      key: 'boat_information',
      completed: step > 0,
      current: step === 0,
      linkTo: `berths/form/${tabs[0]}`
    },
    {
      key: 'applicant',
      completed: step > 1,
      current: step === 1,
      linkTo: `berths/form/${tabs[1]}`
    },
    {
      key: 'send_application',
      completed: step > 2,
      current: step === 2,
      linkTo: `berths/form/${tabs[2]}`
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
            ApplicationOptions.ExchangeApplication === application.selectedApplicationType && {
              berthSwitch: application.berthSwitch
            }
          );

          await client.mutate({
            variables: payload,
            mutation: CREATE_RESERVATION
          });

          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('/thank-you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('berths/selected');
        };

        const goToStep = (nextStep: number) => (values: {}) => {
          onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          localePush(`berths/form/${tabs[nextStep]}`);
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
                steps={steps}
                application={application}
              />
            )}
          </FormPage>
        );
      }}
    </BoatsBerthsQuery>
  );
};

export default compose<Props, Props>(
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
