import { BerthSwitchReasonsQuery } from '../../../__generated__/BerthSwitchReasonsQuery';
import { ProfilePageQuery } from '../../../__generated__/ProfilePageQuery';
import { Option, Reason } from './types';

export const getReasonOptions = (data: BerthSwitchReasonsQuery | undefined): Option[] => {
  const isReason = (reason: Reason | null): reason is Reason => reason !== null;
  if (!data?.berthSwitchReasons) return [];

  return data.berthSwitchReasons.filter(isReason).map((reason) => ({
    value: reason.id,
    label: reason.title ?? '',
  }));
};

export const getCurrentBerths = (data: ProfilePageQuery | undefined): Option[] => {
  if (!data?.myProfile?.berthLeases?.edges) return [];

  return data.myProfile.berthLeases.edges.map((edge) => {
    const currentBerth = edge?.node?.berth;

    const berthId = currentBerth?.id ?? '';

    const berthNumber = currentBerth?.number;
    const pierIdentifier = currentBerth?.pier?.properties?.identifier;
    const harborName = currentBerth?.pier?.properties?.harbor?.properties?.name;

    const label = [harborName, pierIdentifier, berthNumber].join(' ');

    return {
      value: berthId,
      label,
    };
  });
};
