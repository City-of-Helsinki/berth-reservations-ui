import { HarborOption } from '../features/berth/selectedBerthPage/types';

export const mockHarbors: HarborOption[] = [
  {
    label: 'Harbor',
    piers: [
      {
        berths: [
          { label: '1', value: 'MOCK-BERTH-A1' },
          { label: '2', value: 'MOCK-BERTH-A2' },
          { label: '3', value: 'MOCK-BERTH-A3' },
        ],
        label: 'A',
        value: 'MOCK-PIER-A',
      },
      {
        berths: [
          { label: '1', value: 'MOCK-BERTH-B1' },
          { label: '2', value: 'MOCK-BERTH-B2' },
          { label: '3', value: 'MOCK-BERTH-B3' },
        ],
        label: 'B',
        value: 'MOCK-PIER-B',
      },
      {
        berths: [
          { label: '1', value: 'MOCK-BERTH-C1' },
          { label: '2', value: 'MOCK-BERTH-C2' },
          { label: '3', value: 'MOCK-BERTH-C3' },
        ],
        label: 'C',
        value: 'MOCK-PIER-C',
      },
    ],
    value: 'MOCK-HARBOR',
  },
];
