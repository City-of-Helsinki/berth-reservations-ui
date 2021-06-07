import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { mustBeBoatRegistrationNumber } from '../utils/formValidation';
import { Text } from '../fields/Fields';
import { BoatType, WithBoatType } from '../selects/Selects';

const RegisteredBoatDetails = ({ boatTypes }: WithBoatType) => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('form.registered.header.title')}</h3>
      <p>{t('form.registered.header.legend')}</p>
      <br />
      <Row>
        <Col sm={6}>
          <Text
            name={`boatRegistrationNumber`}
            label="form.registered.field.register_number.label"
            placeholder="form.registered.field.register_number.placeholder"
            required
            validate={mustBeBoatRegistrationNumber}
          />
        </Col>
        <Col sm={6}>
          <BoatType required boatTypes={boatTypes} />
        </Col>
      </Row>
    </>
  );
};

export default RegisteredBoatDetails;
