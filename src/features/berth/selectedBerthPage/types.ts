import { BerthSwitchReasonsQuery_berthSwitchReasons } from '../../__generated__/BerthSwitchReasonsQuery';

type Option = {
  label: string;
  value: string;
};

export type BerthOption = Option;

export type PierOption = Option & {
  berths: BerthOption[];
};

export type HarborOption = Option & {
  piers: PierOption[];
};

export type ReasonOption = Option;

export type BoatInfo = {
  boatType: string | null;
  length: string;
  width: string;
};

export type Reason = BerthSwitchReasonsQuery_berthSwitchReasons;
