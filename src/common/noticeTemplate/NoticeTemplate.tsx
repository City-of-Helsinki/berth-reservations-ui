import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';

import LocalizedLink from '../localizedLink/LocalizedLink';
import Layout from '../layout/Layout';
import './noticeTemplate.scss';

export interface NoticePageProps {
  id?: string; // used in tests only
  titleText: string;
  message: React.ReactNode;
  success?: boolean;
}

const NoticeTemplate = ({ titleText, message, success = false, id }: NoticePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <Layout>
      <div id={id} className="vene-notice-page">
        <div className={classNames('vene-notice-page__content', success && 'vene-notice-page--success')}>
          <h2>{titleText}</h2>
          {message}
        </div>
        <div className="vene-notice-page__button-wrapper">
          <LocalizedLink to="/">
            <Button className="vene-notice-page__front-page-button" outline color="secondary">
              {t('site.buttons.to_front_page')}
            </Button>
          </LocalizedLink>
        </div>
      </div>
    </Layout>
  );
};

export default NoticeTemplate;
