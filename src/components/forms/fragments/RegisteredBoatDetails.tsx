import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { Text } from '../Fields';
import { BoatType, WithBoatType } from '../Selects';

const RegisteredBoatDetailsFragment = ({ boatTypes }: WithBoatType) => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('form.registered.header.title')}</h3>
      <Row>
        <Col sm={6}>
          <Text
            name={`boatRegistrationNumber`}
            label="form.registered.field.register_number.label"
            placeholder="form.registered.field.register_number.placeholder"
            required
          />
        </Col>
        <Col sm={6}>
          <BoatType required boatTypes={boatTypes} />
        </Col>
      </Row>
    </>
  );
};

export default RegisteredBoatDetailsFragment;
