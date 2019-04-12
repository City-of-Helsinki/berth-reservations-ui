import React, { Fragment } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Icon from '../../common/Icon';
import IntlComponent from '../../common/IntlComponent';

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
      <div className="vene-navbar__language-dropdown">
        <Dropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="link">
            <Fragment>
              <Icon name="globe" />
              <span>{intl.locale.toUpperCase()}</span>
            </Fragment>
          </DropdownToggle>
          <DropdownMenu>
            <IntlComponent Component={DropdownItem} href="/fi" id="site.language.fi" />
            <IntlComponent Component={DropdownItem} href="/sv" id="site.language.sv" />
            <IntlComponent Component={DropdownItem} href="/en" id="site.language.en" />
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default injectIntl(LanguageDropdown);
