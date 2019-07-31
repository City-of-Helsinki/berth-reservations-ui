import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import { getBerthFilterByValues } from '../../../utils/berths';
import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import { IconNames } from '../../common/Icon';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import Layout from '../../layout/Layout';
import BerthsLegend from '../../legends/berthLegend/BerthLegend';

import { BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { BerthsServices, SelectedServices, WinterServices } from '../../../types/services';
import { LocalePush } from '../../../utils/container';
import { Berths as BerthsType, SelectedIds } from '../../berths/types';

import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';

import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import Hero from '../../common/hero/Hero';
import KoroSection from '../../layout/koroSection/KoroSection';
import { StepType } from '../../steps/step/Step';
type Props = {
  initialValues: {};
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerthsIds: SelectedIds;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: LocalePush;
  berths: BerthsType;
  boatTypes?: BoatTypes;
  steps: StepType[];
  services: Array<{
    label: string;
    value: BerthsServices | WinterServices;
    icon: IconNames;
  }>;
  berthLimit: number;
  storageAreaFilter?: StorageAreaFilter;
} & InjectedIntlProps;

const getHeroContentLink = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'https://www.hel.fi/helsinki/en/culture/recreation/boating/boat-berths/';
    case 'sv':
      return 'https://www.hel.fi/helsinki/sv/kultur-och-fritid/friluftsliv/botliv/batplatser/';
    default:
      return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/venepaikan-hakeminen/';
  }
};

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('berths/selected');
  };

  toggleBerthSelect = (berth: BerthType) => {
    const { selectedBerthsIds, selectBerth, deselectBerth } = this.props;
    if (selectedBerthsIds.find(selectedId => selectedId === berth.id)) {
      deselectBerth(berth.id);
    } else {
      selectBerth(berth.id);
    }
  };

  render() {
    const {
      initialValues,
      selectedBerthsIds,
      berths,
      selectedServices,
      selectService,
      deselectService,
      onSubmit,
      boatTypes,
      steps,
      services,
      berthLimit,
      storageAreaFilter,
      intl
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices, storageAreaFilter);
    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerthsIds.find(selectedId => selectedId === berth.id))
      .every(filter);

    return (
      <Layout>
        <Hero title={`site.berth.title`} bgUrl={berthsHeroImg} />
        <KoroSection
          top
          title={`hero.berth.title`}
          description={[
            { id: `hero.berth.paragraph.first` },
            {
              id: `hero.berth.paragraph.second`,
              values: { url: getHeroContentLink(intl.locale) }
            }
          ]}
        />
        <KoroSection color="fog" top className="vene-berth-filters-section">
          <BerthsLegend
            legend={{ title: `legend.berth.title`, legend: `legend.berth.legend` }}
            form={{
              onSubmit,
              initialValues,
              render: () => (
                <UnRegisteredBoatDetails
                  // @ts-ignore
                  boatStoredOnTrailer={!!initialValues.boatStoredOnTrailer}
                  showBoatStoredOnTrailer={false}
                  hideTitle
                  fieldsNotRequired
                  boatTypes={boatTypes}
                />
              )
            }}
            steps={steps}
            services={{
              selectedServices,
              selectService,
              deselectService,
              label: `form.services.field.berth.services.label`,
              available: services
            }}
          />
        </KoroSection>
        <TabSelector
          progress={this.moveToForm}
          selectedCount={selectedBerthsIds.size}
          validSelection={validSelection}
          berthLimit={berthLimit}
        >
          <BerthsOnMap
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
            filtered={filtered}
            filteredNot={filteredNot}
            selected={selectedBerthsIds}
            onClick={this.toggleBerthSelect}
            berthLimit={berthLimit}
          />
          <Berths
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
            filtered={filtered}
            filteredNot={filteredNot}
            selected={selectedBerthsIds}
            onClick={this.toggleBerthSelect}
            berthLimit={berthLimit}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default injectIntl(BerthPage);
