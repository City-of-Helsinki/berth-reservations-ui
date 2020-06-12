import React, { SFC } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';

import { WinterStorageMethod } from '../../../../__generated__/globalTypes';

type Props = {
  storageMethod: WinterStorageMethod;
  registrationNumber?: string | null;
} & InjectedIntlProps;

const OverviewStorageMethod: SFC<Props> = ({
  storageMethod,
  registrationNumber,
  intl: { formatMessage },
}) => {
  const storageLabel =
    storageMethod === WinterStorageMethod.ON_TRESTLES
      ? 'form.winter_storage_method.field.storage_method.on_trestles'
      : 'form.winter_storage_method.field.storage_method.on_trailer';

  return (
    <div className="vene-overview__storage-method">
      <Row>
        <Col md={registrationNumber ? 6 : 12}>
          <LabelValuePair
            label="form.winter_storage_method.field.storage_method.label"
            value={formatMessage({ id: storageLabel })}
          />
        </Col>
        {registrationNumber && (
          <Col md={6}>
            <LabelValuePair
              label="form.winter_storage_method.field.trailer_reg_num.field.label"
              value={registrationNumber}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default injectIntl(OverviewStorageMethod);
