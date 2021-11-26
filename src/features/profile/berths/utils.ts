import { HarborsQuery_harbors_edges_node } from '../../__generated__/HarborsQuery';
import { Choice } from '../types';
import { BerthApplicationNode, Properties, HarborChoice } from './types';

export const getChoiceFromHarborNode = (
  harbor: HarborsQuery_harbors_edges_node,
  priority: number
): Choice<Properties> => {
  return {
    priority,
    id: harbor.id,
    name: harbor.properties?.name ?? '',
    availabilityLevel: {
      id: harbor.properties?.availabilityLevel?.id ?? '',
      title: harbor.properties?.availabilityLevel?.title ?? '',
      description: harbor.properties?.availabilityLevel?.description ?? '',
    },
    properties: {
      electricity: harbor.properties?.electricity ?? false,
      gate: harbor.properties?.gate ?? false,
      lighting: harbor.properties?.lighting ?? false,
      wasteCollection: harbor.properties?.wasteCollection ?? false,
      water: harbor.properties?.water ?? false,
    },
  };
};

export const getChoicesFromBerthApplication = (
  berthApplication?: BerthApplicationNode | null
): Choice<Properties>[] => {
  if (!berthApplication?.harborChoices) {
    return [];
  }

  const choices = berthApplication.harborChoices
    .filter((harborChoice): harborChoice is HarborChoice => Boolean(harborChoice))
    .map(
      (harborChoice): Choice<Properties> => ({
        priority: harborChoice.priority,
        id: harborChoice.harbor.id,
        name: harborChoice.harbor.properties?.name ?? '',
        availabilityLevel: {
          id: harborChoice.harbor.properties?.availabilityLevel?.id ?? '',
          title: harborChoice.harbor.properties?.availabilityLevel?.title ?? '',
          description: harborChoice.harbor.properties?.availabilityLevel?.description ?? '',
        },
        properties: {
          electricity: harborChoice.harbor.properties?.electricity ?? false,
          gate: harborChoice.harbor.properties?.gate ?? false,
          lighting: harborChoice.harbor.properties?.lighting ?? false,
          wasteCollection: harborChoice.harbor.properties?.wasteCollection ?? false,
          water: harborChoice.harbor.properties?.water ?? false,
        },
      })
    );

  return choices ?? [];
};
