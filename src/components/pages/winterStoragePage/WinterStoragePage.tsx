import React, { Component } from 'react';
import { Trans, WithTranslation, withTranslation } from 'react-i18next';

import { getWinterStorageFilterByValues, isResourceSelected } from '../../../utils/berths';
import TabSelector from '../../berths/tabSelector/TabSelector';
import CardsList from '../../../common/cardsList/CardsList';
import Hero from '../../../common/hero/Hero';
import { IconNames } from '../../../common/icon/Icon';
import Map from '../../../common/map/Map';
import UnregisteredBoatDetails from '../../forms/fragments/unregisteredBoatDetails/UnregisteredBoatDetails';
import KoroSection from '../../../common/layout/koroSection/KoroSection';
import Layout from '../../../common/layout/Layout';
import WinterStorageLegend from '../../legends/winterStorageLegend/WinterStorageLegend';
import { BoatTypes } from '../../../types/boatTypes';
import { SelectedWinterServices, WinterServices } from '../../../types/services';
import { WinterFormValues, WinterStorageType } from '../../../types/winterStorage';
import { LocalePush } from '../../../utils/container';
import { SelectedIds, WinterAreas } from '../../berths/types';
import { StepType } from '../../../common/steps/step/Step';
import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import WinterStorageCard from './WinterStorageCard';
import WinterStorageNotice from './WinterStorageNotice';

type Props = {
  initialValues: WinterFormValues;
  selectedAreasIds: SelectedIds;
  selectedServices: SelectedWinterServices;
  selectArea: Function;
  deselectArea: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: LocalePush;
  areas: WinterAreas;
  boatTypes?: BoatTypes;
  steps: StepType[];
  services: {
    label: string;
    value: WinterServices;
    icon: IconNames;
  }[];
  areasLimit: number;
  loading: boolean;
} & WithTranslation;

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
      return 'page.winter_storage.list.progress.max';
    }
    return 'page.winter_storage.list.progress.remaining';
  }
  return 'page.winter_storage.list.progress.zero';
};

class WinterStoragePage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('winter-storage/selected');
  };

  toggleBerthSelect = (winterArea: WinterStorageType) => {
    const { selectedAreasIds, selectArea, deselectArea } = this.props;
    if (selectedAreasIds.find((selectedId) => selectedId === winterArea.id)) {
      deselectArea(winterArea.id);
    } else {
      selectArea(winterArea.id);
    }
  };

  render() {
    const {
      areas,
      areasLimit,
      boatTypes,
      deselectService,
      i18n: { language },
      initialValues,
      onSubmit,
      selectService,
      selectedAreasIds,
      selectedServices,
      services,
      steps,
      t,
      loading,
    } = this.props;
    const filter = getWinterStorageFilterByValues(initialValues, selectedServices);
    const filtered = areas.filter(filter);
    const filteredNot = areas.filterNot(filter);
    const invalidSelection = !areas
      .filter((area) => selectedAreasIds.find((selectedId) => selectedId === area.id))
      .every(filter);

    const renderAreaCard: (isExcluded: boolean) => (selected: WinterStorageType) => React.ReactNode = (isExcluded) => (
      area
    ) => {
      return (
        <WinterStorageCard
          key={area.id}
          area={area}
          selected={isResourceSelected(selectedAreasIds, area.id)}
          disabled={selectedAreasIds.size >= areasLimit}
          isExcluded={isExcluded}
          handleSelect={() => this.toggleBerthSelect(area)}
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
              <p>
                <Trans
                  i18nKey={'hero.winter.paragraph.second'}
                  components={[
                    <a
                      key={'winterHeroContentLink'}
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
                  boatStoredOnTrailer={!!initialValues.boatStoredOnTrailer}
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
          progress={this.moveToForm}
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
  }
}

export default withTranslation()(WinterStoragePage);
