import { ProfilePageProps } from '../ProfilePage';

export const mockContactInfo: ProfilePageProps['contactInfo'] = {
  name: 'Kalle',
  address: 'Kallenkatu 6',
  postalCode: '00100',
  municipality: 'Helsinki',
  phoneNumber: '-',
  emailAddress: 'kalle@gmail.com',
  customerGroup: 'Yksityinen',
  language: 'Suomi',
};

// Simplified based on mockData for berths
export const mockHasBerthNotifications = (id: string): boolean => {
  switch (id) {
    case '1':
      return false;
    case '2':
      return true;
    case '3':
      return true;
    case '4':
      return false;
    default:
      return false;
  }
};
