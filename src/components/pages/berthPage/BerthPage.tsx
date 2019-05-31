import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import { getBerthFilterByValues } from '../../../utils/berths';
import Berths from '../../berths';
import BerthsOnMap from '../../berths/BerthsOnMap';
import TabSelector from '../../berths/TabSelector';
import { IconNames } from '../../common/Icon';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import Layout from '../../layout/Layout';
import BerthsLegend from '../../legends/BerthLegend';

import { BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { FormMode } from '../../../types/form';
import { BerthsServices, SelectedServices, WinterServices } from '../../../types/services';
import { LocalePush } from '../../../utils/container';
import { Berths as BerthsType } from '../../berths/types';

import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';
import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';

import Hero from '../../common/hero/Hero';
import KoroSection from '../../layout/koroSection/KoroSection';

type Props = {
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
  localePush: LocalePush;
  berths: BerthsType;
  boatTypes?: BoatTypes;
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
  hero?: FormMode;
  berthLimit: number;
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
    const { hero, localePush } = this.props;
    const path = hero === FormMode.Winter ? 'winter-storage/selected' : 'berths/selected';
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
      services,
      berthLimit,
      intl
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);

    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const validSelection = berths
      .filter(berth => selectedBerths.find(selectedBerth => selectedBerth.id === berth.id))
      .every(filter);
    const showApplicationSelector = hero === FormMode.Berth;
    const heroImg =
      hero === FormMode.Berth
        ? { bgUrl: berthsHeroImg }
        : { bgUrl: winterHeroImg, bgPosition: 'center' };

    return (
      <Layout>
        <Hero title={`site.${hero}.title`} {...heroImg} />
        <KoroSection
          top
          title={`hero.${hero}.title`}
          description={[
            { id: `hero.${hero}.paragraph.first` },
            {
              id: `hero.${hero}.paragraph.second`,
              values: { url: getHeroContentLink(intl.locale) }
            }
          ]}
        />
        <KoroSection color="fog" top>
          <BerthsLegend
            legend={{ title: `legend.${hero}.title`, legend: `legend.${hero}.legend` }}
            form={{
              onSubmit,
              initialValues,
              render: () => (
                <UnRegisteredBoatDetails hideTitle fieldsNotRequired boatTypes={boatTypes} />
              )
            }}
            steps={steps}
            services={{
              selectedServices,
              selectService,
              deselectService,
              label: `form.services.field.${hero}.services.label`,
              available: services
            }}
            showApplicationSelector={showApplicationSelector}
          />
        </KoroSection>
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
      </Layout>
    );
  }
}

export default injectIntl(BerthPage);
