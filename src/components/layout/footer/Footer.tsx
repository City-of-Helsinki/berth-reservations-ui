import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';

import './footer.scss';

type Props = InjectedIntlProps;

const Footer = ({ intl: { formatMessage } }: Props) => (
  <div className="vene-footer">
    <Container>
      <Row>
        <Col md="4">
          <div className="vene-footer__vene-link">
            <LocalizedLink to="/">
              <FormattedMessage id="site.front.title" />
            </LocalizedLink>
          </div>
        </Col>
        <Col md="4">
          <div className="vene-footer__hel-logo">
            <Icon name="helsinkiLogo" />
          </div>
        </Col>
        <Col md="4">
          <ul>
            <li>
              <a href={formatMessage({ id: 'site.footer.url.helsinki_berths' })}>
                <FormattedMessage tagName="span" id="site.footer.browse_berths" />
              </a>
            </li>
            <li>
              <a href={formatMessage({ id: 'site.footer.url.berthing' })}>
                <FormattedMessage tagName="span" id="site.footer.boating_info" />
              </a>
            </li>
            <li>
              <a href={formatMessage({ id: 'site.footer.url.current_news' })}>
                <FormattedMessage tagName="span" id="site.footer.news" />
              </a>
            </li>
            <li>
              <a href={formatMessage({ id: 'site.footer.url.terms_of_service' })}>
                <FormattedMessage tagName="span" id="site.footer.terms_of_service" />
              </a>
            </li>
            <li>
              <a href={formatMessage({ id: 'site.footer.url.accessibility_statement' })}>
                <FormattedMessage tagName="span" id="site.footer.accessibility_statement" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <div className="vene-footer__link-wrapper">
          <a href={formatMessage({ id: 'site.footer.url.feedback' })}>
            <FormattedMessage tagName="li" id="site.footer.send_feedback" />
          </a>
          <a href={formatMessage({ id: 'site.footer.url.berthing' })}>
            <FormattedMessage tagName="li" id="site.footer.contact_us" />
          </a>
          <FormattedMessage
            tagName="li"
            id="site.footer.copyright"
            values={{ year: new Date().getFullYear() }}
          />
        </div>
      </Row>
    </Container>
  </div>
);

export default injectIntl(Footer);
