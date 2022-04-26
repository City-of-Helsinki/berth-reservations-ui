import { OrderStatus, ApplicationStatus } from '../../../../__generated__/globalTypes';
import { Area } from '../../components/placeInfo/PlaceInfo';
import { BerthsProps } from '../Berths';
import { Properties } from '../types';
import { Choice, Order } from '../../types';

export const mockOrder: Order = {
  dueDate: '2021-03-25',
  fixedProducts: [
    {
      id: 'MOCK-PRODUCT-0',
      name: 'MOORING',
      orderId: 'MOCK-ORDER-0',
      price: 79.52,
    },
    {
      id: 'MOCK-PRODUCT-1',
      name: 'ELECTRICITY',
      orderId: 'MOCK-ORDER-0',
      price: 34.08,
    },
    {
      id: 'MOCK-PRODUCT-2',
      name: 'WATER',
      orderId: 'MOCK-ORDER-0',
      price: 5.68,
    },
    {
      id: 'MOCK-PRODUCT-3',
      name: 'WASTE_COLLECTION',
      orderId: 'MOCK-ORDER-0',
      price: 22.72,
    },
    {
      id: 'MOCK-PRODUCT-4',
      name: 'GATE',
      orderId: 'MOCK-ORDER-0',
      price: 4,
    },
    {
      id: 'MOCK-PRODUCT-5',
      name: 'LIGHTING',
      orderId: 'MOCK-ORDER-0',
      price: 10,
    },
  ],
  fixedProductsTotalPrice: 365.77,
  netPrice: 354.84,
  optionalProducts: [
    {
      id: 'MOCK-PRODUCT-6',
      name: 'PARKING_PERMIT',
      orderId: 'MOCK-ORDER-0',
      price: 75,
    },
  ],
  orderNumber: 'anw4sxjrmeqma',
  orderStatus: OrderStatus.OFFERED,
  price: 284,
  totalPrice: 440,
  vatAmount: 85.16,
  vatPercentage: 24,
};

export const mockPaidOrder: Order = {
  dueDate: '2021-03-25',
  fixedProducts: [
    {
      id: 'MOCK-PRODUCT-0',
      name: 'MOORING',
      orderId: 'MOCK-ORDER-0',
      price: 79.52,
    },
    {
      id: 'MOCK-PRODUCT-1',
      name: 'ELECTRICITY',
      orderId: 'MOCK-ORDER-0',
      price: 34.08,
    },
    {
      id: 'MOCK-PRODUCT-2',
      name: 'WATER',
      orderId: 'MOCK-ORDER-0',
      price: 5.68,
    },
    {
      id: 'MOCK-PRODUCT-3',
      name: 'WASTE_COLLECTION',
      orderId: 'MOCK-ORDER-0',
      price: 22.72,
    },
    {
      id: 'MOCK-PRODUCT-4',
      name: 'GATE',
      orderId: 'MOCK-ORDER-0',
      price: 4,
    },
    {
      id: 'MOCK-PRODUCT-5',
      name: 'LIGHTING',
      orderId: 'MOCK-ORDER-0',
      price: 10,
    },
  ],
  fixedProductsTotalPrice: 365.77,
  netPrice: 354.84,
  optionalProducts: [
    {
      id: 'MOCK-PRODUCT-6',
      name: 'PARKING_PERMIT',
      orderId: 'MOCK-ORDER-0',
      price: 75,
    },
  ],
  orderNumber: 'anw4sxjrmeqma',
  orderStatus: OrderStatus.PAID,
  price: 284,
  totalPrice: 440,
  vatAmount: 85.16,
  vatPercentage: 24,
};

export const mockChoices: Choice<Properties>[] = [
  {
    priority: 1,
    id: 'MOCK-CHOICE-0',
    name: 'Laivalahden venesatama (aallonmurtaja)',
    availabilityLevel: {
      id: '3',
      title: 'Paljon jonoa',
      description: null,
    },
    properties: {
      electricity: true,
      gate: false,
      lighting: true,
      wasteCollection: true,
      water: false,
    },
  },
  {
    priority: 2,
    id: 'MOCK-CHOICE-1',
    name: 'Laivalahden venesatama (Reginankuja)',
    availabilityLevel: {
      id: '3',
      title: 'Paljon jonoa',
      description: null,
    },
    properties: {
      electricity: false,
      gate: false,
      lighting: true,
      wasteCollection: false,
      water: true,
    },
  },
  {
    priority: 3,
    id: 'MOCK-CHOICE-2',
    name: 'Kipparlahden venesatama (rantamuuri)',
    availabilityLevel: {
      id: '2',
      title: 'Jonkin verran jonoa',
      description: null,
    },
    properties: {
      electricity: false,
      gate: false,
      lighting: false,
      wasteCollection: true,
      water: false,
    },
  },
];

const berthSpecs = {
  berthLength: 5,
  berthNumber: '15',
  berthWidth: 3.5,
  mooringType: 'Peräpoiju',
  pier: 'Rantamuuri',
};

const mockBerthProperties = {
  water: true,
  wasteCollection: true,
  lighting: true,
  electricity: true,
  gate: true,
};

const mockHarbor: Omit<Area, 'mapLabel' | 'websiteLabel'> = {
  address: 'Kipparlahdenkuja 3, 00810 Helsinki',
  image: '/img/helsinki_harbors/41189.jpg',
  map: '',
  name: 'Kipparlahden venesatama',
  website: '',
};

export const mockCustomerBerthsProps = {
  applicationDate: '2021-01-05',
  area: mockHarbor,
  choices: mockChoices,
  placeSpecs: berthSpecs,
  properties: mockBerthProperties,
  order: mockOrder,
  seasonEndDate: '2021-09-14',
  seasonStartDate: '2021-06-10',
};

const application = {
  id: 'MOCK_APPLICATION_0',
  applicationDate: 'Thu May 28 2020 23:21:00 GMT+0300 (Eastern European Summer Time)',
  choices: mockCustomerBerthsProps.choices,
  status: ApplicationStatus.PENDING,
  boat: {
    id: 'MOCK_BOAT_0',
    name: 'Test boat',
    registrationNumber: 'ABC123',
  },
};

const reservations = [
  {
    startDate: '2021-03-05',
    endDate: '2021-03-05',
    area: 'Test',
    place: '15',
  },
];

const offer = {
  area: mockHarbor,
  placeSpecs: mockCustomerBerthsProps.placeSpecs,
  properties: mockCustomerBerthsProps.properties,
  order: mockCustomerBerthsProps.order,
  seasonEndDate: mockCustomerBerthsProps.seasonEndDate,
  seasonStartDate: mockCustomerBerthsProps.seasonStartDate,
};

const harborsOptions = [{ value: 'MOCK_HARBOR_1', label: 'Kipparlahden venesatama' }];
const harborsLoading = false;
const ownBoatsOptions = [{ value: 'MOCK_BOAT_1', label: 'Test boat' }];
const ownBoatsLoading = false;

export const getCustomerBerthsProps = (id: string): BerthsProps => {
  switch (id) {
    case '1':
      return {
        // has an application
        applications: [application],
        offer: null,
        invoice: null,
        reservations: null,
        harborsOptions,
        harborsLoading,
        ownBoatsOptions,
        ownBoatsLoading,
        getHarborChoiceFromData: () => {
          return undefined;
        },
        onDeleteApplication: () => {
          // pass
        },
        onEditApplication: () => {
          // pass
        },
        onExtendApplication: () => {
          // pass
        },
      };

    case '2':
      // has an application and an offer
      return {
        applications: [application],
        offer,
        invoice: null,
        reservations,
        harborsOptions,
        harborsLoading,
        ownBoatsOptions,
        ownBoatsLoading,
        getHarborChoiceFromData: () => {
          return undefined;
        },
        onDeleteApplication: () => {
          // pass
        },
        onEditApplication: () => {
          // pass
        },
        onExtendApplication: () => {
          // pass
        },
      };

    case '3':
      // invoice unpaid
      return {
        applications: [],
        offer: null,
        invoice: { ...mockCustomerBerthsProps, contract: null },
        reservations,
        harborsOptions,
        harborsLoading,
        ownBoatsOptions,
        ownBoatsLoading,
        getHarborChoiceFromData: () => {
          return undefined;
        },
        onDeleteApplication: () => {
          // pass
        },
        onEditApplication: () => {
          // pass
        },
        onExtendApplication: () => {
          // pass
        },
      };

    case '4':
      // invoice paid
      return {
        applications: [],
        offer: null,
        invoice: {
          ...mockCustomerBerthsProps,
          order: mockPaidOrder,
          contract: {
            issuedAt: 'Thu Dec 10 2020 00:53:53 GMT+0200 (Eastern European Standard Time)',
            editedAt: 'Fri Mar 20 2020 01:53:14 GMT+0200 (Eastern European Standard Time)',
            signedAt: 'Fri Apr 17 2020 03:23:48 GMT+0300 (Eastern European Summer Time)',
          },
        },
        reservations,
        harborsOptions,
        harborsLoading,
        ownBoatsOptions,
        ownBoatsLoading,
        getHarborChoiceFromData: () => {
          return undefined;
        },
        onDeleteApplication: () => {
          // pass
        },
        onEditApplication: () => {
          // pass
        },
        onExtendApplication: () => {
          // pass
        },
      };

    default:
      // no berths
      return {
        applications: [],
        offer: null,
        invoice: null,
        reservations: null,
        harborsOptions,
        harborsLoading,
        ownBoatsOptions,
        ownBoatsLoading,
        getHarborChoiceFromData: () => {
          return undefined;
        },
        onDeleteApplication: () => {
          // pass
        },
        onEditApplication: () => {
          // pass
        },
        onExtendApplication: () => {
          // pass
        },
      };
  }
};
