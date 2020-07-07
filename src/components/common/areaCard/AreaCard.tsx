import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert, Button, Col, Row } from 'reactstrap';
import classNames from 'classnames';

import { genValidSelector } from '../../../utils/berths';
import Icon from '../Icon';
import Image from '../Image';
import IntlComponent from '../IntlComponent';
import Popover from '../popover/Popover';
import AvailabilityLevel from '../../berths/availabilityLevel/AvailabilityLevel';

import './areaCard.scss';

interface AvailabilityLevel {
  id: string;
  title: string | null;
  description: string | null;
}

type Props = {
  name: string | null;
  imageFile: string | null;
  address: string;
  id: string;
  availabilityLevel: AvailabilityLevel | null;
  servicemapId: string | null;
  className?: string;
  selected: boolean;
  disabled?: boolean;
  excluded?: boolean;
  details: React.ReactNodeArray;
  handleSelect: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
} & InjectedIntlProps;

const AreaCard = ({
  name,
  imageFile,
  address,
  id,
  availabilityLevel,
  servicemapId,
  excluded = false,
  handleSelect,
  selected,
  disabled,
  className,
  intl,
  details
}: Props) => {
  const tooltipId = genValidSelector(`availability_${id}`);

  return (
    <div className={classNames('vene-area-card', className)}>
      <Row>
        <Col md={3}>
          <div className="vene-area-card__image">
            <IntlComponent
              Component={Alert}
              color="danger"
              id="error.message.invalid_berth"
              isOpen={selected && excluded}
            />
            {/* TODO: add placeholder image */}
            {<Image src={imageFile || ''} alt={name || `berth's name`} />}
          </div>
        </Col>

        <Col md={4}>
          <div className="vene-area-card__summary-wrapper">
            <h5>{name}</h5>
            <div className="vene-area-card__address">{address}</div>

            {selected ? (
              <Button color={excluded ? 'danger' : 'secondary'} onClick={handleSelect}>
                <Icon name="check" />
                <FormattedMessage tagName="span" id="site.buttons.selected" />
              </Button>
            ) : (
              <Button outline primary="true" onClick={handleSelect} disabled={disabled}>
                + <FormattedMessage tagName="span" id="site.buttons.add_to_selected" />
              </Button>
            )}

            {availabilityLevel && (
              <div className="vene-area-card__availability-level">
                <Popover
                  id={tooltipId}
                  body={availabilityLevel.description || availabilityLevel.title}
                >
                  <AvailabilityLevel label={availabilityLevel.title} level={availabilityLevel.id} />
                </Popover>
              </div>
            )}

            {servicemapId && (
              <div>
                <a
                  className="vene-area-card__website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={intl.formatMessage({ id: 'site.common.servicemapURL' }, { servicemapId })}
                >
                  <FormattedMessage tagName="span" id="page.berths.website" />
                  <Icon name="arrowRight" />
                </a>
              </div>
            )}
          </div>
        </Col>

        <Col md={5}>
          <div className="vene-area-card__details-wrapper">{details}</div>
        </Col>
      </Row>
    </div>
  );
};

export default injectIntl(AreaCard);
