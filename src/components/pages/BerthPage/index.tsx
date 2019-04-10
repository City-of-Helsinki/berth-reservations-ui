import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import Layout from '../../layout';
import BerthsLegend from '../../legends/BerthLegend';

import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType, SelectedBerths } from '../../berths/types';

import { getBerthFilterByValues, getBerths as getBerthsFromCache } from '../../../utils/berths';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';

import BoatsBerthsQuery from '../../common/BoatsBerthsQuery';

interface Props {
  initialValues: {};
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
      initialValues,
      selectedBerths,
      selectedServices,
      selectService,
      deselectService,
      onSubmit
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
            .filter(berth => selectedBerths.includes(berth.identifier))
            .every(filter);

          return (
            <Layout hero>
              <div className="app-BerthPage">
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
        }}
      </BoatsBerthsQuery>
    );
  }
}

export default BerthPage;
