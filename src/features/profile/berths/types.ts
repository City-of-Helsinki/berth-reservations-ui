import { berthApplicationNodeFragment as BerthApplicationNode } from './__generated__/berthApplicationNodeFragment';

export interface BerthSpecs {
  pier: string;
  berthLength: number;
  berthNumber: string;
  berthWidth: number;
  mooringType: string; // FIXME
}

export type Properties = Record<'electricity' | 'gate' | 'lighting' | 'wasteCollection' | 'water', boolean>;
export type BerthApplicationNodeCertainly = Exclude<BerthApplicationNode, null | undefined>;

export type { BerthApplicationNode };
export type { berthApplicationNodeFragment_harborChoices as HarborChoice } from './__generated__/berthApplicationNodeFragment';
