export interface WinterStorageSpecs {
  section: string;
  length: number;
  placeNumber: string;
  width: number;
}

export type Properties = Record<
  'electricity' | 'gate' | 'water' | 'summerStorageForTrailers' | 'summerStorageForDockingEquipment',
  boolean
>;
