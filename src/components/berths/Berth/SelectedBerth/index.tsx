import classNames from 'classnames';
import React, { Component } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Transition from 'react-transition-group/Transition';
import { Button } from 'reactstrap';

import Icon from '../../../common/Icon';
import InvalidSelection from '../../InvalidSelection';

import { Berth } from '../types';
import './SelectedBerth.scss';

type Props = {
  berth: Berth;
  deselectBerth: Function;
  first: boolean;
  index: number;
  isValid: boolean;
  last: boolean;
  moveDown: Function;
  moveUp: Function;
} & InjectedIntlProps;

interface State {
  changed: string;
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
      this.props.moveDown(this.props.berth.identifier);
    }
    if (this.state.changed === 'up') {
      this.props.moveUp(this.props.berth.identifier);
    }
    if (this.state.changed === 'delete') {
      this.props.deselectBerth(this.props.berth.identifier);
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
    const { berth, index, first, last, isValid } = this.props;

    const id = `tooltip_${berth.identifier}`;
    return (
      <Transition
        in={this.state.changed !== 'nothing'}
        timeout={300}
        onEntered={this.toggleEnterState}
      >
        {state => (
          <div className="vene-berth__selected__row">
            <div
              className={classNames('vene-berth__selected__name', `moving-${state}`, {
                'has-error': !isValid
              })}
            >
              <span key={berth.identifier}>
                {index + 1}. {berth.name}
                {!isValid && <InvalidSelection id={id} />}
              </span>
              <Button onClick={this.doDelete}>
                <Icon name="times" />
              </Button>
            </div>
            <div className="vene-berth__selected__options">
              <Button outline color="primary" onClick={this.doMoveUp} disabled={first}>
                <Icon name="angleUp" />
              </Button>

              <Button outline color="primary" onClick={this.doMoveDown} disabled={last}>
                <Icon name="angleDown" />
              </Button>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

export default injectIntl(SelectedBerth);
