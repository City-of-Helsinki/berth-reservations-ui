import { gql } from 'apollo-boost';

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

export const WINTER_AREAS_QUERY = gql`
  query WinterAreasQuery {
    boatTypes {
      id
      name
    }
    winterStorageAreas {
      edges {
        node {
          id
          geometry {
            coordinates
          }
          properties {
            name
            streetAddress
            zipCode
            imageFile
            numberOfMarkedPlaces
            maximumWidth: maxWidth
            maximumLength: maxLength
            numberOfSectionSpaces
            servicemapId
            maxLengthOfSectionSpaces
            numberOfUnmarkedSpaces
            electricity
            water
            gate
            repairArea
            summerStorageForDockingEquipment
            summerStorageForTrailers
            summerStorageForBoats
            municipality
            wwwUrl
            availabilityLevel {
              id
              title
              description
            }
          }
        }
      }
    }
  }
`;

export const UNMARKED_WINTER_AREAS_QUERY = gql`
  query UnmarkedWinterAreasQuery {
    winterStorageAreas {
      edges {
        node {
          id
          properties {
            name
            numberOfUnmarkedSpaces
          }
        }
      }
    }
  }
`;

export const BERTH_SWITCH_REASONS_QUERY = gql`
  query BerthSwitchReasonsQuery {
    berthSwitchReasons {
      id
      title
    }
  }
`;

export const CREATE_APPLICATION = gql`
  mutation SubmitBerth($application: BerthApplicationInput!, $berthSwitch: BerthSwitchInput) {
    createBerthApplication(berthApplication: $application, berthSwitch: $berthSwitch) {
      ok
    }
  }
`;

export const CREATE_WINTER_STORAGE_APPLICATION = gql`
  mutation SubmitWinterStorage($application: WinterStorageApplicationInput!) {
    createWinterStorageApplication(winterStorageApplication: $application) {
      ok
    }
  }
`;

export const GET_HARBOR_NAME = (harborId: string) => gql`
  query HarborNameQuery{
    harbor(id: "${harborId}") {
      properties {
        name
      }
    }
  }
`;

export const GET_ORDER_DETAILS = gql`
  query OrderStatus($orderNumber: String!) {
    orderStatus(orderNumber: $orderNumber) {
      status
    }
  }
`;

export const CONFIRM_PAYMENT = gql`
  mutation ConfirmPayment($confirmPaymentMutationInput: ConfirmPaymentMutationInput!) {
    confirmPayment(input: $confirmPaymentMutationInput) {
      url
    }
  }
`;
