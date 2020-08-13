import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { Number } from '../Fields';

import validator, {
  mustBeLessThan,
  mustBePositiveNumber,
  mustNotExceedTwoDecimals,
} from '../../../utils/formValidation';

interface Props {
  showDraught?: boolean;
  showWeight?: boolean;
}

const RegisteredBoatFragment = ({ showDraught, showWeight }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('form.registered.header.measures')}</h3>
      <Row>
        <Col sm={3}>
          <Number
            validate={validator(
              mustBeLessThan(1000),
              mustBePositiveNumber,
              mustNotExceedTwoDecimals
            )}
            name={`boatWidth`}
            label="form.registered.field.width.label"
            placeholder="form.registered.field.width.placeholder"
            append="m"
            min="0"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            validate={validator(
              mustBeLessThan(1000),
              mustBePositiveNumber,
              mustNotExceedTwoDecimals
            )}
            name={`boatLength`}
            label="form.registered.field.length.label"
            placeholder="form.registered.field.length.placeholder"
            append="m"
            min="0"
            required
          />
        </Col>
        {showDraught && (
          <Col sm={3}>
            <Number
              validate={validator(
                mustBeLessThan(1000),
                mustBePositiveNumber,
                mustNotExceedTwoDecimals
              )}
              name={`boatDraught`}
              label="form.registered.field.draught.label"
              placeholder="form.registered.field.draught.placeholder"
              append="m"
              min="0"
              required
            />
          </Col>
        )}
        {showWeight && (
          <Col sm={3}>
            <Number
              validate={validator(
                mustBeLessThan(100000000),
                mustBePositiveNumber,
                mustNotExceedTwoDecimals
              )}
              name={`boatWeight`}
              step={100}
              label="form.registered.field.weight.label"
              placeholder="form.registered.field.weight.placeholder"
              append="kg"
              min="0"
              required
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default RegisteredBoatFragment;
