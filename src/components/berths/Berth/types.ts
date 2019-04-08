interface Multilingual {
  fi: string;
  sv: string;
}

export interface Berth {
  identifier: string;
  name: string;
  streetAddress: string;
  municipality: string;
  zipCode: string;
  phone: string;
  email: string;
  wwwUrl: string;
  location: {
    type: string;
    coordinates: number[];
  };
  imageFile: string;
  imageLink: string;
  electricity: boolean;
  water: boolean;
  wasteCollection: boolean;
  gate: boolean;
  lighting: boolean;
  numberOfPlaces: number;
  maximumDepth: number;
  maximumWidth: number;
  maximumLength: number;
  availabilityLevel: {
    identifier: string;
    title: string;
    description: string;
  };
  excluded: boolean;
}
