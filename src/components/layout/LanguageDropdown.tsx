import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import styled from 'styled-components';
import Icon from '../common/Icon';
import IntlComponent from '../common/IntlComponent';

type Props = {
  children?: React.ReactNode;
} & InjectedIntlProps;

type State = {
  collapsed: boolean;
  dropdownOpen: boolean;
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
        <LanguageSelector color="link">
          <StyledSelector>
            <Icon name="globe" width="30px" height="30px" color="black" />
            <span>{intl.locale.toUpperCase()}</span>
          </StyledSelector>
        </LanguageSelector>
        <DropdownMenu>
          <IntlComponent Component={DropdownItem} href="/fi" id="site.language.fi" />
          <IntlComponent Component={DropdownItem} href="/sv" id="site.language.sv" />
          <IntlComponent Component={DropdownItem} href="/en" id="site.language.en" />
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default injectIntl(LanguageDropdown);
