import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import { IconNames } from '../../common/Icon';
import Layout from '../../layout';
import BerthsLegend from '../../legends/BerthLegend';

import { BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { BerthsServices, SelectedServices, WinterServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

import { getBerthFilterByValues } from '../../../utils/berths';

import './BerthPage.scss';

interface Props {
  initialValues: {};
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: BerthsType;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: Function;
  berths: BerthsType;
  boatTypes: BoatTypes;
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
  services: Array<{
    label: string;
    value: BerthsServices | WinterServices;
    icon: IconNames;
  }>;
  hero?: 'berths' | 'winter';
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { hero, localePush } = this.props;
    const path = hero === 'winter' ? '/selected_areas' : '/selected_berths';
    await localePush(path);
  };

  toggleBerthSelect = (berth: BerthType) => {
    const { selectedBerths, selectBerth, deselectBerth } = this.props;
    if (selectedBerths.find(selectedBerth => selectedBerth.id === berth.id)) {
      deselectBerth(berth);
    } else {
      selectBerth(berth);
    }
  };

  render() {
    const {
      initialValues,
      selectedBerths,
      berths,
      selectedServices,
      selectService,
      deselectService,
      onSubmit,
      boatTypes,
      hero,
      steps,
      services
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);

    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerths.find(selectedBerth => selectedBerth.id === berth.id))
      .every(filter);

    return (
      <Layout hero={hero}>
        <div className="vene-berth-page">
          <BerthsLegend
            boatTypes={boatTypes}
            initialValues={initialValues}
            onSubmit={onSubmit}
            selectedServices={selectedServices}
            selectService={selectService}
            deselectService={deselectService}
            steps={steps}
            services={services}
            hideApplicationSelector={hero === 'winter'}
          />
          <TabSelector
            progress={this.moveToForm}
            selectedCount={selectedBerths.size}
            validSelection={validSelection}
          >
            <BerthsOnMap
              TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
              filtered={filtered}
              filteredNot={filteredNot}
              selected={selectedBerths}
              onClick={this.toggleBerthSelect}
            />
            <Berths
              TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
              filtered={filtered}
              filteredNot={filteredNot}
              selected={selectedBerths}
              onClick={this.toggleBerthSelect}
            />
          </TabSelector>
        </div>
      </Layout>
    );
  }
}

export default BerthPage;
