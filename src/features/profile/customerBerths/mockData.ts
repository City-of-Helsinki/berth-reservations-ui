import { OrderStatus } from '../../../__generated__/globalTypes';
import { BerthChoice } from './berthApplication/BerthApplication';
import { BerthProperties, Order } from './types';

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
  orderStatus: OrderStatus.WAITING,
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

export const mockChoices: BerthChoice[] = [
  {
    name: 'Laivalahden venesatama (aallonmurtaja)',
    availabilityLevel: {
      id: '3',
      label: 'Paljon jonoa',
    },
    electricity: true,
    gate: false,
    lighting: true,
    wasteCollection: true,
    water: false,
  },
  {
    name: 'Laivalahden venesatama (Reginankuja)',
    availabilityLevel: {
      id: '3',
      label: 'Paljon jonoa',
    },
    electricity: false,
    gate: false,
    lighting: true,
    wasteCollection: false,
    water: true,
  },
  {
    name: 'Kipparlahden venesatama (rantamuuri)',
    availabilityLevel: {
      id: '2',
      label: 'Jonkin verran jonoa',
    },
    electricity: false,
    gate: false,
    lighting: false,
    wasteCollection: true,
    water: false,
  },
];

const mockBerthProperties: BerthProperties = {
  berthLength: 5,
  berthNumber: '15',
  berthWidth: 3.5,
  electricity: true,
  gate: true,
  harborAddress: 'Kipparlahdenkuja 3, 00810 Helsinki',
  harborImage: '/img/helsinki_harbors/41189.jpg',
  harborMap: '',
  harborName: 'Kipparlahden venesatama',
  harborWebsite: '',
  lighting: true,
  mooringType: 'Peräpoiju',
  pier: 'Rantamuuri',
  wasteCollection: true,
  water: true,
};

export const mockCustomerBerthsProps = {
  applicationDate: '2021-01-05',
  berthChoices: mockChoices,
  berthProperties: mockBerthProperties,
  order: mockOrder,
  seasonEndDate: '2021-09-14',
  seasonStartDate: '2021-06-10',
};
