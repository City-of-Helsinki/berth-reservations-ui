import gql from 'graphql-tag';

export const BOAT_TYPES_BERTHS_QUERY = gql`
  query BoatTypesBerthsQuery {
    boatTypes {
      id
      name
    }
    harbors {
      edges {
        node {
          id
          geometry {
            coordinates
          }
          properties {
            name
            servicemapId
            streetAddress
            zipCode
            municipality
            phone
            email
            wwwUrl
            imageFile
            mooring
            electricity
            water
            wasteCollection
            gate
            lighting
            suitableBoatTypes {
              id
            }
            availabilityLevel {
              id
              title
              description
            }
            numberOfPlaces
            maximumWidth
            maximumLength
            maximumDepth
          }
        }
      }
    }
  }
`;

export const CREATE_RESERVATION = gql`
  mutation Submit($reservation: ReservationInput!) {
    createReservation(reservation: $reservation) {
      ok
    }
  }
`;
