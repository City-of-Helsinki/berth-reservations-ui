import classNames from 'classnames';
import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { Button, Col, Container, Row } from 'reactstrap';

import { genValidSelector } from '../../../../utils/berths';
import Icon, { IconNames } from '../../../common/Icon';
import Popover from '../../../common/popover/Popover';
import AvailabilityLevel from '../../availabilityLevel/AvailabilityLevel';
import InvalidSelection from '../../InvalidSelection';

import { BerthType } from '../../../../types/berth';
import { WinterStorageType } from '../../../../types/winterStorage';

import './selectedBerth.scss';

export interface Props {
  berth: BerthType | WinterStorageType;
  handleRemove: Function;
  title: React.ReactNode;
  isValid?: boolean;
  services: Array<[IconNames, boolean]>;
  moveDown?: Function;
  moveUp?: Function;
  className?: string;
}

interface State {
  changed: 'nothing' | 'up' | 'down' | 'delete';
}

class SelectedBerth extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      changed: 'nothing'
    };
  }

  toggleEnterState = () => {
    if (this.state.changed === 'down') {
      if (this.props.moveDown) this.props.moveDown(this.props.berth);
    }
    if (this.state.changed === 'up') {
      if (this.props.moveUp) this.props.moveUp(this.props.berth);
    }
    if (this.state.changed === 'delete') {
      this.props.handleRemove(this.props.berth);
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

  render() {
    const { title, berth, services, isValid = true, moveDown, moveUp, className } = this.props;
    const id = genValidSelector(`popover_${berth.id}`);

    return (
      <Transition
        in={this.state.changed !== 'nothing'}
        timeout={300}
        onEntered={this.toggleEnterState}
      >
        {state => (
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
                    'vene-selected-berth__title-bar--has-error': !isValid
                  })}
                >
                  <Col xs="10" className="vene-selected-berth__title">
                    {title}
                    {!isValid && <InvalidSelection id={id} />}
                  </Col>
                  <Col xs="2" className="vene-selected-berth__close">
                    <Button
                      close
                      aria-label="Cancel"
                      onClick={this.doDelete}
                      className="vene-selected-berth__close-btn"
                    >
                      <Icon name="times" />
                    </Button>
                  </Col>
                </Row>
                <Row className="vene-selected-berth__services-bar">
                  <Col xs="12" md="6" className="vene-selected-berth__availability-level">
                    {berth.availabilityLevel && (
                      <Popover
                        id={`availability-level-${id}`}
                        body={berth.availabilityLevel.description || berth.availabilityLevel.title}
                      >
                        <AvailabilityLevel
                          label={berth.availabilityLevel.title}
                          level={berth.availabilityLevel.id}
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
                >
                  <Icon name="angleUp" className="vene-selected-berth__arrow-icon" />
                </Button>
                <Button
                  className="vene-selected-berth__arrow-btn"
                  outline
                  color="primary"
                  onClick={this.doMoveDown}
                  disabled={!moveDown}
                >
                  <Icon name="angleDown" className="vene-selected-berth__arrow-icon" />
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </Transition>
    );
  }
}

export default SelectedBerth;
