import React, { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import { convertCmToM, getBerthFilterByValues, isResourceSelected } from '../../../utils/berths';
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
import AreaCard from '../../common/areaCard/AreaCard';
import Property from '../../common/areaCard/property/Property';

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
    return 'page.berths.list.progress.message.other';
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
    const validSelection = berths
      .filter(selectedBerth =>
        selectedBerthsIds.find(selectedId => selectedId === selectedBerth.id)
      )
      .every(filter);

    const renderHarborCard: (
      excluded: boolean
    ) => (selected: BerthType) => React.ReactNode = excluded => selectedBerth => {
      const maximumWidth = convertCmToM(selectedBerth.maximumWidth);
      const address = `${selectedBerth.streetAddress}, ${selectedBerth.zipCode} ${
        selectedBerth.municipality
      }`;

      return (
        <AreaCard
          name={selectedBerth.name}
          excluded={excluded}
          key={selectedBerth.id}
          id={selectedBerth.id}
          address={address}
          imageFile={selectedBerth.imageFile}
          servicemapId={selectedBerth.servicemapId}
          availabilityLevel={selectedBerth.availabilityLevel}
          handleSelect={() => this.toggleBerthSelect(selectedBerth)}
          selected={isResourceSelected(selectedBerthsIds, selectedBerth.id)}
          disabled={selectedBerthsIds.size >= berthLimit}
          details={[
            <Property
              key="numberOfPlaces"
              available
              value={selectedBerth.numberOfPlaces}
              titleId="page.berths.number_of_places"
            />,
            <Property
              key="maximumWidth"
              available
              value={maximumWidth}
              unit="m"
              titleId="page.berths.maximum_width"
            />,
            <Property
              key="wasteCollection"
              available={selectedBerth.wasteCollection}
              iconName="trash"
              titleId="page.berths.waste_collection"
            />,
            <Property
              key="electricity"
              available={selectedBerth.electricity}
              iconName="plug"
              titleId="page.berths.electricity"
            />,
            <Property
              key="gate"
              available={selectedBerth.gate}
              iconName="fence"
              titleId="page.berths.fence"
            />,
            <Property
              key="water"
              available={selectedBerth.water}
              iconName="waterTap"
              titleId="page.berths.water_tap"
            />,
            <Property
              key="lighting"
              available={selectedBerth.lighting}
              iconName="streetLight"
              titleId="page.berths.lighting"
            />
          ]}
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
          validSelection={validSelection}
          tabMessage={
            <FormattedMessage
              id={getFormattedMessageId(selectedBerthsIds.size, berthLimit)}
              values={{
                total: berthLimit,
                count: berthLimit - selectedBerthsIds.size
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
