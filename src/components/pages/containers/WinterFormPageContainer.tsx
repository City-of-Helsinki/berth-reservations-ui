import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import FormPage from '../FormPage';

import { CREATE_WINTER_STORAGE_RESERVATION, WINTER_AREAS_QUERY } from '../../../utils/graphql';

import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/BoatDetails';
import Overview from '../../forms/sections/Overview';
import WinterAreasQuery from '../../query/WinterAreasQuery';

import { completeWinterStep } from '../../../redux/actions/StepActions';
import { Store } from '../../../redux/types';
import { FormMode } from '../../../types/form';
import { Berths } from '../../berths/types';
import { Steps } from '../../steps/StepTypes';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: Function;
  steps: Steps;
  boatTab: string;
  applicantTab: string;
  currentStep: number;
}

const WinterFormPageContainer = ({
  selectedBerths,
  currentStep,
  localePush,
  boatTab,
  applicantTab,
  steps,
  ...rest
}: Props) => {
  return (
    <WinterAreasQuery query={WINTER_AREAS_QUERY}>
      {({
        loading,
        // error, TODO: handle errors
        data,
        client
      }) => {
        const boatTypes = data ? data.boatTypes : [];
        const goForward = async (values: {}) => {
          await onSubmit(values);

          const chosenAreas = selectedBerths
            .map((harbor, priority) => ({
              winterAreaId: harbor.id,
              priority: priority + 1
            }))
            .toArray();

          await client.mutate({
            variables: {
              reservation: {
                chosenAreas,
                acceptBoatingNewsletter: false,
                acceptFitnessNews: false,
                acceptLibraryNews: false,
                acceptOtherCultureNews: false,
                ...values
              }
            },
            mutation: CREATE_WINTER_STORAGE_RESERVATION
          });

          await localePush('/thank_you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          await localePush(`/${steps[1].linkTo}`);
        };

        const gotoNextStep = (stepIndex: number) => (values: {}) => {
          onSubmit(values);

          completeWinterStep(stepIndex, boatTab, applicantTab);
          localePush(`/${steps[stepIndex].linkTo}`);
        };

        return (
          <FormPage
            goForward={goForward}
            goBackwards={goBackwards}
            nextStep={goToNextStep(currentStep + 1, boatTab, applicantTab)}
            prevStep={goToPrevStep(currentStep - 1)}
            steps={steps}
            currentStep={currentStep}
            {...rest}
          >
            {boatTab && (
              <BoatDetails
                tab={boatTab}
                values={{}}
                boatTypes={boatTypes}
                mode={FormMode.WinterStorage}
              />
            )}

            {applicantTab && <ApplicantDetails tab={applicantTab} />}

            {!loading && (
              <Overview
                selectedBerths={selectedBerths}
                boatTypes={boatTypes}
                applicantTab={applicantTab}
                boatTab={boatTab}
              />
            )}
          </FormPage>
        );
      }}
    </WinterAreasQuery>
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.winterAreas.selectedWinterAreas,
      steps: state.steps.winterSteps.toJS(),
      currentStep: state.steps.currentWinterStep
    }),
    { onSubmit }
  )
)(WinterFormPageContainer);
