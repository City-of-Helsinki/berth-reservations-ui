import classNames from 'classnames';
import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { Button, Col, Container, Row } from 'reactstrap';

import { genValidSelector } from '../../../../utils/berths';
import AvailabilityLevel from '../../../berths/availabilityLevel/AvailabilityLevel';
import InvalidSelection from '../../../berths/InvalidSelection';
import ScreenReaderLabel from '../../../forms/fields/ScreenReaderLabel';
import Icon, { IconNames } from '../../Icon';
import Modal from '../../modal/Modal';
import Popover from '../../popover/Popover';

import './selectedResource.scss';

export interface Props {
  id: string;
  availabilityLevel?: { id: string; title: string | null; description: string | null } | null;
  title: React.ReactNode;
  validationErrMsg?: string;
  services: Array<[IconNames, boolean]>;
  className?: string;
  handleRemove(id: string): void;
  moveDown?(id: string): void;
  moveUp?(id: string): void;
}

interface State {
  changed: 'nothing' | 'up' | 'down' | 'delete';
  isModalOpen: boolean;
}

class SelectedResource extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      changed: 'nothing',
      isModalOpen: false
    };
  }

  toggleEnterState = () => {
    const { id, moveDown, moveUp, handleRemove } = this.props;
    const { changed } = this.state;

    if (changed === 'down') {
      if (moveDown) moveDown(id);
    }
    if (changed === 'up') {
      if (moveUp) moveUp(id);
    }
    if (changed === 'delete') {
      handleRemove(id);
    }

    this.setState({ changed: 'nothing' });
  };

  doMoveUp = () => {
    this.setState({ changed: 'up' });
  };

  doMoveDown = () => {
    this.setState({ changed: 'down' });
  };

  doDelete = () => {
    this.setState({ changed: 'delete' });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const {
      id,
      availabilityLevel,
      title,
      services,
      validationErrMsg,
      moveDown,
      moveUp,
      className
    } = this.props;
    const { changed, isModalOpen } = this.state;
    const validDomId = genValidSelector(`popover_${id}`);

    return (
      <Transition in={changed !== 'nothing'} timeout={300} onEntered={this.toggleEnterState}>
        {state => (
          <>
            <Container className={classNames('vene-selected-berth', className)}>
              <Row>
                <Col
                  xs="10"
                  className={classNames(
                    'vene-selected-berth__info',
                    `vene-selected-berth__info--moving-${state}`
                  )}
                >
                  <Row
                    className={classNames('vene-selected-berth__title-bar', {
                      'vene-selected-berth__title-bar--has-error': !!validationErrMsg
                    })}
                  >
                    <Col xs="10" className="vene-selected-berth__title">
                      {title}
                      {validationErrMsg && (
                        <InvalidSelection id={validDomId} msg={validationErrMsg} />
                      )}
                    </Col>
                    <Col xs="2" className="vene-selected-berth__close">
                      <Button
                        close
                        onClick={this.toggleModal}
                        className="vene-selected-berth__close-btn"
                        aria-labelledby="vene-selected-berth__remove"
                      >
                        <Icon name="times" />
                      </Button>
                      <ScreenReaderLabel
                        id="vene-selected-berth__remove"
                        textKey="page.berth.selected.button.remove"
                      />
                    </Col>
                  </Row>
                  <Row className="vene-selected-berth__services-bar">
                    <Col xs="12" md="6" className="vene-selected-berth__availability-level">
                      {availabilityLevel && (
                        <Popover
                          id={`availability-level-${validDomId}`}
                          body={availabilityLevel.description || availabilityLevel.title}
                        >
                          <AvailabilityLevel
                            label={availabilityLevel.title}
                            level={availabilityLevel.id}
                          />
                        </Popover>
                      )}
                    </Col>
                    <Col xs="12" md="6" className="vene-selected-berth__services">
                      {services.map(([service, value]) => (
                        <Icon
                          key={service}
                          name={service}
                          className={classNames('vene-selected-berth__service-icn', {
                            'vene-selected-berth__service-icn--disabled': !value
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
                    onClick={this.doMoveUp}
                    disabled={!moveUp}
                    aria-labelledby="vene-selected-berth__up"
                  >
                    <Icon name="angleUp" className="vene-selected-berth__arrow-icon" />
                  </Button>
                  <Button
                    className="vene-selected-berth__arrow-btn"
                    outline
                    color="primary"
                    onClick={this.doMoveDown}
                    disabled={!moveDown}
                    aria-labelledby="vene-selected-berth__down"
                  >
                    <Icon name="angleDown" className="vene-selected-berth__arrow-icon" />
                  </Button>
                  <ScreenReaderLabel
                    id="vene-selected-berth__up"
                    textKey="page.berth.selected.button.up"
                  />
                  <ScreenReaderLabel
                    id="vene-selected-berth__down"
                    textKey="page.berth.selected.button.down"
                  />
                </Col>
              </Row>
            </Container>
            <Modal
              body="page.berth.selected.confirmation_body"
              isOpen={isModalOpen}
              handleAccept={this.doDelete}
              handleToggle={this.toggleModal}
            />
          </>
        )}
      </Transition>
    );
  }
}

export default SelectedResource;
