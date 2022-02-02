import { gql } from 'graphql-tag';

export const HARBORS_QUERY = gql`
  query HarborsQuery {
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
            availabilityLevel {
              id
              title
              description
            }
            electricity
            email
            gate
            imageFile
            lighting
            maxDepth
            maxLength
            maxWidth
            mooring
            municipality
            name
            numberOfPlaces
            phone
            servicemapId
            streetAddress
            suitableBoatTypes {
              id
            }
            wasteCollection
            water
            wwwUrl
            zipCode
          }
        }
      }
    }
  }
`;

export const HARBOR_PIERS_QUERY = gql`
  query HarborPiersQuery($id: ID!) {
    harbor(id: $id) {
      properties {
        piers {
          edges {
            node {
              id
              properties {
                identifier
                berths {
                  edges {
                    node {
                      id
                      number
                    }
                  }
                }
              }
            }
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
            availabilityLevel {
              id
              title
              description
            }
            estimatedNumberOfSectionSpaces
            estimatedNumberOfUnmarkedSpaces
            imageFile
            maxLength
            maxLengthOfSectionSpaces
            maxWidth
            municipality
            name
            servicemapId
            streetAddress
            wwwUrl
            zipCode
            electricity
            water
            gate
            summerStorageForDockingEquipment
            summerStorageForTrailers
            summerStorageForBoats
          }
        }
      }
    }
  }
`;

export const UNMARKED_WINTER_AREAS_QUERY = gql`
  query UnmarkedWinterAreasQuery {
    boatTypes {
      id
      name
    }
    winterStorageAreas {
      edges {
        node {
          id
          properties {
            name
            estimatedNumberOfUnmarkedSpaces
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
  mutation SubmitBerth($input: CreateBerthApplicationMutationInput!) {
    createBerthApplication(input: $input) {
      ok
    }
  }
`;

export const CREATE_WINTER_STORAGE_APPLICATION = gql`
  mutation SubmitWinterStorage($input: CreateWinterStorageApplicationMutationInput!) {
    createWinterStorageApplication(input: $input) {
      winterStorageApplication {
        id
      }
    }
  }
`;

export const GET_BERTH = (berthId: string) => gql`
  query BerthQuery{
    berth(id: "${berthId}") {
      id
      number
      pier {
          id
          properties {
              identifier
              harbor {
                  id
                  properties {
                      name
                  }
              }
          }
      }
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

export const FULFILL_CONTRACT = gql`
  mutation FulfillContract($fulfillContractMutationInput: FulfillContractMutationInput!) {
    fulfillContract(input: $fulfillContractMutationInput) {
      signingUrl
    }
  }
`;

export const GET_ORDER_DETAILS = gql`
  query OrderDetails($orderNumber: String!) {
    orderDetails(orderNumber: $orderNumber) {
      orderType
      status
      place
      section
      area
      isApplicationOrder
    }
    contractSigned(orderNumber: $orderNumber) {
      isSigned
    }
    contractAuthMethods {
      identifier
      name
      image
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation CancelOrder($cancelOrderMutationInput: CancelOrderMutationInput!) {
    cancelOrder(input: $cancelOrderMutationInput) {
      __typename
    }
  }
`;

export const ACCEPT_BERTH_SWITCH_OFFER = gql`
  mutation AcceptBerthSwitchOffer($input: AcceptBerthSwitchOfferMutationInput!) {
    acceptBerthSwitchOffer(input: $input) {
      clientMutationId
    }
  }
`;

export const PROFILE_PAGE_QUERY = gql`
  query ProfilePageQuery {
    myProfile {
      id
      language
      firstName
      lastName
      primaryAddress {
        id
        address
        postalCode
        city
      }
      primaryEmail {
        id
        email
      }
      primaryPhone {
        id
        phone
      }
    }
  }
`;

export const ADD_SERVICE_CONNECTION = gql`
  mutation AddServiceConnection($input: AddServiceConnectionMutationInput!) {
    addServiceConnection(input: $input) {
      clientMutationId
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: UpdateMyProfileMutationInput!) {
    updateMyProfile(input: $input) {
      clientMutationId
    }
  }
`;

export const CREATE_BERTH_PROFILE_MUTATION = gql`
  mutation CreateMyBerthProfile($input: CreateMyBerthProfileMutationInput!) {
    createMyBerthProfile(input: $input) {
      clientMutationId
    }
  }
`;

export const OFFER_DETAILS = gql`
  query OfferDetails($offerNumber: String!) {
    offerDetails(offerNumber: $offerNumber) {
      status
      harbor
      pier
      berth
    }
  }
`;
