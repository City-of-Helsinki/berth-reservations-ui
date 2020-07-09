import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import validator, {
  mustBeLessThan,
  mustBePositiveNumber,
  mustNotExceedTwoDecimals
} from '../../../utils/formValidation';
import { Checkbox, Number } from '../Fields';
import { BoatType } from '../Selects';

import { BoatTypes } from '../../../types/boatTypes';
import './unregisteredBoatDetails.scss';

interface Props {
  hideTitle?: boolean;
  fieldsNotRequired?: boolean;
  boatTypes?: BoatTypes;
  showBoatStoredOnTrailer?: boolean;
  boatStoredOnTrailer?: boolean;
}

const UnRegisteredBoatDetailsFragment = ({
  fieldsNotRequired,
  boatTypes,
  hideTitle,
  showBoatStoredOnTrailer,
  boatStoredOnTrailer
}: Props) => {
  return (
    <div className="vene-unregistered-boat-detail">
      {!hideTitle && <FormattedMessage tagName="h3" id="form.unregistered.header.title" />}
      <Row>
        {boatTypes && (
          <Col sm={4}>
            <BoatType
              boatTypes={boatTypes}
              required={!fieldsNotRequired}
              className="vene-unregistered-boat__input"
            />
          </Col>
        )}
        <Col sm={4}>
          <Number
            validate={validator(
              mustBeLessThan(1000),
              mustBePositiveNumber,
              mustNotExceedTwoDecimals
            )}
            id="boatWidth"
            name={`boatWidth`}
            label="form.no_boat.field.width.label"
            placeholder="form.no_boat.field.width.placeholder"
            append="m"
            min="0"
            required={!fieldsNotRequired}
            className="vene-unregistered-boat__input"
          />
        </Col>
        <Col sm={4}>
          <Number
            validate={validator(
              mustBeLessThan(1000),
              mustBePositiveNumber,
              mustNotExceedTwoDecimals
            )}
            id="boatLength"
            name={`boatLength`}
            label="form.no_boat.field.length.label"
            placeholder="form.no_boat.field.length.placeholder"
            append={boatStoredOnTrailer ? '+1 m' : 'm'}
            min="0"
            required={!fieldsNotRequired}
            className="vene-unregistered-boat__input"
          />
        </Col>
        {showBoatStoredOnTrailer && (
          <Col sm={4}>
            <Checkbox
              id="boatStoredOnTrailer"
              name={`boatStoredOnTrailer`}
              label="form.registered.field.winter_storage.storage_type.label"
              inline={false}
            >
              {boatStoredOnTrailer && (
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
