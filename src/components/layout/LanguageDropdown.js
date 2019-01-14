// @flow

import React from 'react';
import { FormattedMessage, injectIntl, type intlShape } from 'react-intl';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import styled from 'styled-components';
import Icon from '../common/Icon';

type Props = {
  children: Node,
  intl: intlShape
};

type State = {
  collapsed: boolean,
  dropdownOpen: boolean
};

const LanguageSelector = styled(DropdownToggle)`
  color: #000;
  background-color: ${props => props.theme.colors.helWhite};
  box-shadow: none;
  border: 0em;
  width: 7.2em;
  text-align: right;
`;

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & span {
    margin-left: 0.5em;
  }
`;

class LanguageDropdown extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      collapsed: true,
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const { intl } = this.props;

    return (
      <Dropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <LanguageSelector className="btn-link">
          <StyledSelector>
            <Icon name="globe" width="30px" color="black" />
            <span>{intl.locale.toUpperCase()}</span>
          </StyledSelector>
        </LanguageSelector>
        <DropdownMenu>
          <DropdownItem tag="a" href="/fi" active>
            <FormattedMessage id="site.language.fi" />
          </DropdownItem>
          <DropdownItem tag="a" href="/sv" active>
            <FormattedMessage id="site.language.sv" />
          </DropdownItem>
          <DropdownItem tag="a" href="/en" active>
            <FormattedMessage id="site.language.en" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default injectIntl(LanguageDropdown);
