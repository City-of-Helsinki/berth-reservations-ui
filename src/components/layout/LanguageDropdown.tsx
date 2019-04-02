import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Icon from '../common/Icon';
import IntlComponent from '../common/IntlComponent';

type Props = {
  children?: React.ReactNode;
} & InjectedIntlProps;

interface State {
  collapsed: boolean;
  dropdownOpen: boolean;
}

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
        <DropdownToggle color="link">
          <div>
            <Icon name="globe" width="30px" height="30px" color="black" />
            <span>{intl.locale.toUpperCase()}</span>
          </div>
        </DropdownToggle>
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
