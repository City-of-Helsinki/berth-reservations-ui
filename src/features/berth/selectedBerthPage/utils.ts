import { BerthSwitchReasonsQuery } from '../../__generated__/BerthSwitchReasonsQuery';
import {
  HarborsQuery,
  HarborsQuery_harbors_edges_node_properties_piers,
  HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths,
} from '../../__generated__/HarborsQuery';
import { BerthFormValues } from '../types';
import { BerthOption, BoatInfo, HarborOption, PierOption, Reason, ReasonOption } from './types';

const sortByKey = <T>(property: keyof T) => (a: T, b: T) => ((a[property] || '') > (b[property] || '') ? 1 : -1);
const sortByKeyAsNumber = <T>(property: keyof T) => (a: T, b: T) =>
  (Number(a[property]) || 0) > (Number(b[property]) || 0) ? 1 : -1;

const getBerthOptions = (
  data: HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties_berths
): BerthOption[] => {
  return data.edges
    .reduce<BerthOption[]>((acc, edge) => {
      if (!edge?.node?.number) return acc;

      const berth: BerthOption = {
        value: edge.node.id,
        label: edge.node.number,
      };

      return [...acc, berth];
    }, [])
    .sort(sortByKeyAsNumber('label'));
};

const getPierOptions = (data: HarborsQuery_harbors_edges_node_properties_piers): PierOption[] => {
  return data.edges
    .reduce<PierOption[]>((acc, edge) => {
      if (!edge?.node?.properties) return acc;

      const pier: PierOption = {
        value: edge.node.id,
        label: edge.node.properties.identifier,
        berths: getBerthOptions(edge.node.properties.berths),
      };

      return [...acc, pier];
    }, [])
    .sort(sortByKey('label'));
};

export const getHarborOptions = (data: HarborsQuery | undefined): HarborOption[] => {
  if (!data?.harbors?.edges) return [];
  return data.harbors.edges
    .reduce<HarborOption[]>((acc, edge) => {
      if (!edge?.node?.properties?.name || !edge?.node?.properties?.piers) return acc;

      const harbor: HarborOption = {
        value: edge.node.id,
        label: edge.node.properties.name,
        piers: getPierOptions(edge.node.properties.piers),
      };

      return [...acc, harbor];
    }, [])
    .sort(sortByKey('label'));
};

export const getReasonOptions = (data: BerthSwitchReasonsQuery | undefined): ReasonOption[] => {
  const isReason = (reason: Reason | null): reason is Reason => reason !== null;
  if (!data?.berthSwitchReasons) return [];

  return data.berthSwitchReasons.filter(isReason).map((reason) => ({
    value: reason.id,
    label: reason.title ?? '',
  }));
};

export const getBoatInfo = (data: HarborsQuery | undefined, values: BerthFormValues): BoatInfo | undefined => {
  if (!data?.boatTypes) return undefined;
  const boatType = data.boatTypes.find((type) => !!type && type.id === values.boatType);
  return {
    boatType: boatType?.name ?? null,
    width: values.boatWidth,
    length: values.boatLength,
  };
};
