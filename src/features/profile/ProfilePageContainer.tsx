import React from 'react';
import { RouteComponentProps } from 'react-router';

import { mockCustomerBerthsProps, mockPaidOrder } from './customerBerths/mockData';
import ProfilePage, { ProfilePageProps } from './ProfilePage';
import { OrderStatus } from '../../__generated__/globalTypes';

export type ProfilePageContainerProps = RouteComponentProps<{ id: string }>;

const ProfilePageContainer = ({ match }: ProfilePageContainerProps) => {
  const { id } = match.params;

  const customerContactInfo = {
    name: 'Kalle',
    address: 'Kallenkatu 6',
    postalCode: '00100',
    municipality: 'Helsinki',
    phoneNumber: '-',
    emailAddress: 'kalle@gmail.com',
    customerGroup: 'Yksityinen',
    language: 'Suomi',
  };

  const application = {
    applicationDate: 'Thu May 28 2020 23:21:00 GMT+0300 (Eastern European Summer Time)',
    berthChoices: mockCustomerBerthsProps.berthChoices,
  };

  const reservations = [
    {
      startDate: '2021-03-05',
      endDate: '2021-03-05',
      harbor: 'Test',
      berth: '15',
    },
  ];

  const offer = {
    berthProperties: mockCustomerBerthsProps.berthProperties,
    order: mockCustomerBerthsProps.order,
    seasonEndDate: mockCustomerBerthsProps.seasonEndDate,
    seasonStartDate: mockCustomerBerthsProps.seasonStartDate,
  };

  let customerBerths: ProfilePageProps['customerBerths'];

  switch (id) {
    case '1':
      customerBerths = {
        // has an application
        application,
        offer: null,
        invoice: null,
        reservations: null,
      };
      break;

    case '2':
      // has an application
      customerBerths = {
        application,
        offer,
        invoice: null,
        reservations,
      };
      break;

    case '3':
      // invoice unpaid
      customerBerths = {
        application: null,
        offer: null,
        invoice: { ...mockCustomerBerthsProps, contract: null },
        reservations,
      };
      break;

    case '4':
      // invoice paid
      customerBerths = {
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
      };
      break;

    default:
      // no berths
      customerBerths = {
        application: null,
        offer: null,
        invoice: null,
        reservations: null,
      };
      break;
  }

  const hasBerthNotifications =
    customerBerths.invoice?.order.orderStatus === OrderStatus.OFFERED || !!customerBerths.offer;

  return (
    <ProfilePage
      customerContactInfo={customerContactInfo}
      customerBerths={customerBerths}
      hasBerthNotifications={hasBerthNotifications}
      hasWSNotifications={false}
    />
  );
};

export default ProfilePageContainer;
