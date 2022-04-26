import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Application, { ApplicationProps } from '../components/application/Application';
import ReservationHistory, { ReservationHistoryProps } from '../components/reservationHistory/ReservationHistory';
import Offer from '../components/offer/Offer';
import BerthInvoice from '../components/invoice/Invoice';
import NoPlaces from '../components/noPlaces/NoPlaces';
import Icon, { IconNames } from '../../../common/icon/Icon';
import Divider from '../components/divider/Divider';
import { BerthSpecs, Properties } from './types';
import { formatDate, formatDimension } from '../../../common/utils/format';
import { ApplicationData, OfferData, InvoiceData, Choice } from '../types';
import { OrderStatus, UpdateBerthApplicationInput } from '../../../__generated__/globalTypes';
import SelectedResourceContainer from '../../../common/areaCard/selectedResource/SelectedResourceContainer';

export interface BerthsProps {
  applications: ApplicationData<Properties>[];
  offer: OfferData<BerthSpecs> | null;
  invoice: InvoiceData<BerthSpecs> | null;
  reservations: ReservationHistoryProps['reservations'] | null;
  harborsOptions: ApplicationProps<Properties>['placesOptions'];
  harborsLoading: ApplicationProps<Properties>['placesLoading'];
  ownBoatsOptions: ApplicationProps<Properties>['ownBoatsOptions'];
  ownBoatsLoading: ApplicationProps<Properties>['ownBoatsLoading'];
  getHarborChoiceFromData: (choiceId: string, priority: number) => Choice<Properties> | undefined;
  onDeleteApplication(berthApplicationId: string): void;
  onEditApplication(
    applicationId: string,
    addChoices: UpdateBerthApplicationInput['addChoices'],
    removeChoices: UpdateBerthApplicationInput['removeChoices'],
    boatId: UpdateBerthApplicationInput['boatId']
  ): void;
  onExtendApplication(berthApplicationId: string): void;
}

const Berths = ({
  applications,
  offer,
  invoice,
  reservations,
  harborsOptions,
  harborsLoading,
  ownBoatsOptions,
  ownBoatsLoading,
  getHarborChoiceFromData,
  onDeleteApplication,
  onEditApplication,
  onExtendApplication,
}: BerthsProps) => {
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
      {applications.map((application) => (
        <Fragment key={application.id}>
          <Application
            translationContext="berth"
            applicationDate={application.applicationDate}
            choices={application.choices}
            status={application.status}
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
            placesOptions={harborsOptions}
            placesLoading={harborsLoading}
            ownBoatsOptions={ownBoatsOptions}
            ownBoatsLoading={ownBoatsLoading}
            boat={application.boat}
            renderChoices={(selectedResources, onRemove, onMoveUp, onMoveDown) => {
              return selectedResources.map((choice, index) => {
                const services: [IconNames, boolean][] = [
                  ['plug', choice.properties.electricity],
                  ['waterTap', choice.properties.water],
                  ['trash', choice.properties.wasteCollection],
                  ['fence', choice.properties.gate],
                  ['streetLight', choice.properties.lighting],
                ];

                return (
                  <SelectedResourceContainer
                    tContext="berth"
                    title={`${index + 1}. ${choice.name}`}
                    id={choice.id}
                    key={choice.id}
                    services={services}
                    moveUp={index !== 0 ? onMoveUp : undefined}
                    moveDown={index !== selectedResources.length - 1 ? onMoveDown : undefined}
                    handleRemove={onRemove}
                    availabilityLevel={choice.availabilityLevel}
                  />
                );
              });
            }}
            getChoiceFromData={(choiceId: string) => getHarborChoiceFromData(choiceId, application.choices.length)}
            onEditApplication={(newChoicesIds, boatId) => {
              const removeChoices = application.choices.map((choice) => choice.priority);
              const addChoices = newChoicesIds.map((id, index) => ({ harborId: id, priority: index + 1 }));

              return onEditApplication(application.id, addChoices, removeChoices, boatId);
            }}
            disableButtons={!!offer}
            onDelete={() => onDeleteApplication(application.id)}
            onExtendApplication={() => onExtendApplication(application.id)}
          />
          <Divider />
        </Fragment>
      ))}
      {reservations && (
        <ReservationHistory label={t('page.profile.berths.history.label')} reservations={reservations} />
      )}
    </>
  );
};

export default Berths;
