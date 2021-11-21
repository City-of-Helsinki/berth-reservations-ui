import findIndex from 'lodash/findIndex';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { onSubmitUnmarkedWinterForm } from '../../../redux/actions/FormActions';
import { UnmarkedWinterFormValues, WinterStorageArea } from '../types';
import { UnmarkedWinterAreasQuery } from '../../__generated__/UnmarkedWinterAreasQuery';
import { stringToFloat } from '../../../common/utils/applicationUtils';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { CREATE_WINTER_STORAGE_APPLICATION, PROFILE_PAGE_QUERY, UNMARKED_WINTER_AREAS_QUERY } from '../../queries';
import { getWinterStorageAreas } from '../utils';
import ApplicantDetails from '../../../common/applicantDetails/ApplicantDetails';
import WinterBoatDetails from '../../../common/winterBoatDetails/WinterBoatDetails';
import UnmarkedWinterOverview from './overview/UnmarkedWinterOverview';
import FormPage from '../../../common/formPage/FormPage';
import { Store } from '../../../redux/types';
import { SubmitWinterStorage, SubmitWinterStorageVariables } from '../../__generated__/SubmitWinterStorage';
import { StepType } from '../../../common/steps/step/Step';
import { ProfilePageQuery } from '../../__generated__/ProfilePageQuery';
import { getFormValuesFromProfile } from '../../profile/utils';

const stepsBeforeForm = 1;
const boatTabs = ['registered-boat', 'unregistered-boat'];
const applicantTabs = ['private-person', 'company'];
const formTabs = [boatTabs, applicantTabs, ['overview']];

type Props = {
  unmarkedWinterFormValues: UnmarkedWinterFormValues;
  onSubmit: (values: UnmarkedWinterFormValues) => void;
  localePush: LocalePush;
} & RouteComponentProps<{ tab: string }>;

const UnmarkedWinterFormPageContainer = ({
  localePush,
  match: {
    params: { tab },
  },
  onSubmit,
  unmarkedWinterFormValues,
  ...rest
}: Props) => {
  const [currentStep, setCurrentStep] = useState(stepsBeforeForm);
  const [boatTab, setBoatTab] = useState(boatTabs[0]);
  const [applicantTab, setApplicantTab] = useState(applicantTabs[0]);

  useEffect(() => {
    const currStep = Math.max(stepsBeforeForm, findIndex(formTabs, (s) => s.includes(tab)) + stepsBeforeForm);
    setCurrentStep(currStep);
    if (currStep === 1) {
      setBoatTab(tab);
    }
    if (currStep === 2) {
      setApplicantTab(tab);
    }
  }, [tab]);

  const { loading, data } = useQuery<UnmarkedWinterAreasQuery>(UNMARKED_WINTER_AREAS_QUERY);
  const [submitUnmarkedWinterStorage] = useMutation<SubmitWinterStorage, SubmitWinterStorageVariables>(
    CREATE_WINTER_STORAGE_APPLICATION
  );
  const { data: profileData, loading: profileLoading } = useQuery<ProfilePageQuery>(PROFILE_PAGE_QUERY);

  const initialValues = { ...unmarkedWinterFormValues, ...getFormValuesFromProfile(profileData) };
  const boatTypes = data ? data.boatTypes : [];
  const winterStorageAreas = getWinterStorageAreas(data ? data.winterStorageAreas : null);

  const path = 'unmarked-winter-storage';
  const steps: StepType[] = [
    {
      completed: true,
      current: false,
      label: 'site.steps.unmarked_winter_storage_area',
      linkTo: `${path}`,
    },
    {
      completed: currentStep > 1,
      current: currentStep === 1,
      label: 'site.steps.boat_information',
      legend: {
        title: 'legend.unmarked_winter_boat.title',
        legend: 'legend.unmarked_winter_boat.legend',
      },
      linkTo: `${path}/form/${boatTab}`,
    },
    {
      completed: currentStep > 2,
      current: currentStep === 2,
      label: 'site.steps.owner',
      legend: {
        title: 'legend.unmarked_winter_owner.title',
        legend: 'legend.unmarked_winter_owner.legend',
      },
      linkTo: `${path}/form/${applicantTab}`,
    },
    {
      completed: currentStep > 3,
      current: currentStep === 3,
      label: 'site.steps.send_notice',
      legend: {
        title: 'legend.unmarked_winter_overview.title',
        legend: 'legend.unmarked_winter_overview.legend',
      },
      linkTo: `${path}/form/overview`,
    },
  ];

  const goBackward = (values: UnmarkedWinterFormValues) => {
    onSubmit(values);
    if (steps[currentStep - 1]) {
      localePush(steps[currentStep - 1].linkTo);
    }
  };

  const goForward = (values: UnmarkedWinterFormValues) => {
    onSubmit(values);
    if (steps[currentStep + 1]) {
      localePush(steps[currentStep + 1].linkTo);
    }
  };

  const submit = (values: UnmarkedWinterFormValues) => {
    onSubmit(values);

    const normalizedValues = Object.assign({}, values, {
      boatWidth: stringToFloat(values.boatWidth),
      boatLength: stringToFloat(values.boatLength),
      chosenAreas: [
        {
          winterAreaId: values.chosenAreas as string,
          priority: 1,
        },
      ],
    });

    const payload = {
      winterStorageApplication: {
        ...normalizedValues,
      },
    };

    submitUnmarkedWinterStorage({
      variables: {
        input: payload,
      },
    }).then(() => {
      localePush('/notice-sent');
    });
  };

  const getStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <WinterBoatDetails tab={boatTab} boatTypes={boatTypes} requireBoat={true} />;
      case 2:
        return <ApplicantDetails tab={applicantTab} />;
      case 3:
        const selectedArea = winterStorageAreas.find((area) => area.id === initialValues.chosenAreas);
        return (
          !loading && (
            <UnmarkedWinterOverview
              boatTab={boatTab}
              boatTypes={boatTypes}
              selectedArea={selectedArea as WinterStorageArea}
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
      initialValues={initialValues}
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
      unmarkedWinterFormValues: state.forms.unmarkedWinterValues,
    }),
    { onSubmit: onSubmitUnmarkedWinterForm }
  )
)(UnmarkedWinterFormPageContainer);
