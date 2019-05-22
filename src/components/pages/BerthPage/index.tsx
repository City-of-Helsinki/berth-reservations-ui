import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { getBerthFilterByValues } from '../../../utils/berths';
import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import { IconNames } from '../../common/Icon';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import Layout from '../../layout';
import BerthsLegend from '../../legends/BerthLegend';

import { BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { BerthsServices, SelectedServices, WinterServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

import { berthRoutes, winterRoutes } from '../../../constants/StepsConstants';
import { CategoryOptions } from '../../../types/categoryType';
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
  services: Array<{
    label: string;
    value: BerthsServices | WinterServices;
    icon: IconNames;
  }>;
  berthLimit: number;
  categoryType: CategoryOptions;
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { categoryType, localePush } = this.props;
    const path =
      categoryType === CategoryOptions.WINTER_STORAGE
        ? `/${CategoryOptions.WINTER_STORAGE}/${winterRoutes[1]}`
        : `/${CategoryOptions.BERTHS}/${berthRoutes[1]}`;
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
      services,
      berthLimit,
      categoryType
    } = this.props;

    const isBerthCategory = categoryType === CategoryOptions.BERTHS;
    const filter = getBerthFilterByValues(initialValues, selectedServices);

    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerths.find(selectedBerth => selectedBerth.id === berth.id))
      .every(filter);

    return (
      <Layout hero={categoryType}>
        <div className="vene-berth-page">
          <BerthsLegend
            legend={{
              title: `legend.${categoryType}.title`,
              legend: `legend.${categoryType}.legend`
            }}
            form={{
              onSubmit,
              initialValues,
              render: () => (
                <UnRegisteredBoatDetails
                  hideTitle
                  fieldsNotRequired
                  boatTypes={isBerthCategory ? boatTypes : undefined}
                />
              )
            }}
            services={{
              selectedServices,
              selectService,
              deselectService,
              label: `form.services.field.${categoryType}.services.label`,
              available: services
            }}
            showApplicationSelector={isBerthCategory}
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
  }
}

export default BerthPage;
