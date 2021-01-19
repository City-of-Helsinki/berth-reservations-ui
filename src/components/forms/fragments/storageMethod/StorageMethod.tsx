import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import { MultiRadio, Text } from '../../Fields';
import { WinterStorageMethod } from '../../../../__generated__/globalTypes';

import './storageMethod.scss';

interface Props {
  showTrailerRegNum: boolean;
}

const StorageMethod = ({ showTrailerRegNum }: Props) => {
  const { t } = useTranslation();
  return (
    <Container className="vene-storage-method">
      <h3>{t('form.winter_storage_method.field.storage_method.label')}</h3>
      <Row>
        <Col sm={5}>
          <MultiRadio
            items={[
              {
                name: `storageMethod`,
                label: 'form.winter_storage_method.field.storage_method.on_trestles',
                value: WinterStorageMethod.ON_TRESTLES,
              },
              {
                name: `storageMethod`,
                label: 'form.winter_storage_method.field.storage_method.on_trailer',
                value: WinterStorageMethod.ON_TRAILER,
              },
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
    </Container>
  );
};

export default StorageMethod;
