import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { MultiRadio, Text } from '../../Fields';

import { WinterStorageMethod } from '../../../../__generated__/globalTypes';

import './StorageMethod.scss';

interface Props {
  showTrailerRegNum: boolean;
}

const StorageMethod = ({ showTrailerRegNum }: Props) => {
  return (
    <div className="vene-storage-method">
      <FormattedMessage tagName="h3" id="form.winter_storage_method.field.storage_method.label" />
      <Row>
        <Col sm={5}>
          <MultiRadio
            items={[
              {
                name: `storageMethod`,
                label: 'form.winter_storage_method.field.storage_method.on_trestles',
                value: WinterStorageMethod.ON_TRESTLES
              },
              {
                name: `storageMethod`,
                label: 'form.winter_storage_method.field.storage_method.on_trailer',
                value: WinterStorageMethod.ON_TRAILER
              }
            ]}
            required
          />
        </Col>
        {showTrailerRegNum && (
          <Col sm={7} className="vene-storage-method__trailer-reg">
            <Text
              label="form.winter_storage_method.field.trailer_reg_num.field.label"
              name={`trailerRegistrationNumber`}
              maxLength={64} // https://helsinkisolutionoffice.atlassian.net/browse/VEN-113
              placeholder={`form.winter_storage_method.field.trailer_reg_num.field.placeholder`}
              text="form.winter_storage_method.field.trailer_reg_num.field.text"
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default StorageMethod;
