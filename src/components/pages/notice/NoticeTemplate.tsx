import classNames from 'classnames';
import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

import LocalizedLink from '../../common/LocalizedLink';
import Layout from '../../layout/Layout';
import './noticeTemplate.scss';

export interface NoticePageProps {
  titleKey: string;
  messageKey: string;
  secondMessageKey?: string;
  success?: boolean;
}

const NoticeTemplate = ({
  titleKey,
  messageKey,
  secondMessageKey,
  success = false
}: NoticePageProps) => {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <div className="vene-notice-page">
        <div
          className={classNames(
            'vene-notice-page__content',
            success && 'vene-notice-page--success'
          )}
        >
          <FormattedMessage id={titleKey} tagName="h2" />
          <FormattedHTMLMessage id={messageKey} tagName="p" />
          {secondMessageKey && <FormattedHTMLMessage id={secondMessageKey} tagName="p" />}
        </div>
        <LocalizedLink to="/">
          <FormattedMessage id="site.buttons.to_front_page">
            {txt => (
              <Button className="vene-notice-page__front-page-button" outline color="secondary">
                {txt}
              </Button>
            )}
          </FormattedMessage>
        </LocalizedLink>
      </div>
    </Layout>
  );
};

export default NoticeTemplate;
