// @flow
import React from 'react';
import Layout from '../layout/Layout';
import FormLegend from '../legends/FormLegend';
import Steps from '../steps/Steps';
import Wizard from '../forms/Wizard';
import ApplicantDetails from '../forms/sections/ApplicantDetails';
import BoatDetails from '../forms/sections/BoatDetails';
import Overview from '../forms/sections/Overview';

type Props = any;

const mapSteps = [
  ['registered_boat', 'registered_big_boat', 'unregistered_boat', 'no_boat'],
  ['private_person', 'company'],
  ['overview']
];

const BoatPage = ({
  initialValues,
  selectedBerths,
  done,
  onSubmit,
  localePush,
  resetValues,
  tab
}: Props) => {
  const step = Math.max(0, mapSteps.findIndex(s => s.includes(tab)));
  const showTab = tab || mapSteps[0][0];
  return (
    <Layout>
      <Steps
        steps={{
          berths: { completed: selectedBerths.size > 0, current: false },
          boat_information: { completed: initialValues.boat, current: step === 0 },
          applicant: { completed: initialValues.applicant, current: step === 1 },
          send_application: { completed: initialValues.overview, current: step === 2 }
        }}
        done={done}
      />
      <FormLegend step={step} />
      <Wizard
        step={step}
        initialValues={initialValues}
        goForward={async values => {
          await onSubmit(values);
          await resetValues();
          await localePush('/thank-you');
        }}
        goBackwards={async values => {
          await onSubmit(values);
          await localePush('/berths');
        }}
        nextStep={values => {
          onSubmit(values);
          localePush(`/form/${mapSteps[step + 1][0]}`);
        }}
        prevStep={values => {
          onSubmit(values);
          localePush(`/form/${mapSteps[step - 1][0]}`);
        }}
      >
        <BoatDetails tab={showTab} values={{}} />
        <ApplicantDetails tab={showTab} values={{}} />
        <Overview tab={showTab} values={{}} />
      </Wizard>
    </Layout>
  );
};
export default BoatPage;
