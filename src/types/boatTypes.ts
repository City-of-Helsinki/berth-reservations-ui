export type BoatType = {
  identifier: string;
  name: {
    [locale: string]: string;
  };
};

export type BoatTypes = Array<BoatType>;
