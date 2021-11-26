import { OrderStatus, ApplicationStatus } from '../../../../__generated__/globalTypes';
import { WinterStorageProps } from '../WinterStorage';
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
  optionalProducts: [],
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
  optionalProducts: [],
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
      summerStorageForDockingEquipment: true,
      summerStorageForTrailers: false,
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
      electricity: true,
      gate: true,
      summerStorageForDockingEquipment: true,
      summerStorageForTrailers: true,
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
      summerStorageForDockingEquipment: true,
      summerStorageForTrailers: true,
      water: false,
    },
  },
];

const mockBerthProperties: Properties = {
  electricity: true,
  water: false,
  gate: true,
  summerStorageForTrailers: true,
  summerStorageForDockingEquipment: true,
};

const mockArea = {
  address: 'Kipparlahdenkuja 3, 00810 Helsinki',
  image: '/img/helsinki_harbors/41189.jpg',
  map: '',
  name: 'Kipparlahden venesatama',
  website: '',
};

const winterStorageSpecs = {
  length: 5,
  placeNumber: '15',
  width: 3.5,
  section: 'Rantamuuri',
};

export const mockCustomerBerthsProps = {
  applicationDate: '2021-01-05',
  choices: mockChoices,
  area: mockArea,
  placeSpecs: winterStorageSpecs,
  properties: mockBerthProperties,
  order: mockOrder,
  seasonEndDate: '2021-09-14',
  seasonStartDate: '2021-06-10',
};

const application = {
  id: 'abc-123',
  applicationDate: 'Thu May 28 2020 23:21:00 GMT+0300 (Eastern European Summer Time)',
  choices: mockCustomerBerthsProps.choices,
  status: ApplicationStatus.PENDING,
  boat: {
    id: 'MOCK_BOAT_0',
    name: 'Test Boat',
    registrationNumber: 'z1234567',
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
  area: mockArea,
  placeSpecs: winterStorageSpecs,
  properties: mockCustomerBerthsProps.properties,
  order: mockCustomerBerthsProps.order,
  seasonEndDate: mockCustomerBerthsProps.seasonEndDate,
  seasonStartDate: mockCustomerBerthsProps.seasonStartDate,
};

export const getCustomerWinterStorageProps = (id: string): WinterStorageProps => {
  switch (id) {
    case '1':
      return {
        // has an application
        application,
        offer: null,
        invoice: null,
        reservations: null,
        onEditApplication: () => {
          // pass
        },
      };

    case '2':
      // has an application and an offer
      return {
        application,
        offer,
        invoice: null,
        reservations,
        onEditApplication: () => {
          // pass
        },
      };

    case '3':
      // invoice unpaid
      return {
        application,
        offer: null,
        invoice: { ...mockCustomerBerthsProps, contract: null },
        reservations,
        onEditApplication: () => {
          // pass
        },
      };

    case '4':
      // invoice paid
      return {
        application: null,
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
        onEditApplication: () => {
          // pass
        },
      };

    default:
      // no berths
      return {
        application: null,
        offer: null,
        invoice: null,
        reservations: null,
        onEditApplication: () => {
          // pass
        },
      };
  }
};
