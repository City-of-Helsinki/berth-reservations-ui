import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import { getBerthFilterByValues, isResourceSelected } from '../../../utils/berths';
import TabSelector from '../../berths/TabSelector/TabSelector';
import CardsList from '../../common/cardsList/CardsList';
import Hero from '../../common/hero/Hero';
import { IconNames } from '../../common/Icon';
import Map from '../../common/Map/Map';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import KoroSection from '../../layout/koroSection/KoroSection';
import Layout from '../../layout/Layout';
import BerthsLegend from '../../legends/berthLegend/BerthLegend';

import { BerthFormValues, BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { BerthsServices, SelectedServices } from '../../../types/services';
import { LocalePush } from '../../../utils/container';
import { Berths as BerthsType, SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';
import BerthCard from './BerthCard';

type Props = {
  initialValues: BerthFormValues;
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
    value: BerthsServices;
    icon: IconNames;
  }>;
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

const getFormattedMessageId = (count: number, total: number): string => {
  if (count) {
    if (count === total) {
      return 'page.berths.list.progress.message.max';
    }
    return 'page.berths.list.progress.message';
  }
  return 'page.berths.list.progress.message.zero';
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

  toggleBerthSelect = (selectedBerth: BerthType) => {
    const { selectedBerthsIds, selectBerth, deselectBerth } = this.props;
    if (selectedBerthsIds.find(selectedId => selectedId === selectedBerth.id)) {
      deselectBerth(selectedBerth.id);
    } else {
      selectBerth(selectedBerth.id);
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
      intl
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);
    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const invalidSelection = !berths
      .filter(selectedBerth =>
        selectedBerthsIds.find(selectedId => selectedId === selectedBerth.id)
      )
      .every(filter);

    const renderHarborCard: (
      isExcluded: boolean
    ) => (berth: BerthType) => React.ReactNode = isExcluded => berth => {
      return (
        <BerthCard
          berth={berth}
          selected={isResourceSelected(selectedBerthsIds, berth.id)}
          disabled={selectedBerthsIds.size >= berthLimit}
          isExcluded={isExcluded}
          handleSelect={() => this.toggleBerthSelect(berth)}
        />
      );
    };

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
          invalidSelection={invalidSelection ? 'error.message.invalid_berth_selection' : undefined}
          tabMessage={
            <FormattedMessage
              id={getFormattedMessageId(selectedBerthsIds.size, berthLimit)}
              values={{
                total: berthLimit,
                left: berthLimit - selectedBerthsIds.size
              }}
            />
          }
        >
          <Map
            TabHeader={() => <FormattedMessage tagName="span" id="site.common.map" />}
            mapHeader={
              <FormattedMessage
                id="page.berths.list.berth_count"
                values={{ count: filtered.size }}
              />
            }
            filtered={filtered}
            filteredNot={filteredNot}
            selectedIds={selectedBerthsIds}
            renderSelected={renderHarborCard(false)}
          />
          <CardsList
            TabHeader={() => <FormattedMessage tagName="span" id="site.common.list" />}
            includedHeader="page.berths.list.berth_count"
            included={filtered.map(renderHarborCard(false)).toArray()}
            excludedHeader="page.berths.list.header.others"
            excluded={filteredNot.map(renderHarborCard(true)).toArray()}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default injectIntl(BerthPage);
