import React from 'react';
import classNames from 'classnames';
import { IconAngleRight, IconLinkExternal } from 'hds-react';
import { useTranslation } from 'react-i18next';

import styles from './externalLink.module.scss';
import SrOnly from '../SrOnly/SrOnly';

export type ExternalLinkProps = {
  children: React.ReactNode;
  href: string;
  target?: '_blank' | '_self';
  variant?: 'default' | 'withArrow';
};

const ExternalLink = ({ variant = 'default', href, children, target = '_blank' }: ExternalLinkProps) => {
  const { t } = useTranslation();
  return (
    <a className={classNames(styles.link, styles[variant])} href={href} target={target} rel="noopener noreferrer">
      {children}
      <i className={styles.icon}>
        {variant === 'default' && <IconLinkExternal />}
        {variant === 'withArrow' && <IconAngleRight />}
      </i>
      <SrOnly>{t('common.srOnly.opensInANewTab')}</SrOnly>
    </a>
  );
};

export default ExternalLink;
