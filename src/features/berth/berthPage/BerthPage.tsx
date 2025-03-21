import { useLayoutEffect } from 'react';
import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { isResourceSelected } from '../../../common/utils/applicationUtils';
import TabSelector from '../../../common/tabSelector/TabSelector';
import CardsList from '../../../common/cardsList/CardsList';
import Hero from '../../../common/hero/Hero';
import { IconNames } from '../../../common/icon/Icon';
import Map from '../../../common/map/Map';
import UnregisteredBoatDetails from '../../../common/unregisteredBoatDetails/UnregisteredBoatDetails';
import KoroSection from '../../../common/layout/koroSection/KoroSection';
import Layout from '../../../common/layout/Layout';
import { getBerthFilterByValues } from '../utils';
import BerthLegend from './berthLegend/BerthLegend';
import { BerthFormValues, Harbors, HarborType } from '../types';
import { BoatTypes } from '../../../common/types/boatTypes';
import { BerthsServices, SelectedServices } from '../../../common/types/services';
import { LocalePush } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import berthsHeroImg from '../../../assets/images/hero_image_berth.jpg';
import BerthCard from './BerthCard';

export type Props = {
  berthLimit: number;
  harbors: Harbors;
  boatTypes?: BoatTypes;
  deselectBerth: (berthId: string) => void;
  deselectService: (type: string) => void;
  filtered: Harbors;
  filteredNot: Harbors;
  initialValues: BerthFormValues;
  loading: boolean;
  localePush: LocalePush;
  onSubmit: (values: BerthFormValues) => void;
  selectBerth: (berthId: string) => void;
  selectService: (type: string) => void;
  selectedHarborsIds: SelectedIds;
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
      return 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/boating/berths-for-rent';
    case 'sv':
      return 'https://www.hel.fi/sv/kultur-och-fritid/friluftsliv-parker-och-naturomraden/batliv/batplatser-som-kan-hyras';
    default:
      return 'https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/veneily/vuokrattavat-venepaikat';
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
  harbors,
  boatTypes,
  deselectBerth,
  deselectService,
  initialValues,
  loading,
  localePush,
  onSubmit,
  selectBerth,
  selectService,
  selectedHarborsIds,
  selectedServices,
  services,
  steps,
}: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const moveToForm = () => localePush('berths/selected');

  const toggleBerthSelect = (selectedBerth: HarborType) => {
    if (selectedHarborsIds.find((selectedId) => selectedId === selectedBerth.id)) {
      deselectBerth(selectedBerth.id);
    } else {
      selectBerth(selectedBerth.id);
    }
  };

  const filter = getBerthFilterByValues(initialValues, selectedServices);
  const filtered = harbors.filter(filter).sortBy((harbor) => harbor.name);
  const filteredNot = harbors.filterNot(filter).sortBy((harbor) => harbor.name);
  const invalidSelection = !harbors
    .filter((selectedBerth) => selectedHarborsIds.find((selectedId) => selectedId === selectedBerth.id))
    .every(filter);

  const renderHarborCard: (isExcluded: boolean) => (berth: HarborType) => React.ReactNode = (isExcluded) => (berth) => {
    return (
      <BerthCard
        key={berth.id}
        berth={berth}
        selected={isResourceSelected(selectedHarborsIds, berth.id)}
        disabled={selectedHarborsIds.size >= berthLimit}
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
        selectedCount={selectedHarborsIds.size}
        invalidSelection={invalidSelection ? 'error.message.invalid_berth_selection' : undefined}
        tabMessage={
          <span>
            {t(getFormattedMessageId(selectedHarborsIds.size, berthLimit), {
              total: berthLimit,
              count: berthLimit - selectedHarborsIds.size, // left
            })}
          </span>
        }
      >
        <Map
          TabHeader={() => <span>{t('site.common.map')}</span>}
          mapHeader={<span>{t('page.berths.list.berth_count', { count: filtered.size })}</span>}
          filtered={filtered}
          filteredNot={filteredNot}
          selectedIds={selectedHarborsIds}
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
