import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import Layout from '../../layout';
import BerthsLegend from '../../legends/BerthLegend';

import { SelectedServices } from '../../../types/services';
import { Berth } from '../../berths/Berth/types';
import { Berths as BerthsType } from '../../berths/types';

import { getBerthFilterByValues, getBerths as getBerthsFromCache } from '../../../utils/berths';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';

import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

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
  berthLimit: number;
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/selected_berths');
  };

  toggleBerthSelect = (berth: Berth) => {
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
      selectedServices,
      selectService,
      deselectService,
      onSubmit,
      berthLimit
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);

    return (
      <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
        {({
          // error, TODO: handle errors
          data: { boatTypes, harbors } = { boatTypes: [], harbors: { edges: [] } }
        }) => {
          const berthsData = harbors ? harbors.edges : [];
          const berths = getBerthsFromCache(berthsData);

          const filtered = berths.filter(filter);
          const filteredNot = berths.filterNot(filter);
          const validSelection = berths
            .filter(berth => selectedBerths.find(selectedBerth => selectedBerth.id === berth.id))
            .every(filter);

          return (
            <Layout hero>
              <div className="vene-berth-page">
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
                  berthLimit={berthLimit}
                >
                  <BerthsOnMap
                    TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
                    filtered={filtered}
                    filteredNot={filteredNot}
                    selected={selectedBerths}
                    onClick={this.toggleBerthSelect}
                    berthLimit={berthLimit}
                  />
                  <Berths
                    TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
                    filtered={filtered}
                    filteredNot={filteredNot}
                    selected={selectedBerths}
                    onClick={this.toggleBerthSelect}
                    berthLimit={berthLimit}
                  />
                </TabSelector>
              </div>
            </Layout>
          );
        }}
      </BoatsBerthsQuery>
    );
  }
}

export default BerthPage;
