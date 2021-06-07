export interface BerthSpecs {
  pier: string;
  berthLength: number;
  berthNumber: string;
  berthWidth: number;
  mooringType: string; // FIXME
}

export type Properties = Record<'electricity' | 'gate' | 'lighting' | 'wasteCollection' | 'water', boolean>;
