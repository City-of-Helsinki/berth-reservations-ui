import findIndex from 'lodash/findIndex';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';

import { onSubmitBerthForm } from '../../../redux/actions/FormActions';
import { getBerths, getSelectedResources } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../formPage/FormPage';

import { BOAT_TYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';

import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

import { ApplicationState, Store } from '../../../redux/types';
import { ApplicationOptions } from '../../../types/applicationType';
import { FormMode } from '../../../types/form';
import { SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

type Props = {
  initialValues: {};
  selectedBerths: SelectedIds;
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
  onSubmit,
  ...rest
}: Props) => {
  const [step, setStep] = useState(0);
  const [boatTab, setBoatTab] = useState(mapSteps[0][0]);
  const [applicantTab, setApplicantTab] = useState(mapSteps[1][0]);

  useEffect(() => {
    const currStep = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    setStep(currStep);
    if (currStep === 0) {
      setBoatTab(tab);
    }
    if (currStep === 1) {
      setApplicantTab(tab);
    }
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
      linkTo: `berths/form/${boatTab}`
    },
    {
      key: 'applicant',
      completed: step > 1,
      current: step === 1,
      linkTo: `berths/form/${applicantTab}`
    },
    {
      key: 'send_application',
      completed: step > 2,
      current: step === 2,
      linkTo: `berths/form/${mapSteps[2][0]}`
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
        const berths = getBerths(data ? data.harbors : null);
        const selected = getSelectedResources(selectedBerths, berths);

        const goForward = async (values: {}) => {
          await onSubmit(values);

          const choices = selectedBerths
            .map((harborId, priority) => ({
              harborId,
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
            ApplicationOptions.ExchangeApplication === application.berthsApplicationType && {
              berthSwitch: application.berthSwitch
            }
          );

          await client.mutate({
            variables: payload,
            mutation: CREATE_RESERVATION
          });

          await localePush('/thank-you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          await localePush(steps[1].linkTo);
        };

        const goToStep = (nextStep: number) => (values: {}) => {
          onSubmit(values);
          localePush(steps[nextStep + 2].linkTo);
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
            <BoatDetails tab={boatTab} values={{}} boatTypes={boatTypes} />
            <ApplicantDetails tab={applicantTab} />
            {!loading && (
              <Overview
                mode={FormMode.Berth}
                selectedBerths={selected}
                boatTypes={boatTypes}
                boatTab={boatTab}
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
      initialValues: state.forms.berthValues,
      selectedBerths: state.berths.selectedBerths,
      application: state.application
    }),
    { onSubmit: onSubmitBerthForm }
  )
)(FormPageContainer);
