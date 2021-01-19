import React, { Component } from 'react';
import { Trans, WithTranslation, withTranslation } from 'react-i18next';

import { getBerthFilterByValues, isResourceSelected } from '../../../utils/berths';
import TabSelector from '../../berths/tabSelector/TabSelector';
import CardsList from '../../../common/cardsList/CardsList';
import Hero from '../../../common/hero/Hero';
import { IconNames } from '../../../common/icon/Icon';
import Map from '../../../common/map/Map';
import UnregisteredBoatDetails from '../../forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import KoroSection from '../../../common/layout/koroSection/KoroSection';
import Layout from '../../../common/layout/Layout';
import BerthsLegend from '../../legends/berthLegend/BerthLegend';
import { BerthFormValues, BerthType } from '../../../types/berth';
import { BoatTypes } from '../../../types/boatTypes';
import { BerthsServices, SelectedServices } from '../../../types/services';
import { LocalePush } from '../../../utils/container';
import { Berths as BerthsType, SelectedIds } from '../../berths/types';
import { StepType } from '../../../common/steps/step/Step';
import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';
import BerthCard from './BerthCard';

export interface Props extends WithTranslation {
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
  services: {
    label: string;
    value: BerthsServices;
    icon: IconNames;
  }[];
  berthLimit: number;
  loading: boolean;
}

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
      return 'page.berths.list.progress.max';
    }
    return 'page.berths.list.progress.remaining';
  }
  return 'page.berths.list.progress.zero';
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
    if (selectedBerthsIds.find((selectedId) => selectedId === selectedBerth.id)) {
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
      t,
      loading,
      i18n: { language },
    } = this.props;
    const filter = getBerthFilterByValues(initialValues, selectedServices);
    const filtered = berths.filter(filter);
    const filteredNot = berths.filterNot(filter);
    const invalidSelection = !berths
      .filter((selectedBerth) => selectedBerthsIds.find((selectedId) => selectedId === selectedBerth.id))
      .every(filter);

    const renderHarborCard: (isExcluded: boolean) => (berth: BerthType) => React.ReactNode = (isExcluded) => (
      berth
    ) => {
      return (
        <BerthCard
          key={berth.id}
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
          description={
            <>
              <p>{t('hero.berth.paragraph.first')}</p>
              <p>
                <Trans
                  i18nKey={'hero.berth.paragraph.second'}
                  components={[
                    <a
                      key={'berthHeroContentLink'}
                      href={getHeroContentLink(language)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      content
                    </a>,
                  ]}
                />
              </p>
            </>
          }
        />
        <KoroSection color="fog" top className="vene-berth-filters-section">
          <BerthsLegend
            legend={{ title: `legend.berth.title`, legend: `legend.berth.legend` }}
            form={{
              onSubmit,
              initialValues,
              render: () => (
                <UnregisteredBoatDetails
                  showBoatStoredOnTrailer={false}
                  hideTitle
                  fieldsNotRequired
                  boatTypes={boatTypes}
                />
              ),
            }}
            steps={steps}
            services={{
              selectedServices,
              selectService,
              deselectService,
              label: `form.services.field.berth.services.label`,
              available: services,
            }}
          />
        </KoroSection>
        <TabSelector
          progress={this.moveToForm}
          selectedCount={selectedBerthsIds.size}
          invalidSelection={invalidSelection ? 'error.message.invalid_berth_selection' : undefined}
          tabMessage={
            <span>
              {t(getFormattedMessageId(selectedBerthsIds.size, berthLimit), {
                total: berthLimit,
                count: berthLimit - selectedBerthsIds.size, // left
              })}
            </span>
          }
        >
          <Map
            TabHeader={() => <span>{t('site.common.map')}</span>}
            mapHeader={<span>{t('page.berths.list.berth_count', { count: filtered.size })}</span>}
            filtered={filtered}
            filteredNot={filteredNot}
            selectedIds={selectedBerthsIds}
            renderSelected={renderHarborCard(false)}
            loading={loading}
          />
          <CardsList
            TabHeader={() => <span>{t('site.common.list')}</span>}
            includedHeader="page.berths.list.berth_count"
            included={filtered.map(renderHarborCard(false)).toArray()}
            excludedHeader="page.berths.list.header.others"
            excluded={filteredNot.map(renderHarborCard(true)).toArray()}
            loading={loading}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default withTranslation()(BerthPage);
