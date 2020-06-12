import React, { SFC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { filterByStorageArea as filterByStorageAreaAction } from '../../../redux/actions/WinterAreaActions';
import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import Input from '../../common/Input';
import './storageAreas.scss';

const StorageAreas: SFC<{ filterByStorageArea: Function }> = ({ filterByStorageArea }) => {
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
        <FormattedMessage id="page.winter_storage.storage_areas.type.title" tagName="p" />
      </div>
      <Row>
        <Col sm={6}>
          <Input
            type="checkbox"
            id={`appointedStorageSpace`}
            label="page.winter_storage.storage_areas.appointed_spaces.label"
            onChange={(e) => onAppointedCheck((e.target as any).checked)}
          />
          <FormattedMessage id="page.winter_storage.storage_areas.appointed_spaces.text" />
        </Col>

        <Col sm={6}>
          <Input
            type="checkbox"
            id={`freeStorageSpace`}
            label="page.winter_storage.storage_areas.free_spaces.label"
            onChange={(e) => onFreeCheck((e.target as any).checked)}
          />
          <FormattedMessage id="page.winter_storage.storage_areas.free_spaces.text" />
        </Col>
      </Row>
    </div>
  );
};

export default connect(null, { filterByStorageArea: filterByStorageAreaAction })(StorageAreas);
