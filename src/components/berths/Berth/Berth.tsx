import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert, Button, Col, Row } from 'reactstrap';

import { convertCmToM, genValidSelector } from '../../../utils/berths';
import Icon from '../../common/Icon';
import Image from '../../common/Image';
import IntlComponent from '../../common/IntlComponent';
import Popover from '../../common/popover/Popover';
import AvailabilityLevel from '../availabilityLevel/AvailabilityLevel';
import BerthDetails from './BerthDetails';

import './Berth.scss';

import { BerthType } from '../../../types/berth';
import { WinterStorageType } from '../../../types/winterStorage';

type Props = {
  berth: BerthType | WinterStorageType;
  className?: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  selected: boolean;
  disabled?: boolean;
  excluded?: boolean;
} & InjectedIntlProps;

const getBerthDetails = (berth: BerthType | WinterStorageType) => {
  const maximumWidth = convertCmToM(berth.maximumWidth);
  const maximumLength = convertCmToM(berth.maximumLength);

  switch (berth.__typename) {
    case 'HarborType':
      return [
        <BerthDetails
          key="numberOfPlaces"
          available
          value={berth.numberOfPlaces}
          titleId="page.berths.number_of_places"
        />,
        <BerthDetails
          key="maximumWidth"
          available
          value={maximumWidth}
          unit="m"
          titleId="page.berths.maximum_width"
        />,
        <BerthDetails
          key="wasteCollection"
          available={berth.wasteCollection}
          iconName="trash"
          titleId="page.berths.waste_collection"
        />,
        <BerthDetails
          key="electricity"
          available={berth.electricity}
          iconName="plug"
          titleId="page.berths.electricity"
        />,

        <BerthDetails
          key="gate"
          available={berth.gate}
          iconName="fence"
          titleId="page.berths.fence"
        />,
        <BerthDetails
          key="water"
          available={berth.water}
          iconName="waterTap"
          titleId="page.berths.water_tap"
        />,
        <BerthDetails
          key="lighting"
          available={berth.lighting}
          iconName="streetLight"
          titleId="page.berths.lighting"
        />
      ];
    default:
      return [
        <BerthDetails
          key="maximumWidth"
          available
          value={maximumWidth}
          unit="m"
          titleId="page.berths.maximum_width"
        />,
        <BerthDetails
          key="maximumLength"
          available
          value={maximumLength}
          unit="m"
          titleId="page.berths.maximum_length"
        />,
        <BerthDetails
          key="appointed"
          available={!!berth.numberOfMarkedPlaces}
          iconName="divided"
          titleId="page.berths.appointed"
        />,
        <BerthDetails
          key="gate"
          available={berth.gate}
          iconName="fence"
          titleId="page.berths.fence"
        />,
        <BerthDetails
          key="electricity"
          available={berth.electricity}
          iconName="plug"
          titleId="page.berths.electricity"
        />,
        <BerthDetails
          key="summerStorageForDockingEquipment"
          available={berth.summerStorageForDockingEquipment}
          iconName="trestle"
          titleId="page.berths.storage_for_docking_equip"
        />,
        <BerthDetails
          key="water"
          available={berth.water}
          iconName="waterTap"
          titleId="page.berths.water_tap"
        />,
        <BerthDetails
          key="summerStorageForTrailers"
          available={berth.summerStorageForTrailers}
          iconName="dollyEmpty"
          titleId="page.berths.storage_for_trailers"
        />
      ];
  }
};

const Berth = ({
  berth,
  excluded = false,
  onClick,
  selected,
  disabled,
  className,
  intl
}: Props) => {
  const tooltipId = genValidSelector(`availability_${berth.id}`);

  return (
    <div className={classNames('vene-berth', className)}>
      <Row>
        <Col md={3}>
          <div className="vene-berth__image">
            <IntlComponent
              Component={Alert}
              color="danger"
              id="error.message.invalid_berth"
              isOpen={selected && excluded}
            />
            {/* TODO: add placeholder image */}
            {<Image src={berth.imageFile || ''} alt={berth.name || `berth's name`} />}
          </div>
        </Col>

        <Col md={4}>
          <div className="vene-berth__summary-wrapper">
            <h5>{berth.name}</h5>

            <div className="vene-berth__address">
              {berth.streetAddress}, {berth.zipCode} {berth.municipality}
            </div>

            {selected ? (
              <Button color={excluded ? 'danger' : 'secondary'} onClick={onClick}>
                <Icon name="check" />
                <FormattedMessage tagName="span" id="page.berths.selected" />
              </Button>
            ) : (
              <Button outline primary="true" onClick={onClick} disabled={disabled}>
                + <FormattedMessage tagName="span" id="page.berths.select" />
              </Button>
            )}

            {berth.availabilityLevel && (
              <div className="vene-berth__availability-level">
                <Popover
                  id={tooltipId}
                  body={berth.availabilityLevel.description || berth.availabilityLevel.title}
                >
                  <AvailabilityLevel
                    label={berth.availabilityLevel.title}
                    level={berth.availabilityLevel.id}
                  />
                </Popover>
              </div>
            )}
            {berth.servicemapId && (
              <div>
                <a
                  className="vene-berth__website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={intl.formatMessage(
                    { id: 'page.berths.servicemapURL' },
                    { servicemapId: berth.servicemapId }
                  )}
                >
                  <FormattedMessage tagName="span" id="page.berths.website" />
                  <Icon name="arrowRight" />
                </a>
              </div>
            )}
          </div>
        </Col>

        <Col md={5}>
          <div className="vene-berth__details-wrapper">{getBerthDetails(berth)}</div>
        </Col>
      </Row>
    </div>
  );
};

export default injectIntl(Berth);
