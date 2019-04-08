import { List } from 'immutable';
import { get } from 'lodash';

import { Berth } from '../components/berths/Berth/types';

export const getBerthFilterByValues = (values: {}, selectedServices: any) => {
  const width = Number(get(values, 'boat_width', '').replace(',', '.')) * 100;
  const length = Number(get(values, 'boat_length', '').replace(',', '.')) * 100;
  const boatType = get(values, 'boat_type', '').replace(',', '.');
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);
  return (b: any) => {
    const filterByService = services.reduce((acc, cur) => acc && b[cur], true);
    const filterByWidth = b.maximumWidth >= width;
    const filterByLenght = b.maximumLength >= length;
    const filterByBoatTypeIds = boatType ? b.suitableBoatTypes.includes(boatType) : true;

    return filterByService && filterByWidth && filterByLenght && filterByBoatTypeIds;
  };
};

export const getBerths = (edges: any): List<Berth> => {
  const berths = List<Berth>(
    edges.map((harbor: { node: any }) => ({
      ...harbor.node.properties,
      location: {
        coordinates: [harbor.node.location.coordinates[1], harbor.node.location.coordinates[0]]
      }
    }))
  );

  return berths;
};
