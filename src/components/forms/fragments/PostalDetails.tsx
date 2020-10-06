import React from 'react';
import { Col, Row } from 'reactstrap';

import { Select, Text } from '../Fields';
import { MUNICIPALITIES } from '../../../constants/Municipalities';
import { useTranslation } from 'react-i18next';

const PostalDetailsFragment = () => {
  const { i18n } = useTranslation();
  return (
    <Row>
      <Col sm={4}>
        <Text
          name={`address`}
          label={`form.postal_details.field.street_address.label`}
          placeholder={`form.postal_details.field.street_address.placeholder`}
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          name={`zipCode`}
          label={`form.postal_details.field.postal_code.label`}
          placeholder={`form.postal_details.field.postal_code.placeholder`}
          required
        />
      </Col>
      <Col sm={4}>
        <Select
          name={`municipality`}
          label={`form.postal_details.field.munacipality.label`}
          required
        >
          <option />
          {MUNICIPALITIES.map(
            (municipality: { id: string; translations: Record<string, string> }) => {
              const translated =
                municipality.translations[i18n.language] ?? municipality.translations.fi;
              return (
                <option key={municipality.id} value={municipality.translations.fi}>
                  {translated}
                </option>
              );
            }
          )}
        </Select>
      </Col>
    </Row>
  );
};
export default PostalDetailsFragment;
