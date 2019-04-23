import gql from 'graphql-tag';

export const BOAT_TYPES_BERTHS_QUERY = gql`
  query BoatTypesBerthsQuery {
    boatTypes {
      id
      identifier
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
            identifier
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
              identifier
            }
            availabilityLevel {
              identifier
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

export const HARBOUR_QUERY = gql`
  query HarbourQuery {
    harbors {
      edges {
        node {
          id
          properties {
            name
            identifier
          }
        }
      }
    }
  }
`;
