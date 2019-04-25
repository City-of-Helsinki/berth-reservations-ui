import { List } from 'immutable';
import { get } from 'lodash';

import { Berth } from '../components/berths/Berth/types';
import { Berths } from '../components/berths/types';
import { SelectedServices } from '../types/services';

export const getBerthFilterByValues = (values: {}, selectedServices: SelectedServices) => {
  const width = Number(get(values, 'boatWidth', '').replace(',', '.')) * 100;
  const length = Number(get(values, 'boatLength', '').replace(',', '.')) * 100;
  const boatType = get(values, 'boatType', '').replace(',', '.');
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);
  return (b: any) => {
    const filterByService = services.reduce((acc, cur) => acc && b[cur], true);
    const filterByWidth = Number(b.maximumWidth) >= width;
    const filterByLength = Number(b.maximumLength) >= length;
    const filterByBoatTypeIds = boatType
      ? !!b.suitableBoatTypes.find((type: { id: string }) => type.id === boatType)
      : true;

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};

export const getBerths = (berthsData: any): List<Berth> => {
  const berths = List<Berth>(
    berthsData.map((harbor: { node: any }) => ({
      ...harbor.node.properties,
      id: harbor.node.id,
      geometry: {
        coordinates: [harbor.node.geometry.coordinates[1], harbor.node.geometry.coordinates[0]]
      }
    }))
  );

  return berths;
};

export const isBerthSelected = (selectedBerths: Berths, berth: Berth): boolean =>
  !!selectedBerths.find(selectedBerth => selectedBerth.id === berth.id);
