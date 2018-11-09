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
          berths: { completed: selectedBerths.size > 0, current: false, linkTo: `berths` },
          boat_information: {
            completed: step > 0,
            current: step === 0,
            linkTo: step > 0 ? `form/${mapSteps[0][0]}` : undefined
          },
          applicant: {
            completed: step > 1,
            current: step === 1,
            linkTo: step > 1 ? `form/${mapSteps[1][0]}` : undefined
          },
          send_application: {
            completed: step > 2,
            current: step === 2,
            linkTo: step > 2 ? `form/${mapSteps[2][0]}` : undefined
          }
        }}
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
