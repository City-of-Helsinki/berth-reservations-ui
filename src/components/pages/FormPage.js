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
  done,
  onSubmit,
  nextStep,
  prevStep,
  localePush,
  resetValues,
  tab
}: Props) => {
  const step = mapSteps.findIndex(s => s.includes(tab));
  console.debug(step, tab);
  return (
    <Layout>
      <Steps step={step} done={done} />
      <FormLegend step={step} />
      <Wizard
        step={step}
        initialValues={initialValues}
        goForward={async values => {
          await onSubmit(values);
          await resetValues();
          await localePush('thank-you');
        }}
        goBackwards={async values => {
          await prevStep();
          await onSubmit(values);
          await localePush('berths');
        }}
        nextStep={nextStep}
        prevStep={prevStep}
      >
        <BoatDetails tab={tab} values={{}} />
        <ApplicantDetails tab={tab} values={{}} />
        <Overview tab={tab} values={{}} />
      </Wizard>
    </Layout>
  );
};
export default BoatPage;
