import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { getBerthFilterByValues } from '../../utils/berths';
import Berths from '../berths';
import BerthsOnMap from '../berths/BerthsOnMap';
import TabSelector from '../berths/TabSelector';
import Layout from '../layout/Layout';
import BerthsLegend from '../legends/BerthsLegend';

import { BoatTypes } from '../../types/boatTypes';
import { SelectedServices } from '../../types/services';
import { Berths as BerthsType, SelectedBerths } from '../berths/types';

interface Props {
  getBerths: () => Promise<BerthsType>;
  getBoatTypes: () => Promise<BoatTypes>;
  boatTypes: BoatTypes;
  initialValues: {};
  berths: BerthsType;
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: SelectedBerths;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: Function;
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { getBerths, berths, boatTypes, getBoatTypes } = this.props;
    if (!boatTypes) {
      getBoatTypes();
    }
    if (berths.size === 0) {
      getBerths();
    }
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/selected_berths');
  };

  toggleBerthSelect = (id: string) => {
    const { selectedBerths, selectBerth, deselectBerth } = this.props;
    if (selectedBerths.includes(id)) {
      deselectBerth(id);
    } else {
      selectBerth(id);
    }
  };

  render() {
    const {
      boatTypes,
      initialValues,
      berths,
      selectedBerths,
      selectedServices,
      selectService,
      deselectService,
      onSubmit
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);
    const filtered = berths.filter(filter);
    const FilteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerths.includes(berth.identifier))
      .every(filter);

    return (
      <Layout hero>
        <BerthsLegend
          boatTypes={boatTypes}
          initialValues={initialValues}
          onSubmit={onSubmit}
          selectedServices={selectedServices}
          selectService={selectService}
          deselectService={deselectService}
        />
        <TabSelector
          progress={this.moveToForm}
          selectedCount={selectedBerths.size}
          validSelection={validSelection}
        >
          <BerthsOnMap
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
            filtered={filtered}
            filteredNot={FilteredNot}
            selected={selectedBerths}
            onClick={this.toggleBerthSelect}
          />
          <Berths
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
            filtered={filtered}
            filteredNot={FilteredNot}
            selected={selectedBerths}
            onClick={this.toggleBerthSelect}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default BerthPage;
