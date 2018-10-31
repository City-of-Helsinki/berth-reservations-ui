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

const BoatPage = ({
  initialValues,
  step,
  done,
  onSubmit,
  nextStep,
  prevStep,
  localePush
}: Props) => (
  <Layout>
    <Steps step={step} done={done} />
    <FormLegend step={step} />
    <Wizard
      step={step}
      initialValues={initialValues}
      onSubmit={async values => {
        await onSubmit(values);
        localePush('thank-you');
      }}
      nextStep={nextStep}
      prevStep={prevStep}
    >
      <BoatDetails values={{}} />
      <ApplicantDetails values={{}} />
      <Overview values={{}} />
    </Wizard>
  </Layout>
);

export default BoatPage;
