import { Query } from 'react-apollo';

interface Data {
  boatTypes: Array<{
    id: string;
    identifier: string;
    name: string;
  }>;
  harbors: {
    edges: Array<{
      node: {
        id: string;
        geometry: {
          coordinates: [number, number];
        };
        properties: {
          name: string;
          identifier: string;
          servicemapId: string;
          streetAddress: string;
          zipCode: string;
          municipality: string;
          phone: string;
          email: string;
          wwwUrl: string;
          imageFile: string;
          mooring: boolean;
          electricity: boolean;
          water: boolean;
          wasteCollection: boolean;
          gate: boolean;
          lighting: boolean;
          suitableBoatTypes: {
            identifier: string;
          };
          availabilityLevel: {
            identifier: string;
            title: string;
            description: string;
          };
          numberOfPlaces: number;
          maximumWidth: number;
          maximumLength: number;
          maximumDepth: number;
        };
      };
    }>;
  };
}

class BoatsBerthsQuery extends Query<Data> {}

export default BoatsBerthsQuery;
