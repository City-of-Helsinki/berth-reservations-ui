import { List } from 'immutable';
import { get } from 'lodash';

import { Berth } from '../components/berths/Berth/types';
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
    const filterByLenght = Number(b.maximumLength) >= length;
    const filterByBoatTypeIds = boatType
      ? !!b.suitableBoatTypes.find((type: { identifier: string }) => type.identifier === boatType)
      : true;

    return filterByService && filterByWidth && filterByLenght && filterByBoatTypeIds;
  };
};

export const getBerths = (berthsData: any): List<Berth> => {
  const berths = List<Berth>(
    berthsData.map((harbor: { node: any }) => ({
      ...harbor.node.properties,
      geometry: {
        coordinates: [harbor.node.geometry.coordinates[1], harbor.node.geometry.coordinates[0]]
      }
    }))
  );

  return berths;
};
