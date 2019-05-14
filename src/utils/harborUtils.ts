import { List } from 'immutable';
import { HarborOption, HarborOptions } from '../types/harborOptionTypes';

type HarborProperties = object & { name: string };
interface HarborData {
  node: {
    id: string;
    properties: HarborProperties;
  };
}

export const getHarbors = (harborsData: HarborData[]): HarborOptions => {
  const harbors = List<HarborOption>(
    harborsData.map(harbor => ({
      id: harbor.node.id,
      ...harbor.node.properties
    }))
  );

  return harbors;
};
