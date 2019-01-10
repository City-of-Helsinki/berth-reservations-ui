import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

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
`;

class SelectedBerth extends Component<any, any> {
  render() {
    const {
      berth,
      index,
      moveUp,
      moveDown,
      first,
      last,
      deselectBerth,
      isValid,
      intl
    } = this.props;

    const id = `tooltip_${berth.identifier}`;
    return (
      <BerthRow>
        <BerthName errors={isValid.toString()}>
          <span key={berth.identifier}>
            {index + 1}. {getLocalizedText(berth.name, intl.locale)}
          </span>
          <DeselectButton type="button" onClick={() => deselectBerth(berth.identifier)}>
            <Icon name="times" width="30px" />
          </DeselectButton>
          {!isValid && <InvalidSelection id={id} />}
        </BerthName>
        <BerthOptions>
          <StyledButton
            outline
            color="primary"
            onClick={() => moveUp(berth.identifier)}
            disabled={first}
          >
            <Icon name="angleUp" width="36px" color={first ? 'lightgray' : 'black'} />
          </StyledButton>

          <StyledButton
            outline
            color="primary"
            onClick={() => moveDown(berth.identifier)}
            disabled={last}
          >
            <Icon name="angleDown" width="36px" color={last ? 'lightgray' : 'black'} />
          </StyledButton>
        </BerthOptions>
      </BerthRow>
    );
  }
}

export default injectIntl(SelectedBerth);
