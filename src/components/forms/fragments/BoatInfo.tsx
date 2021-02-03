import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { Text } from '../../../common/fields/Fields';

const BoatInfoFragment = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('form.unregistered.header.additional_info')}</h3>
      <Row>
        <Col sm={4}>
          <Text
            name={`boatName`}
            label="form.registered.field.name.label"
            placeholder="form.registered.field.name.placeholder"
            required
          />
        </Col>
        <Col sm={4}>
          <Text
            name={`boatModel`}
            label="form.registered.field.model.label"
            placeholder="form.registered.field.model.placeholder"
            required
          />
        </Col>
      </Row>
    </>
  );
};

export default BoatInfoFragment;
