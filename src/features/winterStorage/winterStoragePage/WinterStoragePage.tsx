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
import { getWinterStorageFilterByValues } from '../utils';
import WinterStorageLegend from './winterStorageLegend/WinterStorageLegend';
import { BoatTypes } from '../../../common/types/boatTypes';
import { SelectedWinterServices, WinterServices } from '../../../common/types/services';
import { WinterStorageAreas, WinterFormValues, WinterStorageAreaType } from '../types';
import { LocalePush } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import WinterStorageCard from './WinterStorageCard';
import WinterStorageNotice from './WinterStorageNotice';

export type Props = {
  initialValues: WinterFormValues;
  selectedAreasIds: SelectedIds;
  selectedServices: SelectedWinterServices;
  selectArea: (areaId: string) => void;
  deselectArea: (areaId: string) => void;
  selectService: (type: string) => void;
  deselectService: (type: string) => void;
  onSubmit: (values: WinterFormValues) => void;
  localePush: LocalePush;
  areas: WinterStorageAreas;
  boatTypes?: BoatTypes;
  steps: StepType[];
  services: {
    label: string;
    value: WinterServices;
    icon: IconNames;
  }[];
  areasLimit: number;
  loading: boolean;
};

const getFormattedMessageId = (count: number, total: number): string => {
  if (count) {
    if (count === total) {
      return 'page.winter_storage.list.progress.max';
    }
    return 'page.winter_storage.list.progress.remaining';
  }
  return 'page.winter_storage.list.progress.zero';
};

const WinterStoragePage = ({
  areas,
  areasLimit,
  boatTypes,
  deselectArea,
  deselectService,
  initialValues,
  loading,
  localePush,
  onSubmit,
  selectArea,
  selectService,
  selectedAreasIds,
  selectedServices,
  services,
  steps,
}: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const moveToForm = () => localePush('winter-storage/selected');

  const handleSelectArea = (winterArea: WinterStorageAreaType) => {
    if (selectedAreasIds.find((selectedId) => selectedId === winterArea.id)) {
      deselectArea(winterArea.id);
    } else {
      selectArea(winterArea.id);
    }
  };

  const filter = getWinterStorageFilterByValues(initialValues, selectedServices);
  const filtered = areas.filter(filter);
  const filteredNot = areas.filterNot(filter);
  const invalidSelection = !areas
    .filter((area) => selectedAreasIds.find((selectedId) => selectedId === area.id))
    .every(filter);

  const renderAreaCard: (isExcluded: boolean) => (selected: WinterStorageAreaType) => React.ReactNode = (
    isExcluded
  ) => (area) => {
    return (
      <WinterStorageCard
        key={area.id}
        area={area}
        selected={isResourceSelected(selectedAreasIds, area.id)}
        disabled={selectedAreasIds.size >= areasLimit}
        isExcluded={isExcluded}
        handleSelect={() => handleSelectArea(area)}
      />
    );
  };

  return (
    <Layout>
      <Hero title={`site.winter.title`} bgUrl={winterHeroImg} bgPosition="center" />
      <KoroSection
        top
        title={`hero.winter.title`}
        description={
          <>
            <p>{t('hero.winter.paragraph.first')}</p>
          </>
        }
      >
        <WinterStorageNotice />
      </KoroSection>
      <KoroSection color="fog" top className="vene-berth-filters-section">
        <WinterStorageLegend
          legend={{ title: `legend.winter.title`, legend: `legend.winter.legend` }}
          form={{
            onSubmit,
            initialValues,
            render: () => (
              <UnregisteredBoatDetails
                boatStoredOnTrailer={initialValues.boatStoredOnTrailer}
                showBoatStoredOnTrailer
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
            label: `form.services.field.winter.services.label`,
            available: services,
          }}
        />
      </KoroSection>
      <TabSelector
        progress={moveToForm}
        selectedCount={selectedAreasIds.size}
        invalidSelection={invalidSelection ? 'error.message.invalid_area_selection' : undefined}
        tabMessage={
          <span>
            {t(getFormattedMessageId(selectedAreasIds.size, areasLimit), {
              total: areasLimit,
              count: areasLimit - selectedAreasIds.size, // left
            })}
          </span>
        }
      >
        <Map
          TabHeader={() => <span>{t('site.common.map')}</span>}
          mapHeader={<span>{t('page.winter_storage.list.areas_count', { count: filtered.size })}</span>}
          filtered={filtered}
          filteredNot={filteredNot}
          selectedIds={selectedAreasIds}
          renderSelected={renderAreaCard(false)}
          loading={loading}
        />
        <CardsList
          TabHeader={() => <span>{t('site.common.list')}</span>}
          includedHeader="page.winter_storage.list.areas_count"
          included={filtered.map(renderAreaCard(false)).toArray()}
          excludedHeader="page.winter_storage.list.header.others"
          excluded={filteredNot.map(renderAreaCard(true)).toArray()}
          loading={loading}
        />
      </TabSelector>
    </Layout>
  );
};

export default WinterStoragePage;
