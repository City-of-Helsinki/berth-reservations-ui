// @flow

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { injectIntl } from 'react-intl';
import Transition from 'react-transition-group/Transition';

import classNames from 'classnames';
import Icon from '../common/Icon';
import { getLocalizedText } from '../../utils/berths';
import InvalidSelection from './InvalidSelection';
import './_selected.scss';

type Props = {
  berth: Object,
  deselectBerth: Function,
  first: boolean,
  index: number,
  intl: Object,
  isValid: boolean,
  last: boolean,
  moveDown: Function,
  moveUp: Function
};

type State = {
  changed: string
};

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

  doMoveUp() {
    this.setState({ changed: 'up' });
  }

  doMoveDown() {
    this.setState({ changed: 'down' });
  }

  doDelete() {
    this.setState({ changed: 'delete' });
  }

  render() {
    const { berth, index, first, last, isValid, intl } = this.props;

    const id = `tooltip_${berth.identifier}`;
    return (
      <Transition
        in={this.state.changed !== 'nothing'}
        timeout={300}
        onEntered={this.toggleEnterState}
      >
        {state => (
          <div className="app-berth__selected__row">
            <div
              className={classNames('app-berth__selected__name', `moving-${state}`, {
                'has-error': isValid.toString()
              })}
            >
              <span key={berth.identifier}>
                {index + 1}. {getLocalizedText(berth.name, intl.locale)}
                {!isValid && <InvalidSelection id={id} />}
              </span>
              <Button onClick={() => this.doDelete()}>
                <Icon name="times" width="30px" height="30px" />
              </Button>
            </div>
            <div className="app-berth__selected__options">
              <Button outline color="primary" onClick={() => this.doMoveUp()} disabled={first}>
                <Icon
                  name="angleUp"
                  width="36px"
                  height="36px"
                  color={first ? 'lightgray' : 'black'}
                />
              </Button>

              <Button outline color="primary" onClick={() => this.doMoveDown()} disabled={last}>
                <Icon
                  name="angleDown"
                  width="36px"
                  height="36px"
                  color={last ? 'lightgray' : 'black'}
                />
              </Button>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

export default injectIntl(SelectedBerth);
