import { WinterAreasQuery_winterStorageAreas_edges_node as WinterAreaNode } from '../../__generated__/WinterAreasQuery';
import { Choice } from '../types';
import { Properties } from './types';

export const getChoiceFromWinterAreaNode = (winterArea: WinterAreaNode, priority: number): Choice<Properties> => {
  return {
    priority,
    id: winterArea.id,
    name: winterArea.properties?.name ?? '',
    availabilityLevel: {
      id: winterArea.properties?.availabilityLevel?.id ?? '',
      title: winterArea.properties?.availabilityLevel?.title ?? '',
      description: winterArea.properties?.availabilityLevel?.description ?? '',
    },
    properties: {
      water: winterArea.properties?.water ?? false,
      gate: winterArea.properties?.gate ?? false,
      electricity: winterArea.properties?.electricity ?? false,
      summerStorageForTrailers: winterArea.properties?.summerStorageForTrailers ?? false,
      summerStorageForDockingEquipment: winterArea.properties?.summerStorageForDockingEquipment ?? false,
    },
  };
};
