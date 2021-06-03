import { useTranslation } from 'react-i18next';

import ReservationHistory, { ReservationHistoryProps } from '../components/reservationHistory/ReservationHistory';
import Offer from '../components/offer/Offer';
import Invoice from '../components/invoice/Invoice';
import { Properties } from './types';
import Application from '../components/application/Application';
import NoPlaces from '../components/noPlaces/NoPlaces';
import Divider from '../components/divider/Divider';
import Icon from '../../../common/icon/Icon';
import { formatDate, formatDimension } from '../../../common/utils/format';
import { BerthSpecs } from '../berths/types';
import { ApplicationData, OfferData, InvoiceData } from '../types';

export interface WinterStorageProps {
  application: ApplicationData<Properties> | null;
  offer: OfferData<BerthSpecs> | null;
  invoice: InvoiceData<BerthSpecs> | null;
  reservations: ReservationHistoryProps['reservations'] | null;
}

const WinterStorage = ({ application, offer, invoice, reservations }: WinterStorageProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  if (!application) {
    return (
      <NoPlaces
        linkTo="winter-storage"
        message={t('You have no places')}
        buttonLabel={t('Apply for a winter storage area')}
      />
    );
  }

  return (
    <div className="vene-customer-berths">
      {offer && (
        <>
          <Offer
            {...offer}
            placeSpecs={[
              {
                label: t('common.pier'),
                value: offer.placeSpecs.pier,
                bold: true,
              },
              {
                label: t('page.profile.berths.berth_offer.berth_number'),
                value: offer.placeSpecs.berthNumber,
                bold: true,
              },
              {
                label: t('common.width'),
                value: formatDimension(offer.placeSpecs.berthWidth, language),
              },
              {
                label: t('common.length'),
                value: formatDimension(offer.placeSpecs.berthLength, language),
              },
              {
                label: t('common.mooring_type'),
                value: offer.placeSpecs.mooringType,
              },
            ]}
            area={{
              ...offer.area,
              websiteLabel: t('Area website'),
              mapLabel: t('Area map'),
            }}
            heading={t('Offer for winter storage area', { date: formatDate(offer.order.dueDate, language) })}
            infoMsg={t('Winter storage info message')}
          />
          <Divider />
        </>
      )}
      {invoice && (
        <>
          <Invoice
            heading={t('Winter storage invoice')}
            {...invoice}
            placeSpecs={[
              {
                label: t('common.pier'),
                value: invoice.placeSpecs.pier,
                bold: true,
              },
              {
                label: t('page.profile.berths.berth_offer.berth_number'),
                value: invoice.placeSpecs.berthNumber,
                bold: true,
              },
              {
                label: t('common.width'),
                value: formatDimension(invoice.placeSpecs.berthWidth, language),
              },
              {
                label: t('common.length'),
                value: formatDimension(invoice.placeSpecs.berthLength, language),
              },
              {
                label: t('common.mooring_type'),
                value: invoice.placeSpecs.mooringType,
              },
            ]}
            area={{
              ...invoice.area,
              websiteLabel: t('page.profile.berths.berth_offer.harbor_website'),
              mapLabel: t('page.profile.berths.berth_offer.harbor_map'),
            }}
          />
          <Divider />
        </>
      )}
      {application && (
        <>
          <Application
            {...application}
            subHeading={t('Applied winter storage areas')}
            heading={!offer ? t('Winter storage application') : undefined}
            renderProperties={({
              electricity,
              gate,
              summerStorageForDockingEquipment,
              summerStorageForTrailers,
              water,
            }) => (
              <>
                {gate && <Icon name="fence" />}
                {electricity && <Icon name="plug" />}
                {summerStorageForDockingEquipment && <Icon name="trestle" />}
                {water && <Icon name="waterTap" />}
                {summerStorageForTrailers && <Icon name="dollyEmpty" />}
              </>
            )}
            disableButtons={false}
          />
          <Divider />
        </>
      )}
      {reservations && <ReservationHistory label={t('winter storage history')} reservations={reservations} />}
    </div>
  );
};

export default WinterStorage;
