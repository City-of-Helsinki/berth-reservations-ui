import React, { SFC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { filterByStorageArea as filterByStorageAreaAction } from '../../../redux/actions/WinterAreaActions';
import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import Input from '../../common/Input';
import './storageAreas.scss';

const StorageAreas: SFC<{ filterByStorageArea: Function }> = ({ filterByStorageArea }) => {
  const { t } = useTranslation();
  const [appointed, onAppointedCheck] = useState(false);
  const [free, onFreeCheck] = useState(false);

  useEffect(() => {
    if ((!appointed && !free) || (appointed && free)) {
      filterByStorageArea(StorageAreaFilter.SHOW_ALL_AREA);
    }

    if (appointed && !free) {
      filterByStorageArea(StorageAreaFilter.SHOW_APPOINTED_AREA);
    }

    if (free && !appointed) {
      filterByStorageArea(StorageAreaFilter.SHOW_FREE_AREA);
    }
  });
  return (
    <div className="vene-storage-areas">
      <div className="vene-storage-areas__title">
        <p>{t('page.winter_storage.storage_areas.type.title')}</p>
      </div>
      <Row>
        <Col sm={6}>
          <Input
            type="checkbox"
            id={`appointedStorageSpace`}
            label="page.winter_storage.storage_areas.appointed_spaces.label"
            onChange={(e: { target: any }) => onAppointedCheck((e.target as any).checked)}
          />
          <span>{t('page.winter_storage.storage_areas.appointed_spaces.text')}</span>
        </Col>

        <Col sm={6}>
          <Input
            type="checkbox"
            id={`freeStorageSpace`}
            label="page.winter_storage.storage_areas.free_spaces.label"
            onChange={(e: { target: any }) => onFreeCheck((e.target as any).checked)}
          />
          <span>{t('page.winter_storage.storage_areas.free_spaces.text')}</span>
        </Col>
      </Row>
    </div>
  );
};

export default connect(null, { filterByStorageArea: filterByStorageAreaAction })(StorageAreas);
