import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { BOAT_TYPES_BERTHS_QUERY, CREATE_RESERVATION } from '../../../utils/graphql';

import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

import { match as matchType } from 'react-router';
import { completeBerthStep } from '../../../redux/actions/StepActions';
import { ApplicationState, Store } from '../../../redux/types';
import { ApplicationOptions } from '../../../types/applicationType';
import { Berths } from '../../berths/types';
import { Steps } from '../../steps/StepTypes';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: Function;
  steps: Steps;
  application: ApplicationState;
  currentStep: number;
  match: matchType<{ boatTab: string; applicantTab: string }>;
  completeStep: Function;
}

const FormPageContainer = ({
  selectedBerths,
  localePush,
  application,
  steps,
  currentStep,
  completeStep,
  match: {
    params: { boatTab, applicantTab }
  },
  ...rest
}: Props) => {
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

          await localePush('/thank_you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          await localePush(`/${steps[1].linkTo}`);
        };

        const goToStep = (stepIndex: number) => (values: {}) => {
          onSubmit(values);

          if (!stepIndex) {
            localePush(`/${steps[0].linkTo}`);
          } else if (stepIndex > steps.length) {
            localePush(`/${steps[4].linkTo}`);
          } else {
            completeStep(stepIndex);
            localePush(`/${steps[stepIndex].linkTo}`);
          }
        };

        return (
          <FormPage
            goForward={goForward}
            goBackwards={goBackwards}
            nextStep={goToStep(currentStep + 1)}
            prevStep={goToStep(currentStep - 1)}
            steps={steps}
            currentStep={currentStep}
            {...rest}
          >
            {boatTab && <BoatDetails tab={boatTab} values={{}} boatTypes={boatTypes} />}
            {applicantTab && <ApplicantDetails tab={applicantTab} />}
            {!loading && (
              <Overview
                selectedBerths={selectedBerths}
                boatTypes={boatTypes}
                boatTab={boatTab}
                applicantTab={applicantTab}
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
      application: state.application,
      steps: state.steps.berthSteps.toJS(),
      currentStep: state.steps.currentBerthStep
    }),
    { onSubmit, completeStep: completeBerthStep }
  )
)(FormPageContainer);
