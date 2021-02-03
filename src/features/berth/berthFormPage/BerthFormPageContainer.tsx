import React, { useEffect, useState } from 'react';
import findIndex from 'lodash/findIndex';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { useQuery, useMutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

import ApplicantDetails from '../../../common/applicantDetails/ApplicantDetails';
import BerthOverview from './overview/BerthOverview';
import BoatDetails from './boatDetails/BerthBoatDetails';
import FormPage from '../../../common/formPage/FormPage';
import { ApplicationOptions } from '../../../common/types/applicationType';
import { ApplicationState, Store } from '../../../redux/types';
import { BOAT_TYPES_BERTHS_QUERY, CREATE_APPLICATION } from '../../queries';
import { BerthFormValues } from '../types';
import { BoatTypesBerthsQuery } from '../../__generated__/BoatTypesBerthsQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import { SubmitBerth, SubmitBerthVariables } from '../../__generated__/SubmitBerth';
import { getResources, getSelectedResources, stringToFloat } from '../../../common/utils/applicationUtils';
import { onSubmitBerthForm } from '../../../redux/actions/FormActions';

type Props = {
  initialValues: {};
  selectedBerths: SelectedIds;
  onSubmit: Function;
  localePush: LocalePush;
  application: ApplicationState;
} & RouteComponentProps<{ tab: string }>;

const stepsBeforeForm = 2;
const boatTabs = ['registered-boat', 'unregistered-boat', 'no-boat'];
const applicantTabs = ['private-person', 'company'];
const formTabs = [boatTabs, applicantTabs, ['overview']];

const BerthFormPageContainer = ({
  selectedBerths,
  localePush,
  match: {
    params: { tab },
  },
  application,
  onSubmit,
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

  const { loading, data } = useQuery<BoatTypesBerthsQuery>(BOAT_TYPES_BERTHS_QUERY);
  const [submitBerth] = useMutation<SubmitBerth, SubmitBerthVariables>(CREATE_APPLICATION);

  const boatTypes = data ? data.boatTypes : [];
  const berths = getResources(data ? data.harbors : null);
  const selected = getSelectedResources(selectedBerths, berths);

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

  const goBackward = async (values: {}) => {
    await onSubmit(values);
    if (steps[currentStep - 1]) {
      await localePush(steps[currentStep - 1].linkTo);
    }
  };

  const goForward = async (values: BerthFormValues) => {
    await onSubmit(values);
    if (steps[currentStep + 1]) {
      await localePush(steps[currentStep + 1].linkTo);
    }
  };

  const submit = async (values: BerthFormValues) => {
    await onSubmit(values);

    const choices = selectedBerths
      .map((harborId, priority) => ({
        harborId,
        priority: priority + 1,
      }))
      .toArray();

    const normalizedValues = Object.assign({}, values, {
      boatLength: stringToFloat(values.boatLength),
      boatWidth: stringToFloat(values.boatWidth),
      boatDraught: stringToFloat(values.boatDraught),
      boatWeight: stringToFloat(values.boatWeight),
    });

    // Append berthSwitch property only when exchange application is selected.
    const payload = Object.assign(
      {},
      {
        application: {
          ...normalizedValues,
          choices,
        },
      },
      ApplicationOptions.ExchangeApplication === application.berthsApplicationType && {
        berthSwitch: application.berthSwitch,
      }
    );

    submitBerth({
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
            <BerthOverview
              selectedBerths={selected}
              boatTypes={boatTypes}
              boatTab={boatTab}
              steps={steps}
              application={application}
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
      initialValues: state.forms.berthValues,
      selectedBerths: state.berths.selectedBerths,
      application: state.application,
    }),
    { onSubmit: onSubmitBerthForm }
  )
)(BerthFormPageContainer);
