import classNames from 'classnames';
import React from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';
import { Button, Col, Container, Row } from 'reactstrap';

import AvailabilityLevel from '../../availabilityLevel/AvailabilityLevel';
import InvalidSelection from '../../invalidSelection/InvalidSelection';
import ScreenReaderLabel from '../../fields/ScreenReaderLabel';
import Icon, { IconNames } from '../../icon/Icon';
import Popover from '../../popover/Popover';

export type SelectedResourceProps = {
  availabilityLevel?: { id: string; title: string | null; description: string | null } | null;
  className?: string;
  services: [IconNames, boolean][];
  title: React.ReactNode;
  validationErrMsg?: string;
  validDomId: string;
  state: TransitionStatus;
  doMoveDown?(): void;
  doMoveUp?(): void;
  toggleModal(): void;
};

const SelectedResource = ({
  availabilityLevel,
  className,
  services,
  state,
  title,
  validDomId,
  validationErrMsg,
  doMoveUp,
  doMoveDown,
  toggleModal,
}: SelectedResourceProps) => {
  return (
    <Container className={classNames('vene-selected-berth', className)}>
      <Row>
        <Col xs="10" className={classNames('vene-selected-berth__info', `vene-selected-berth__info--moving-${state}`)}>
          <Row
            className={classNames('vene-selected-berth__title-bar', {
              'vene-selected-berth__title-bar--has-error': !!validationErrMsg,
            })}
          >
            <Col xs="10" className="vene-selected-berth__title">
              {title}
              {validationErrMsg && <InvalidSelection id={validDomId} msg={validationErrMsg} />}
            </Col>
            <Col xs="2" className="vene-selected-berth__close">
              <Button
                close
                onClick={toggleModal}
                className="vene-selected-berth__close-btn"
                aria-labelledby="vene-selected-berth__remove"
              >
                <Icon name="times" />
              </Button>
              <ScreenReaderLabel id="vene-selected-berth__remove" textKey="page.berth.selected.button.remove" />
            </Col>
          </Row>
          <Row className="vene-selected-berth__services-bar">
            <Col xs="12" md="6" className="vene-selected-berth__availability-level">
              {availabilityLevel && (
                <Popover
                  id={`availability-level-${validDomId}`}
                  body={availabilityLevel.description || availabilityLevel.title}
                >
                  <AvailabilityLevel label={availabilityLevel.title} level={availabilityLevel.id} />
                </Popover>
              )}
            </Col>
            <Col xs="12" md="6" className="vene-selected-berth__services">
              {services.map(([service, value]) => (
                <Icon
                  key={service}
                  name={service}
                  className={classNames('vene-selected-berth__service-icn', {
                    'vene-selected-berth__service-icn--disabled': !value,
                  })}
                />
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs="2" className="vene-selected-berth__ctrl">
          <Button
            className="vene-selected-berth__arrow-btn"
            outline
            color="primary"
            onClick={doMoveUp}
            disabled={!doMoveUp}
            aria-labelledby="vene-selected-berth__up"
          >
            <Icon name="angleUp" className="vene-selected-berth__arrow-icon" />
          </Button>
          <Button
            className="vene-selected-berth__arrow-btn"
            outline
            color="primary"
            onClick={doMoveDown}
            disabled={!doMoveDown}
            aria-labelledby="vene-selected-berth__down"
          >
            <Icon name="angleDown" className="vene-selected-berth__arrow-icon" />
          </Button>
          <ScreenReaderLabel id="vene-selected-berth__up" textKey="page.berth.selected.button.up" />
          <ScreenReaderLabel id="vene-selected-berth__down" textKey="page.berth.selected.button.down" />
        </Col>
      </Row>
    </Container>
  );
};

export default SelectedResource;
