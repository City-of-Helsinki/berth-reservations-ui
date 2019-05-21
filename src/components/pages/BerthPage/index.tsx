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
import { FormMode } from '../../../types/form';
import { BerthsServices, SelectedServices, WinterServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

import { match as matchType } from 'react-router';
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
  hero?: FormMode;
  berthLimit: number;
  generateSteps: Function;
  match: matchType<{ category: CategoryOptions }>;
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const {
      match: {
        params: { category }
      }
    } = this.props;

    this.props.generateSteps(
      category === CategoryOptions.BERTHS ? berthRoutes : winterRoutes,
      category
    );
  }

  moveToForm = async () => {
    const { hero, localePush } = this.props;
    const path = hero === FormMode.Winter ? '/winter_storage/selected_areas' : '/berths/selected';
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
      services,
      berthLimit
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);

    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerths.find(selectedBerth => selectedBerth.id === berth.id))
      .every(filter);
    const showBoatTypes = hero === FormMode.Berth;
    const showApplicationSelector = hero === FormMode.Berth;

    return (
      <Layout hero={hero}>
        <div className="vene-berth-page">
          <BerthsLegend
            legend={{ title: `legend.${hero}.title`, legend: `legend.${hero}.legend` }}
            form={{
              onSubmit,
              initialValues,
              render: () => (
                <UnRegisteredBoatDetails
                  hideTitle
                  fieldsNotRequired
                  boatTypes={showBoatTypes ? boatTypes : undefined}
                />
              )
            }}
            services={{
              selectedServices,
              selectService,
              deselectService,
              label: `form.services.field.${hero}.services.label`,
              available: services
            }}
            showApplicationSelector={showApplicationSelector}
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
