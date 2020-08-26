import findIndex from 'lodash/findIndex';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';

import { onSubmitUnmarkedWinterForm } from '../../../redux/actions/FormActions';
import { UnmarkedWinterFormValues } from '../../../types/unmarkedWinterStorage';
import { BoatTypesQuery } from '../../../utils/__generated__/BoatTypesQuery';
import { stringToFloat } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { BOAT_TYPES_QUERY, CREATE_WINTER_STORAGE_APPLICATION } from '../../../utils/graphql';
import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/WinterBoatDetails';
import UnmarkedWinterOverview from '../../forms/sections/UnmarkedWinterOverview';
import FormPage from './FormPage';

import { Store } from '../../../redux/types';
import {
  SubmitWinterStorage,
  SubmitWinterStorageVariables,
} from '../../../utils/__generated__/SubmitWinterStorage';
import { StepType } from '../../steps/step/Step';
import { useQuery, useMutation } from 'react-apollo';

const mapSteps = [
  ['registered-boat', 'unregistered-boat'],
  ['private-person', 'company'],
  ['overview'],
];

type Props = {
  initialValues: {};
  onSubmit: Function;
  localePush: LocalePush;
} & RouteComponentProps<{ tab: string }>;

const UnmarkedWinterFormPageContainer = ({
  localePush,
  match: {
    params: { tab },
  },
  onSubmit,
  ...rest
}: Props) => {
  const [step, setStep] = useState(0);
  const [boatTab, setBoatTab] = useState(mapSteps[0][0]);
  const [applicantTab, setApplicantTab] = useState(mapSteps[1][0]);

  useEffect(() => {
    const currStep = Math.max(
      0,
      findIndex(mapSteps, (s) => s.includes(tab))
    );
    setStep(currStep);
    if (currStep === 0) {
      setBoatTab(tab);
    }
    if (currStep === 1) {
      setApplicantTab(tab);
    }
  }, [tab]);

  const { loading, data } = useQuery<BoatTypesQuery>(BOAT_TYPES_QUERY);
  const [submitUnmarkedWinterStorage] = useMutation<
    SubmitWinterStorage,
    SubmitWinterStorageVariables
  >(CREATE_WINTER_STORAGE_APPLICATION);

  const path = 'unmarked-winter-storage';
  const steps: StepType[] = [
    {
      completed: true,
      current: false,
      key: 'unmarked_winter_storage_area',
      linkTo: `${path}`,
    },
    {
      completed: step > 0,
      current: step === 0,
      key: 'boat_information',
      linkTo: `${path}/form/${boatTab}`,
    },
    {
      completed: step > 1,
      current: step === 1,
      key: 'applicant',
      linkTo: `${path}/form/${applicantTab}`,
    },
    {
      completed: step > 2,
      current: step === 2,
      key: 'send_notification',
      linkTo: `${path}/form/${mapSteps[2][0]}`,
    },
  ];

  const boatTypes = data ? data.boatTypes : [];
  const goForward = async (values: UnmarkedWinterFormValues) => {
    await onSubmit(values);

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

    submitUnmarkedWinterStorage({
      variables: {
        application: {
          ...normalizedValues,
        },
      },
    }).then(() => {
      localePush('/thank-you');
    });
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
      <BoatDetails
        tab={boatTab}
        boatTypes={boatTypes}
        requireBoat={true}
        showStorageMethod={false}
      />
      <ApplicantDetails tab={applicantTab} />
      {!loading && <UnmarkedWinterOverview boatTypes={boatTypes} boatTab={boatTab} steps={steps} />}
    </FormPage>
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.unmarkedWinterValues,
    }),
    { onSubmit: onSubmitUnmarkedWinterForm }
  )
)(UnmarkedWinterFormPageContainer);
