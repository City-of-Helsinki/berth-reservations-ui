import React from 'react';

import BerthApplication, { BerthApplicationProps } from './berthApplication/BerthApplication';
import BerthHistory, { BerthHistoryProps } from './berthHistory/BerthHistory';
import BerthOffer, { OfferProps } from './berthOffer/BerthOffer';
import BerthInvoice, { BerthInvoiceProps } from './berthInvoice/BerthInvoice';
import NoBerths from './noBerths/NoBerths';

import './berths.scss';

export interface BerthsProps {
  application: BerthApplicationProps | null;
  offer: OfferProps | null;
  invoice: BerthInvoiceProps | null;
  reservations: BerthHistoryProps['reservations'] | null;
}

const Berths = ({ application, offer, invoice, reservations }: BerthsProps) => {
  if (!application && !invoice) return <NoBerths />;

  return (
    <div className="vene-customer-berths">
      {offer && (
        <>
          <BerthOffer {...offer} />
          <hr className="vene-berth-offer__divider" />
        </>
      )}
      {invoice && (
        <>
          <BerthInvoice {...invoice} />
          <hr className="vene-berth-offer__divider" />
        </>
      )}
      {application && (
        <>
          <BerthApplication {...application} showHeading={!offer && !invoice} disableButtons={!!offer} />
          <hr className="vene-berth-offer__divider" />
        </>
      )}
      {reservations && <BerthHistory reservations={reservations} />}
    </div>
  );
};

export default Berths;
