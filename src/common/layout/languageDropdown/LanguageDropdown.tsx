import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import Icon from '../../Icon';

import ScreenReaderLabel from '../../../components/forms/fields/ScreenReaderLabel';
import './languageDropdown.scss';

const LanguageDropdown = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    document.documentElement.lang = language;
  });

  return (
    <>
      <ScreenReaderLabel id="languageSelect" textKey="site.language.select" append={language} />
      <Dropdown className="vene-language-dropdown" size="lg" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle aria-labelledby="languageSelect" color="link">
          <Icon aria-hidden name="globe" className="vene-language-dropdown__icon" />
          <span className="vene-language-dropdown__selected">{language.toUpperCase()}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/fi" lang="fi">
            {t('site.language.fi')}
          </DropdownItem>
          <DropdownItem href="/sv" lang="sv">
            {t('site.language.sv')}
          </DropdownItem>
          <DropdownItem href="/en" lang="en">
            {t('site.language.en')}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LanguageDropdown;
