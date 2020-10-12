import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Col, Row } from 'reactstrap';

import { genValidSelector } from '../../utils/common';
import AvailabilityLevel from '../../components/berths/availabilityLevel/AvailabilityLevel';
import Icon from '../Icon';
import Image from '../Image';
import Popover from '../popover/Popover';

import './areaCard.scss';

interface IAvailabilityLevel {
  id: string;
  title: string | null;
  description: string | null;
}

export type AreaCardProps = {
  name: string | null;
  imageFile: string | null;
  address: string;
  id: string;
  availabilityLevel: IAvailabilityLevel | null;
  servicemapId: string | null;
  className?: string;
  selected: boolean;
  disabled?: boolean;
  excluded?: string;
  details: React.ReactNodeArray;
  handleSelect: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const AreaCard = ({
  name,
  imageFile,
  address,
  id,
  availabilityLevel,
  servicemapId,
  excluded,
  handleSelect,
  selected,
  disabled,
  className,
  details,
}: AreaCardProps) => {
  const { t } = useTranslation();
  const tooltipId = genValidSelector(`availability_${id}`);

  return (
    <div className={classNames('vene-area-card', className)}>
      <Row>
        <Col md={3}>
          <div className="vene-area-card__image">
            {excluded && (
              <Alert color="danger" isOpen={selected}>
                {t(excluded)}
              </Alert>
            )}
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
                <span>{t('site.buttons.selected')}</span>
              </Button>
            ) : (
              <Button outline primary="true" onClick={handleSelect} disabled={disabled}>
                + <span>{t('site.buttons.add_to_selected')}</span>
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
                  href={t('site.common.servicemapURL', { servicemapId })}
                >
                  <span>{t('page.common.website')}</span>
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

export default AreaCard;
