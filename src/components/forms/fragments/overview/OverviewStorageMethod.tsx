import React, { SFC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import { WinterStorageMethod } from '../../../../__generated__/globalTypes';

const OverviewStorageMethod: SFC<{
  storageMethod: WinterStorageMethod;
  registrationNumber?: string;
}> = ({ storageMethod, registrationNumber }) => {
  const storageLabel =
    storageMethod === WinterStorageMethod.ON_TRESTLES
      ? 'form.winter_storage_method.field.storage_method.on_trestles'
      : 'form.winter_storage_method.field.storage_method.on_trailer';

  return (
    <div className="vene-overview__storage-method">
      <Row>
        <Col md={registrationNumber ? 6 : 12}>
          <div className="vene-overview-info__boat-info">
            <FormattedMessage
              tagName="span"
              id="form.winter_storage_method.field.storage_method.label"
            />
            <span>:</span>
            <span className="vene-form__data">
              <FormattedMessage id={storageLabel} />
            </span>
          </div>
        </Col>
        {registrationNumber && (
          <Col md={6}>
            <div className="vene-overview-info__boat-info">
              <FormattedMessage
                tagName="span"
                id="form.winter_storage_method.field.trailer_reg_num.field.label"
              />
              <span>:</span>
              <span className="vene-form__data">{registrationNumber}</span>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default OverviewStorageMethod;
