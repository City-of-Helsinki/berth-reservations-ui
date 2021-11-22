import { Col, Row } from 'reactstrap';

import { Text } from '../../../fields/Fields';
import { mustBeEmail, mustBePhoneNumber } from '../../../utils/formValidation';

const ContactDetails = () => (
  <Row>
    <Col sm={4}>
      <Text
        validate={mustBePhoneNumber}
        name={`phoneNumber`}
        label="form.contact_details.field.mobile_phone.label"
        placeholder="form.contact_details.field.mobile_phone.placeholder"
        required
        readOnly
      />
    </Col>
    <Col sm={4}>
      <Text
        validate={mustBeEmail}
        name={`email`}
        label={`form.contact_details.field.email.label`}
        placeholder={`form.contact_details.field.email.placeholder`}
        required
        readOnly
      />
    </Col>
  </Row>
);

export default ContactDetails;
