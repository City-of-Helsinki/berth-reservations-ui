import { List } from 'immutable';
import { HarborOption, HarborOptions } from '../types/HarborOptionTypes';

export const getHarbors = (harborsData: any): HarborOptions => {
  const harbors = List<HarborOption>(
    harborsData.map((harbor: { node: any }) => ({
      id: harbor.node.id,
      ...harbor.node.properties
    }))
  );

  return harbors;
};
