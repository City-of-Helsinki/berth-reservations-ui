import findIndex from 'lodash/findIndex';
import omit from 'lodash/omit';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';

import { onSubmitWinterForm } from '../../../redux/actions/FormActions';
import { WinterAreasQuery } from '../../../utils/__generated__/WinterAreasQuery';
import { getResources, getSelectedResources, stringToFloat } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { CREATE_WINTER_STORAGE_APPLICATION, WINTER_AREAS_QUERY } from '../../../utils/graphql';
import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/WinterBoatDetails';
import WinterOverview from '../../forms/sections/WinterOverview';
import FormPage from './FormPage';

import { Store } from '../../../redux/types';
import { WinterFormValues } from '../../../types/winterStorage';
import {
  SubmitWinterStorage,
  SubmitWinterStorageVariables,
} from '../../../utils/__generated__/SubmitWinterStorage';
import { SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import { useMutation, useQuery } from 'react-apollo';

type Props = {
  initialValues: {};
  selectedAreas: SelectedIds;
  onSubmit: Function;
  localePush: LocalePush;
} & RouteComponentProps<{ tab: string }>;

const stepsBeforeForm = 2;
const boatTabs = ['registered-boat', 'unregistered-boat', 'no-boat'];
const applicantTabs = ['private-person', 'company'];
const formTabs = [boatTabs, applicantTabs, ['overview']];

const WinterFormPageContainer = ({
  selectedAreas,
  localePush,
  match: {
    params: { tab },
  },
  onSubmit,
  ...rest
}: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [boatTab, setBoatTab] = useState(boatTabs[0]);
  const [applicantTab, setApplicantTab] = useState(applicantTabs[0]);

  useEffect(() => {
    const currStep = Math.max(
      stepsBeforeForm,
      findIndex(formTabs, (s) => s.includes(tab)) + stepsBeforeForm
    );
    setCurrentStep(currStep);
    if (currStep === 2) {
      setBoatTab(tab);
    }
    if (currStep === 3) {
      setApplicantTab(tab);
    }
  }, [tab]);

  const { loading, data } = useQuery<WinterAreasQuery>(WINTER_AREAS_QUERY);
  const [submitWinterStorage] = useMutation<SubmitWinterStorage, SubmitWinterStorageVariables>(
    CREATE_WINTER_STORAGE_APPLICATION
  );

  const boatTypes = data ? data.boatTypes : [];
  const areas = getResources(data ? data.winterStorageAreas : null);
  const selected = getSelectedResources(selectedAreas, areas);

  const steps: StepType[] = [
    {
      completed: true,
      current: false,
      label: 'site.steps.winter_areas',
      linkTo: `winter-storage`,
    },
    {
      completed: true,
      current: false,
      label: 'site.steps.review_areas',
      linkTo: `winter-storage/selected`,
    },
    {
      completed: currentStep > 0,
      current: currentStep === 0,
      label: 'site.steps.boat_information',
      legend: {
        title: 'legend.boat.title',
        legend: 'legend.boat.legend',
      },
      linkTo: `winter-storage/form/${boatTab}`,
    },
    {
      completed: currentStep > 1,
      current: currentStep === 1,
      label: 'site.steps.applicant',
      legend: {
        title: 'legend.person.title',
        legend: 'legend.person.legend',
      },
      linkTo: `winter-storage/form/${applicantTab}`,
    },
    {
      completed: currentStep > 2,
      current: currentStep === 2,
      label: 'site.steps.send_application',
      legend: {
        title: 'legend.overview.title',
        legend: 'legend.overview.legend',
      },
      linkTo: 'winter-storage/form/overview',
    },
  ];

  const goBackward = async (values: {}) => {
    await onSubmit(values);
    if (steps[currentStep - 1]) {
      await localePush(steps[currentStep - 1].linkTo);
    }
  };

  const goForward = async (values: WinterFormValues) => {
    await onSubmit(values);
    if (steps[currentStep + 1]) {
      await localePush(steps[currentStep + 1].linkTo);
    }
  };

  const submit = async (values: WinterFormValues) => {
    await onSubmit(values);

    const chosenAreas = selectedAreas
      .map((winterAreaId, priority) => ({
        winterAreaId,
        priority: priority + 1,
      }))
      .toArray();

    const normalizedValues = Object.assign({}, values, {
      boatWidth: stringToFloat(values.boatWidth),
      boatLength: stringToFloat(values.boatLength),
    });
    const allowedFormValues = omit(normalizedValues, 'boatStoredOnTrailer');

    const payload = {
      application: {
        ...allowedFormValues,
        chosenAreas,
      },
    };

    submitWinterStorage({
      variables: payload,
    }).then(() => localePush('/thank-you'));
  };

  const getStepComponent = () => {
    switch (currentStep) {
      case 2:
        return <BoatDetails tab={boatTab} boatTypes={boatTypes} />;
      case 3:
        return <ApplicantDetails tab={applicantTab} />;
      case 4:
        return (
          !loading && (
            <WinterOverview
              selectedAreas={selected}
              boatTypes={boatTypes}
              boatTab={boatTab}
              steps={steps}
            />
          )
        );
    }
  };

  return (
    <FormPage
      currentStep={currentStep}
      goBackward={goBackward}
      goForward={goForward}
      steps={steps}
      stepsBeforeForm={stepsBeforeForm}
      submit={submit}
      {...rest}
    >
      {getStepComponent()}
    </FormPage>
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.winterValues,
      selectedAreas: state.winterAreas.selectedWinterAreas,
    }),
    { onSubmit: onSubmitWinterForm }
  )
)(WinterFormPageContainer);
