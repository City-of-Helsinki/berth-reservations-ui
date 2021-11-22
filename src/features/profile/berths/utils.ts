import { Choice } from '../types';
import { BerthApplicationNode, Properties, HarborChoice } from './types';

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
        name: harborChoice?.harbor?.properties?.name ?? '',
        availabilityLevel: {
          id: harborChoice?.harbor.properties?.availabilityLevel?.id ?? '',
          label: harborChoice?.harbor.properties?.availabilityLevel?.title ?? '',
        },
        properties: {
          electricity: harborChoice?.harbor.properties?.electricity ?? false,
          gate: harborChoice?.harbor.properties?.gate ?? false,
          lighting: harborChoice?.harbor.properties?.lighting ?? false,
          wasteCollection: harborChoice?.harbor.properties?.wasteCollection ?? false,
          water: harborChoice?.harbor.properties?.water ?? false,
        },
      })
    );

  return choices ?? [];
};
