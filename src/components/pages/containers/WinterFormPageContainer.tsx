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

import { Store } from '../../../redux/types';
import { FormMode } from '../../../types/form';
import { Berths } from '../../berths/types';

interface Props {
  initialValues: {};
  selectedBerths: Berths;
  onSubmit: Function;
  localePush: Function;
  tab: string;
  step: number;
}

const mapSteps = [
  ['registered_boat', 'unregistered_boat', 'no_boat'],
  ['private_person', 'company'],
  ['overview']
];

const WinterFormPageContainer = ({ selectedBerths, localePush, tab, ...rest }: Props) => {
  const [step, setStep] = useState(0);
  const [currTab, setTab] = useState('');
  const [tabs, setTabs] = useState(['registered_boat', 'private_person', 'overview']);

  useEffect(() => {
    const currStep = Math.max(0, findIndex(mapSteps, s => s.includes(tab)));
    setStep(currStep);
    setTab(tab || mapSteps[currStep][0]);
  });

  const steps = [
    {
      key: 'winter_areas',
      completed: true,
      current: false,
      linkTo: `winter_storage`
    },
    {
      key: 'review_areas',
      completed: true,
      current: false,
      linkTo: `selected_areas`
    },
    {
      key: 'boat_information',
      completed: step > 0,
      current: step === 0,
      linkTo: step > 0 ? `winter_form/${tabs[0]}` : undefined
    },
    {
      key: 'applicant',
      completed: step > 1,
      current: step === 1,
      linkTo: step > 1 ? `winter_form/${tabs[1]}` : undefined
    },
    {
      key: 'send_application',
      completed: step > 2,
      current: step === 2,
      linkTo: step > 2 ? `winter_form/${tabs[2]}` : undefined
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

          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('/thank_you');
        };

        const goBackwards = async (values: {}) => {
          await onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          await localePush('/selected_areas');
        };

        const goToStep = (nextStep: number) => (values: {}) => {
          onSubmit(values);
          setTabs(map(tabs, (t, index) => (index === step ? currTab : t)));
          localePush(`/winter_form/${tabs[nextStep]}`);
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
              tab={tab}
              values={{}}
              boatTypes={boatTypes}
              mode={FormMode.WinterStorage}
            />
            <ApplicantDetails tab={tab} />
            {!loading && (
              <Overview selectedBerths={selectedBerths} boatTypes={boatTypes} tabs={tabs} />
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
      selectedBerths: state.winterAreas.selectedWinterAreas
    }),
    { onSubmit }
  )
)(WinterFormPageContainer);
