export interface Berth {
  id: string;
  name: string;
  streetAddress: string;
  municipality: string;
  zipCode: string;
  phone: string;
  email: string;
  wwwUrl: string;
  geometry: {
    type?: string;
    coordinates: number[];
  };
  imageFile: string;
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
    id: string;
    title: string;
    description: string;
  };
}