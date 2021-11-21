import { useEffect, useState } from 'react';
import findIndex from 'lodash/findIndex';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router';

import ApplicantDetails from '../../../common/applicantDetails/ApplicantDetails';
import { getHarbors } from '../utils';
import BerthOverview from './overview/BerthOverview';
import BoatDetails from './boatDetails/BerthBoatDetails';
import FormPage from '../../../common/formPage/FormPage';
import SwitchApplication from '../selectedBerthPage/switchApplication/SwitchApplication';
import { ApplicationOptions } from '../../../common/types/applicationType';
import { Store } from '../../../redux/types';
import { HARBORS_QUERY, CREATE_APPLICATION, BERTH_SWITCH_REASONS_QUERY, PROFILE_PAGE_QUERY } from '../../queries';
import { BerthFormValues } from '../types';
import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import { SubmitBerth, SubmitBerthVariables } from '../../__generated__/SubmitBerth';
import { getSelectedResources, stringToFloat } from '../../../common/utils/applicationUtils';
import { onSubmitBerthForm } from '../../../redux/actions/FormActions';
import { BerthSwitchReasonsQuery } from '../../__generated__/BerthSwitchReasonsQuery';
import { getReasonOptions } from '../selectedBerthPage/utils';
import { ProfilePageQuery } from '../../__generated__/ProfilePageQuery';
import { getFormValuesFromProfile } from '../../profile/utils';

type Props = {
  applicationType: ApplicationOptions;
  berthValues: BerthFormValues;
  localePush: LocalePush;
  onSubmit: (values: BerthFormValues) => void;
  selectedHarbors: SelectedIds;
} & RouteComponentProps<{ tab: string }>;

const stepsBeforeForm = 2;
const boatTabs = ['registered-boat', 'unregistered-boat', 'no-boat'];
const applicantTabs = ['private-person', 'company'];
const formTabs = [boatTabs, applicantTabs, ['overview']];

const BerthFormPageContainer = ({
  applicationType,
  berthValues,
  localePush,
  match: {
    params: { tab },
  },
  onSubmit,
  selectedHarbors,
  ...rest
}: Props) => {
  const [currentStep, setCurrentStep] = useState(stepsBeforeForm);
  const [boatTab, setBoatTab] = useState(boatTabs[0]);
  const [applicantTab, setApplicantTab] = useState(applicantTabs[0]);

  useEffect(() => {
    const currStep = Math.max(stepsBeforeForm, findIndex(formTabs, (s) => s.includes(tab)) + stepsBeforeForm);
    setCurrentStep(currStep);
    if (currStep === 2) {
      setBoatTab(tab);
    }
    if (currStep === 3) {
      setApplicantTab(tab);
    }
  }, [tab]);

  const isSwitchApplication = applicationType === ApplicationOptions.SwitchApplication;

  const { data, loading } = useQuery<HarborsQuery>(HARBORS_QUERY);

  const { data: profileData, loading: profileLoading } = useQuery<ProfilePageQuery>(PROFILE_PAGE_QUERY);

  const initialValues = { ...berthValues, ...getFormValuesFromProfile(profileData) };

  const { data: berthSwitchReasonsData } = useQuery<BerthSwitchReasonsQuery>(BERTH_SWITCH_REASONS_QUERY, {
    skip: !isSwitchApplication,
  });
  const reasonOptions = getReasonOptions(berthSwitchReasonsData);

  const [submitBerth] = useMutation<SubmitBerth, SubmitBerthVariables>(CREATE_APPLICATION);

  const boatTypes = data ? data.boatTypes : [];
  const berths = getHarbors(data);
  const selected = getSelectedResources(selectedHarbors, berths);

  const steps: StepType[] = [
    {
      completed: true,
      current: false,
      label: 'site.steps.berths',
      linkTo: `berths`,
    },
    {
      completed: true,
      current: false,
      label: 'site.steps.selected_berths',
      linkTo: `berths/selected`,
    },
    {
      completed: currentStep > 2,
      current: currentStep === 2,
      label: 'site.steps.boat_information',
      legend: {
        title: 'legend.boat.title',
        legend: 'legend.boat.legend',
      },
      linkTo: `berths/form/${boatTab}`,
    },
    {
      completed: currentStep > 3,
      current: currentStep === 3,
      label: 'site.steps.applicant',
      legend: {
        title: 'legend.person.title',
        legend: 'legend.person.legend',
      },
      linkTo: `berths/form/${applicantTab}`,
    },
    {
      completed: currentStep > 4,
      current: currentStep === 4,
      label: 'site.steps.send_application',
      legend: {
        title: 'legend.overview.title',
        legend: 'legend.overview.legend',
      },
      linkTo: 'berths/form/overview',
    },
  ];

  const goBackward = (values: BerthFormValues) => {
    onSubmit(values);
    if (steps[currentStep - 1]) {
      localePush(steps[currentStep - 1].linkTo);
    }
  };

  const goForward = (values: BerthFormValues) => {
    onSubmit(values);
    if (steps[currentStep + 1]) {
      localePush(steps[currentStep + 1].linkTo);
    }
  };

  const submit = (values: BerthFormValues) => {
    onSubmit(values);
    const { berthSwitch, ...rest } = values;

    const choices = selectedHarbors
      .map((harborId, priority) => ({
        harborId,
        priority: priority + 1,
      }))
      .toArray();

    const normalizedValues = Object.assign({}, rest, {
      boatLength: stringToFloat(values.boatLength),
      boatWidth: stringToFloat(values.boatWidth),
      boatDraught: stringToFloat(values.boatDraught),
      boatWeight: stringToFloat(values.boatWeight),
    });

    // Append berthSwitch property only when switch application is selected.
    const payload = Object.assign(
      {},
      {
        berthApplication: {
          ...normalizedValues,
          choices,
        },
      },
      isSwitchApplication &&
        berthSwitch && {
          berthSwitch: {
            berthId: berthSwitch.berth.value,
          },
        }
    );

    submitBerth({
      variables: {
        input: payload,
      },
    }).then(() => localePush('/thank-you'));
  };

  const getStepComponent = () => {
    switch (currentStep) {
      case 2:
        return <BoatDetails tab={boatTab} boatTypes={boatTypes} />;
      case 3:
        return (
          <>
            <ApplicantDetails tab={applicantTab} />
            {isSwitchApplication && <SwitchApplication reasonOptions={reasonOptions} />}
          </>
        );
      case 4:
        return (
          !loading && <BerthOverview boatTab={boatTab} boatTypes={boatTypes} selectedHarbors={selected} steps={steps} />
        );
    }
  };

  return (
    <FormPage
      currentStep={currentStep}
      goBackward={goBackward}
      goForward={goForward}
      initialValues={initialValues}
      steps={steps}
      stepsBeforeForm={stepsBeforeForm}
      submit={submit}
      loading={profileLoading}
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
      applicationType: state.berths.applicationType,
      berthValues: state.forms.berthValues,
      selectedHarbors: state.berths.selectedHarbors,
    }),
    { onSubmit: onSubmitBerthForm }
  )
)(BerthFormPageContainer);
