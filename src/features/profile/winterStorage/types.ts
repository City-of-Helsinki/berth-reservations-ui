export interface WinterStorageProperties<T extends Record<string, boolean>> {
  berthLength: number;
  berthNumber: string;
  berthWidth: number;
  harborAddress: string;
  harborImage: string;
  harborMap: string;
  harborName: string;
  harborWebsite: string;
  mooringType: string; // FIXME
  pier: string;
  properties: T;
}

export type Properties = Record<
  'electricity' | 'gate' | 'water' | 'summerStorageForTrailers' | 'summerStorageForDockingEquipment',
  boolean
>;
