import { useTranslation } from 'react-i18next';

import ReservationHistory, { ReservationHistoryProps } from '../components/reservationHistory/ReservationHistory';
import Offer from '../components/offer/Offer';
import Invoice from '../components/invoice/Invoice';
import { WinterStorageSpecs, Properties } from './types';
import Application from '../components/application/Application';
import NoPlaces from '../components/noPlaces/NoPlaces';
import Divider from '../components/divider/Divider';
import Icon from '../../../common/icon/Icon';
import { formatDate, formatDimension } from '../../../common/utils/format';
import { ApplicationData, OfferData, InvoiceData } from '../types';

export interface WinterStorageProps {
  application: ApplicationData<Properties> | null;
  offer: OfferData<WinterStorageSpecs> | null;
  invoice: InvoiceData<WinterStorageSpecs> | null;
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
                label: t('common.section'),
                value: offer.placeSpecs.section,
                bold: true,
              },
              {
                label: t('common.area'),
                value: offer.placeSpecs.placeNumber,
                bold: true,
              },
              {
                label: t('common.width'),
                value: formatDimension(offer.placeSpecs.width, language),
              },
              {
                label: t('common.length'),
                value: formatDimension(offer.placeSpecs.length, language),
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
                label: t('common.section'),
                value: invoice.placeSpecs.section,
                bold: true,
              },
              {
                label: t('common.area'),
                value: invoice.placeSpecs.placeNumber,
                bold: true,
              },
              {
                label: t('common.width'),
                value: formatDimension(invoice.placeSpecs.width, language),
              },
              {
                label: t('common.length'),
                value: formatDimension(invoice.placeSpecs.length, language),
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
