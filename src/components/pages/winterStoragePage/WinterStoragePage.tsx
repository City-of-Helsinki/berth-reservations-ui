import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import {
  getWinterStorageFilterByValues,
  isResourceSelected,
  convertCmToM
} from '../../../utils/berths';
import CardsList from '../../common/cardsList/CardsList';
import TabSelector from '../../berths/TabSelector/TabSelector';
import Hero from '../../common/hero/Hero';
import { IconNames } from '../../common/Icon';
import Map from '../../common/Map/Map';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import KoroSection from '../../layout/koroSection/KoroSection';
import Layout from '../../layout/Layout';
import WinterStorageLegend from '../../legends/winterStorageLegend/WinterStorageLegend';

import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import { BoatTypes } from '../../../types/boatTypes';
import { SelectedWinterServices, WinterServices } from '../../../types/services';
import { WinterFormValues, WinterStorageType } from '../../../types/winterStorage';
import { LocalePush } from '../../../utils/container';
import { SelectedIds, WinterAreas } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import WinterStorageNotice from './WinterStorageNotice';
import AreaCard from '../../common/areaCard/AreaCard';
import Property from '../../common/areaCard/property/Property';

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
  services: Array<{
    label: string;
    value: WinterServices;
    icon: IconNames;
  }>;
  areasLimit: number;
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

const getFormattedMessageId = (count: number, total: number): string => {
  if (count) {
    if (count === total) {
      return 'page.winter_storage.list.progress.message.max';
    }
    return 'page.winter_storage.list.progress.message.other';
  }
  return 'page.winter_storage.list.progress.message.zero';
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
    if (selectedAreasIds.find(selectedId => selectedId === winterArea.id)) {
      deselectArea(winterArea.id);
    } else {
      selectArea(winterArea.id);
    }
  };

  render() {
    const {
      initialValues,
      selectedAreasIds,
      areas,
      selectedServices,
      selectService,
      deselectService,
      onSubmit,
      boatTypes,
      steps,
      services,
      areasLimit,
      storageAreaFilter,
      intl
    } = this.props;
    const filter = getWinterStorageFilterByValues(
      initialValues,
      selectedServices,
      storageAreaFilter
    );
    const filtered = areas.filter(filter);
    const filteredNot = areas.filterNot(filter);
    const validSelection = areas
      .filter(area => selectedAreasIds.find(selectedId => selectedId === area.id))
      .every(filter);

    const renderAreaCard: (
      excluded: boolean
    ) => (selected: WinterStorageType) => React.ReactNode = excluded => area => {
      const maximumWidth = convertCmToM(area.maximumWidth);
      const maximumLength = convertCmToM(area.maximumLength);
      const address = `${area.streetAddress}, ${area.zipCode} ${area.municipality}`;

      return (
        <AreaCard
          name={area.name}
          excluded={excluded}
          key={area.id}
          id={area.id}
          address={address}
          imageFile={area.imageFile}
          availabilityLevel={area.availabilityLevel}
          servicemapId={area.servicemapId}
          handleSelect={() => this.toggleBerthSelect(area)}
          selected={isResourceSelected(selectedAreasIds, area.id)}
          disabled={selectedAreasIds.size >= areasLimit}
          details={[
            <Property
              key="maximumWidth"
              available
              value={maximumWidth}
              unit="m"
              titleId="page.winter_storage.maximum_width"
            />,
            <Property
              key="maximumLength"
              available
              value={maximumLength}
              unit="m"
              titleId="page.winter_storage.maximum_length"
            />,
            <Property
              key="appointed"
              available={!!area.numberOfMarkedPlaces}
              iconName="divided"
              titleId="page.winter_storage.appointed"
            />,
            <Property
              key="gate"
              available={area.gate}
              iconName="fence"
              titleId="page.winter_storage.fence"
            />,
            <Property
              key="electricity"
              available={area.electricity}
              iconName="plug"
              titleId="page.winter_storage.electricity"
            />,
            <Property
              key="summerStorageForDockingEquipment"
              available={area.summerStorageForDockingEquipment}
              iconName="trestle"
              titleId="page.winter_storage.storage_for_docking_equip"
            />,
            <Property
              key="water"
              available={area.water}
              iconName="waterTap"
              titleId="page.winter_storage.water_tap"
            />,
            <Property
              key="summerStorageForTrailers"
              available={area.summerStorageForTrailers}
              iconName="dollyEmpty"
              titleId="page.winter_storage.storage_for_trailers"
            />
          ]}
        />
      );
    };

    return (
      <Layout>
        <Hero title={`site.winter.title`} bgUrl={winterHeroImg} bgPosition="center" />
        <KoroSection
          top
          title={`hero.winter.title`}
          description={[
            { id: `hero.winter.paragraph.first` },
            {
              id: `hero.winter.paragraph.second`,
              values: { url: getHeroContentLink(intl.locale) }
            }
          ]}
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
                <UnRegisteredBoatDetails
                  boatStoredOnTrailer={!!initialValues.boatStoredOnTrailer}
                  showBoatStoredOnTrailer
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
              label: `form.services.field.winter.services.label`,
              available: services
            }}
          />
        </KoroSection>
        <TabSelector
          progress={this.moveToForm}
          selectedCount={selectedAreasIds.size}
          validSelection={validSelection}
          tabMessage={
            <FormattedMessage
              id={getFormattedMessageId(selectedAreasIds.size, areasLimit)}
              values={{
                total: areasLimit,
                count: areasLimit - selectedAreasIds.size
              }}
            />
          }
        >
          <Map
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
            mapHeader={
              <FormattedMessage
                id="page.winter_storage.list.areas_count"
                values={{ count: filtered.size }}
              />
            }
            filtered={filtered}
            filteredNot={filteredNot}
            selectedIds={selectedAreasIds}
            renderSelected={renderAreaCard(false)}
          />
          <CardsList
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
            includedHeader="page.berths.list.berth_count"
            included={filtered.map(renderAreaCard(false)).toArray()}
            excludedHeader="page.berths.list.header.others"
            excluded={filteredNot.map(renderAreaCard(true)).toArray()}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default injectIntl(WinterStoragePage);
