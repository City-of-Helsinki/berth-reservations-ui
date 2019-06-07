import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { mustBePositiveNumber } from '../../../utils/formValidation';
import { Checkbox, Number } from '../Fields';
import { BoatType } from '../Selects';

import { BoatTypes } from '../../../types/boatTypes';
import './unregisteredBoatDetails.scss';

interface Props {
  hideTitle?: boolean;
  fieldsNotRequired?: boolean;
  boatTypes?: BoatTypes;
  showBoatStorageType?: boolean;
  boatStorageType?: boolean;
}

const UnRegisteredBoatDetailsFragment = ({
  fieldsNotRequired,
  boatTypes,
  hideTitle,
  showBoatStorageType,
  boatStorageType
}: Props) => {
  return (
    <div className="vene-unregistered-boat-detail">
      {!hideTitle && <FormattedMessage tagName="h3" id="form.unregistered.header.title" />}
      <Row>
        {boatTypes && (
          <Col sm={4}>
            <BoatType boatTypes={boatTypes} required={!fieldsNotRequired} />
          </Col>
        )}
        <Col sm={4}>
          <Number
            validate={mustBePositiveNumber}
            name={`boatWidth`}
            label="form.no_boat.field.width.label"
            placeholder="form.no_boat.field.width.placeholder"
            append="m"
            min="0"
            required={!fieldsNotRequired}
          />
        </Col>
        <Col sm={4}>
          <Number
            validate={mustBePositiveNumber}
            name={`boatLength`}
            label="form.no_boat.field.length.label"
            placeholder="form.no_boat.field.length.placeholder"
            append={boatStorageType ? '+1 m' : 'm'}
            min="0"
            required={!fieldsNotRequired}
          />
        </Col>
        {showBoatStorageType && (
          <Col sm={4}>
            <Checkbox
              name={`boatStorageType`}
              label="form.registered.field.winter_storage.storage_type.label"
              inline={false}
            >
              {boatStorageType && (
                <FormattedMessage id="form.registered.field.winter_storage.storage_type.text" />
              )}
            </Checkbox>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default UnRegisteredBoatDetailsFragment;
