import React, { useEffect, useState } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import Icon from '../../common/Icon';
import IntlComponent from '../../common/IntlComponent';

import './languageDropdown.scss';

type Props = {
  children?: React.ReactNode;
} & InjectedIntlProps;

const LanguageDropdown = ({ intl: { locale } }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    document.documentElement.lang = locale;
  });

  return (
    <Dropdown className="vene-language-dropdown" size="lg" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="link">
        <>
          <Icon name="globe" className="vene-language-dropdown__icon" />
          <span className="vene-language-dropdown__selected">{locale.toUpperCase()}</span>
        </>
      </DropdownToggle>
      <DropdownMenu>
        <IntlComponent Component={DropdownItem} href="/fi" id="site.language.fi" />
        <IntlComponent Component={DropdownItem} href="/sv" id="site.language.sv" />
        <IntlComponent Component={DropdownItem} href="/en" id="site.language.en" />
      </DropdownMenu>
    </Dropdown>
  );
};

export default injectIntl(LanguageDropdown);
