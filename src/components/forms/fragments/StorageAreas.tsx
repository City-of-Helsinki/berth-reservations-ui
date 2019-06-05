import React, { SFC } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { filterByStorageArea as filterByStorageAreaAction } from '../../../redux/actions/WinterAreaActions';
import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import { Store } from '../../../redux/types';
import Input from '../../common/Input';
import './storageAreas.scss';

const StorageAreas: SFC<{ filterByStorageArea: Function; selectedFilter: StorageAreaFilter }> = ({
  filterByStorageArea,
  selectedFilter
}) => {
  const onClickHandler = (checked: boolean, filterType: StorageAreaFilter) => {
    if (!checked && selectedFilter === filterType) {
      filterByStorageArea(StorageAreaFilter.SHOW_ALL_AREA);
    } else {
      filterByStorageArea(filterType);
    }
  };
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
            checked={selectedFilter === StorageAreaFilter.SHOW_APPOINTED_AREA}
            onChange={e =>
              onClickHandler((e.target as any).checked, StorageAreaFilter.SHOW_APPOINTED_AREA)
            }
          />
          <FormattedMessage id="page.winter_storage.storage_areas.appointed_spaces.text" />
        </Col>

        <Col sm={6}>
          <Input
            type="checkbox"
            id={`freeStorageSpace`}
            label="page.winter_storage.storage_areas.free_spaces.label"
            checked={selectedFilter === StorageAreaFilter.SHOW_FREE_AREA}
            onChange={e =>
              onClickHandler((e.target as any).checked, StorageAreaFilter.SHOW_FREE_AREA)
            }
          />
          <FormattedMessage id="page.winter_storage.storage_areas.free_spaces.text" />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: Store) => ({
  selectedFilter: state.winterAreas.storageAreaFilter
});
export default connect(
  mapStateToProps,
  { filterByStorageArea: filterByStorageAreaAction }
)(StorageAreas);
