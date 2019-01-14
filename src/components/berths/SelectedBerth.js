// @flow

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import Transition from 'react-transition-group/Transition';

import Icon from '../common/Icon';
import responsive from '../../utils/responsive';
import { getLocalizedText } from '../../utils/berths';
import InvalidSelection from './InvalidSelection';

const BerthRow = styled.div`
  display: flex;
  margin-bottom: 0.5em;
`;

const BerthName = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: ${props =>
    props.errors === 'true' ? props.theme.helCoat : props.theme.helLight};
  color: ${props => (props.errors === 'true' ? props.theme.helWhite : props.theme.helGray)};
  font-size: 0.875em;
  line-height: 1;
  padding: 0.3em;
  padding-left: 0.8em;
  margin-right: 0.5em;
  transition: background-color 200ms ease-in;

  &.moving-entering {
    background-color: ${props => props.theme.helFog};
  }

  &.moving-exiting {
    background-color: ${props => props.theme.helFog};
  }
  ${responsive.sm`
    font-size: 1.2em;
  `}

  span {
    flex-grow: 1;
  }
`;

const BerthOptions = styled.div`
  display: flex;
  align-content: center;
`;

const StyledButton = styled(Button)`
  padding-left: 0;
  padding-right: 0;
  &:first-child {
    margin-right: 6px;
  }
  &:hover {
    background-color: ${props => props.theme.helFog};
  }
  ${responsive.sm`
    padding-left:  0.75rem;
    padding-right: 0.75rem;
  `}
`;

const DeselectButton = styled(Button)`
  height: 100%;
  margin-left: 1em;
  background-color: transparent;
  border: 0;
`;

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
          <BerthRow>
            <BerthName errors={isValid.toString()} className={`moving-${state}`}>
              <span key={berth.identifier}>
                {index + 1}. {getLocalizedText(berth.name, intl.locale)}
              </span>
              <DeselectButton type="button" onClick={() => this.doDelete()}>
                <Icon name="times" width="30px" />
              </DeselectButton>
              {!isValid && <InvalidSelection id={id} />}
            </BerthName>
            <BerthOptions>
              <StyledButton
                outline
                color="primary"
                onClick={() => this.doMoveUp()}
                disabled={first}
              >
                <Icon name="angleUp" width="36px" color={first ? 'lightgray' : 'black'} />
              </StyledButton>

              <StyledButton
                outline
                color="primary"
                onClick={() => this.doMoveDown()}
                disabled={last}
              >
                <Icon name="angleDown" width="36px" color={last ? 'lightgray' : 'black'} />
              </StyledButton>
            </BerthOptions>
          </BerthRow>
        )}
      </Transition>
    );
  }
}

export default injectIntl(SelectedBerth);
