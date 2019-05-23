import { Steps } from '../components/steps/StepTypes';

export const berthSteps: Steps = [
  {
    key: 'berth',
    completed: true,
    current: true,
    linkTo: 'berth'
  },
  {
    key: 'selected_berths',
    completed: false,
    current: false,
    linkTo: 'berth/selected_berths'
  },
  {
    key: 'boat_information',
    completed: false,
    current: false,
    linkTo: 'berth/boat_infomation'
  },
  {
    key: 'applicant',
    completed: false,
    current: false,
    linkTo: 'berth/applicant'
  },
  {
    key: 'send_application',
    completed: false,
    current: false,
    linkTo: 'berth/overview'
  }
];

export const winterSteps: Steps = [
  {
    key: 'winter_areas',
    completed: true,
    current: true,
    linkTo: `winter`
  },
  {
    key: 'review_areas',
    completed: false,
    current: false,
    linkTo: 'winter/review_areas'
  },
  {
    key: 'boat_information',
    completed: false,
    current: false,
    linkTo: 'winter/boat_information'
  },
  {
    key: 'applicant',
    completed: false,
    current: false,
    linkTo: 'winter/applicant'
  },
  {
    key: 'send_application',
    completed: false,
    current: false,
    linkTo: 'winter/send_application'
  }
];
