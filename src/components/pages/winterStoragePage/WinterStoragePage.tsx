import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import { getWinterStorageFilterByValues } from '../../../utils/berths';
import Berths from '../../berths';
import TabSelector from '../../berths/TabSelector';
import Hero from '../../common/hero/Hero';
import { IconNames } from '../../common/Icon';
import Map from '../../common/Map';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import KoroSection from '../../layout/koroSection/KoroSection';
import Layout from '../../layout/Layout';
import WinterStorageLegend from '../../legends/winterStorageLegend/WinterStorageLegend';
import WinterStorage2019Warning from './WinterStorage2019Warning';

import { StorageAreaFilter } from '../../../redux/reducers/WinterAreaReducers';
import { BoatTypes } from '../../../types/boatTypes';
import { SelectedWinterServices, WinterServices } from '../../../types/services';
import { WinterFormValues, WinterStorageType } from '../../../types/winterStorage';
import { LocalePush } from '../../../utils/container';
import { SelectedIds, WinterAreas } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';

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
      berthLimit,
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
          <WinterStorage2019Warning />
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
          berthLimit={berthLimit}
        >
          <Map
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.map" />}
            filtered={filtered}
            filteredNot={filteredNot}
            selected={selectedAreasIds}
            onClick={this.toggleBerthSelect}
            berthLimit={berthLimit}
          />
          <Berths
            TabHeader={() => <FormattedMessage tagName="span" id="page.berths.list" />}
            filtered={filtered}
            filteredNot={filteredNot}
            selected={selectedAreasIds}
            onClick={this.toggleBerthSelect}
            berthLimit={berthLimit}
          />
        </TabSelector>
      </Layout>
    );
  }
}

export default injectIntl(WinterStoragePage);
