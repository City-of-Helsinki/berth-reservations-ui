export interface BoatType {
  identifier: string;
  name: {
    [locale: string]: string;
  };
}

export type BoatTypes = BoatType[];
