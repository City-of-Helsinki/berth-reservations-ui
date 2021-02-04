import React, { useLayoutEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { getBerthFilterByValues, isResourceSelected } from '../../../common/utils/applicationUtils';
import TabSelector from '../../../common/tabSelector/TabSelector';
import CardsList from '../../../common/cardsList/CardsList';
import Hero from '../../../common/hero/Hero';
import { IconNames } from '../../../common/icon/Icon';
import Map from '../../../common/map/Map';
import UnregisteredBoatDetails from '../../../common/unregisteredBoatDetails/UnregisteredBoatDetails';
import KoroSection from '../../../common/layout/koroSection/KoroSection';
import Layout from '../../../common/layout/Layout';
import BerthLegend from './berthLegend/BerthLegend';
import { BerthFormValues, Berths as BerthsType, BerthType } from '../types';
import { BoatTypes } from '../../../common/types/boatTypes';
import { BerthsServices, SelectedServices } from '../../../common/types/services';
import { LocalePush } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';
import BerthCard from './BerthCard';

export type Props = {
  berthLimit: number;
  berths: BerthsType;
  boatTypes?: BoatTypes;
  deselectBerth: Function;
  deselectService: Function;
  filtered: BerthsType;
  filteredNot: BerthsType;
  initialValues: BerthFormValues;
  loading: boolean;
  localePush: LocalePush;
  onSubmit: Function;
  selectBerth: Function;
  selectService: Function;
  selectedBerthsIds: SelectedIds;
  selectedServices: SelectedServices;
  services: {
    label: string;
    value: BerthsServices;
    icon: IconNames;
  }[];
  steps: StepType[];
};

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

const BerthPage = ({
  berthLimit,
  berths,
  boatTypes,
  deselectBerth,
  deselectService,
  initialValues,
  loading,
  localePush,
  onSubmit,
  selectBerth,
  selectService,
  selectedBerthsIds,
  selectedServices,
  services,
  steps,
}: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0));

  const moveToForm = () => localePush('berths/selected');

  const toggleBerthSelect = (selectedBerth: BerthType) => {
    if (selectedBerthsIds.find((selectedId) => selectedId === selectedBerth.id)) {
      deselectBerth(selectedBerth.id);
    } else {
      selectBerth(selectedBerth.id);
    }
  };

  const filter = getBerthFilterByValues(initialValues, selectedServices);
  const filtered = berths.filter(filter);
  const filteredNot = berths.filterNot(filter);
  const invalidSelection = !berths
    .filter((selectedBerth) => selectedBerthsIds.find((selectedId) => selectedId === selectedBerth.id))
    .every(filter);

  const renderHarborCard: (isExcluded: boolean) => (berth: BerthType) => React.ReactNode = (isExcluded) => (berth) => {
    return (
      <BerthCard
        key={berth.id}
        berth={berth}
        selected={isResourceSelected(selectedBerthsIds, berth.id)}
        disabled={selectedBerthsIds.size >= berthLimit}
        isExcluded={isExcluded}
        handleSelect={() => toggleBerthSelect(berth)}
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
        <BerthLegend
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
        progress={moveToForm}
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
};

export default BerthPage;
