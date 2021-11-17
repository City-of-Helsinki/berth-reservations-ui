import { useTranslation } from 'react-i18next';

import Application from '../components/application/Application';
import ReservationHistory, { ReservationHistoryProps } from '../components/reservationHistory/ReservationHistory';
import Offer from '../components/offer/Offer';
import BerthInvoice from '../components/invoice/Invoice';
import NoPlaces from '../components/noPlaces/NoPlaces';
import Icon from '../../../common/icon/Icon';
import Divider from '../components/divider/Divider';
import { BerthSpecs, Properties } from './types';
import { formatDate, formatDimension } from '../../../common/utils/format';
import { ApplicationData, OfferData, InvoiceData } from '../types';
import { OrderStatus } from '../../../__generated__/globalTypes';

export interface BerthsProps {
  applications: ApplicationData<Properties>[];
  offer: OfferData<BerthSpecs> | null;
  invoice: InvoiceData<BerthSpecs> | null;
  reservations: ReservationHistoryProps['reservations'] | null;
  onDeleteApplication(berthApplicationId: string): void;
}

const Berths = ({ applications, offer, invoice, reservations, onDeleteApplication }: BerthsProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  if (applications.length === 0 && !invoice)
    return (
      <NoPlaces
        linkTo="berths"
        message={t('page.profile.berths.no_berths')}
        buttonLabel={t('page.profile.berths.apply_for_berth')}
      />
    );

  return (
    <>
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
                label: t('common.berth'),
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
              websiteLabel: t('page.profile.berths.berth_offer.harbor_website'),
              mapLabel: t('page.profile.berths.berth_offer.harbor_map'),
            }}
            heading={t('page.profile.berths.berth_offer.heading', { date: formatDate(offer.order.dueDate, language) })}
            infoMsg={t('page.profile.berths.berth_offer.info_text')}
          />
          <Divider />
        </>
      )}
      {invoice && (
        <>
          <BerthInvoice
            {...invoice}
            heading={
              invoice.order.orderStatus !== OrderStatus.OFFERED
                ? t('page.profile.berths.berth_invoice.heading')
                : t('page.profile.berths.berth_invoice.heading_secondary', {
                    date: formatDate(invoice.order.dueDate, language),
                  })
            }
            placeSpecs={[
              {
                label: t('common.pier'),
                value: invoice.placeSpecs.pier,
                bold: true,
              },
              {
                label: t('common.berth'),
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
      {applications &&
        applications.map((application) => (
          <>
            <Application
              {...application}
              subHeading={t('page.profile.berths.berth_offer.applied_berths')}
              heading={!offer && !invoice ? t('page.profile.berths.berth_offer.berth_application') : undefined}
              renderProperties={({ electricity, gate, lighting, wasteCollection, water }) => (
                <>
                  {electricity && <Icon name="plug" />}
                  {gate && <Icon name="fence" />}
                  {lighting && <Icon name="streetLight" />}
                  {wasteCollection && <Icon name="trash" />}
                  {water && <Icon name="waterTap" />}
                </>
              )}
              disableButtons={!!offer}
              onDelete={() => onDeleteApplication(application.id)}
            />
            <Divider />
          </>
        ))}
      {reservations && (
        <ReservationHistory label={t('page.profile.berths.history.label')} reservations={reservations} />
      )}
    </>
  );
};

export default Berths;
