import findIndex from 'lodash/findIndex';
import omit from 'lodash/omit';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'recompose';

import { onSubmitWinterForm } from '../../../redux/actions/FormActions';
import { getResources, getSelectedResources, stringToFloat } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { CREATE_WINTER_STORAGE_RESERVATION, WINTER_AREAS_QUERY } from '../../../utils/graphql';
import ApplicantDetails from '../../forms/sections/ApplicantDetails';
import BoatDetails from '../../forms/sections/WinterBoatDetails';
import WinterOverview from '../../forms/sections/WinterOverview';
import WinterAreasQuery from '../../query/WinterAreasQuery';
import FormPage from '../formPage/FormPage';

import { WinterStorageReservationInput } from '../../../__generated__/globalTypes';
import { Store } from '../../../redux/types';
import { WinterFormValues } from '../../../types/winterStorage';
import { SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

type Props = {
  initialValues: {};
  selectedAreas: SelectedIds;
  onSubmit: Function;
  localePush: LocalePush;
  step: number;
} & RouteComponentProps<{ tab: string }>;

const mapSteps = [
  ['registered-boat', 'unregistered-boat', 'no-boat'],
  ['private-person', 'company'],
  ['overview']
];

const WinterFormPageContainer = ({
  selectedAreas,
  localePush,
  match: {
    params: { tab }
  },
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
      key: 'winter_areas',
      completed: true,
      current: false,
      linkTo: `winter-storage`
    },
    {
      key: 'review_areas',
      completed: true,
      current: false,
      linkTo: `winter-storage/selected`
    },
    {
      key: 'boat_information',
      completed: step > 0,
      current: step === 0,
      linkTo: `winter-storage/form/${boatTab}`
    },
    {
      key: 'applicant',
      completed: step > 1,
      current: step === 1,
      linkTo: `winter-storage/form/${applicantTab}`
    },
    {
      key: 'send_application',
      completed: step > 2,
      current: step === 2,
      linkTo: `winter-storage/form/${mapSteps[2][0]}`
    }
  ];

  return (
    <WinterAreasQuery query={WINTER_AREAS_QUERY}>
      {({
        loading,
        // error, TODO: handle errors
        data,
        client
      }) => {
        const boatTypes = data ? data.boatTypes : [];
        const areas = getResources(data ? data.winterStorageAreas : null);
        const goForward = async (values: WinterFormValues) => {
          await onSubmit(values);

          const chosenAreas = selectedAreas
            .map((winterAreaId, priority) => ({
              winterAreaId,
              priority: priority + 1
            }))
            .toArray();

          const normalizedValues = Object.assign({}, values, {
            boatWidth: stringToFloat(values.boatWidth),
            boatLength: stringToFloat(values.boatLength)
          });

          const allowedFormValues = omit(normalizedValues, 'boatStoredOnTrailer');

          await client.mutate<any, { reservation: WinterStorageReservationInput }>({
            variables: {
              reservation: {
                chosenAreas,
                ...allowedFormValues
              }
            },
            mutation: CREATE_WINTER_STORAGE_RESERVATION
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

        const selected = getSelectedResources(selectedAreas, areas);

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
            <BoatDetails tab={boatTab} boatTypes={boatTypes} />
            <ApplicantDetails tab={applicantTab} />
            {!loading && (
              <WinterOverview
                selectedAreas={selected}
                boatTypes={boatTypes}
                boatTab={boatTab}
                steps={steps}
              />
            )}
          </FormPage>
        );
      }}
    </WinterAreasQuery>
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.winterValues,
      selectedAreas: state.winterAreas.selectedWinterAreas
    }),
    { onSubmit: onSubmitWinterForm }
  )
)(WinterFormPageContainer);
