import { SwitchOfferBerthDetails } from '../__generated__/SwitchOfferBerthDetails';

export const getOfferBerthDetails = (
  data?: SwitchOfferBerthDetails
): { harbor: string; pier: string; berth: string } => {
  return {
    harbor: data?.berthSwitchOffer?.berth.pier.properties?.harbor.properties?.name ?? '',
    pier: data?.berthSwitchOffer?.berth.pier.properties?.identifier ?? '',
    berth: data?.berthSwitchOffer?.berth.number ?? '',
  };
};
