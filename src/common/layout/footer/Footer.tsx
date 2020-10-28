import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Icon from '../../Icon';
import LocalizedLink from '../../LocalizedLink';

import './footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="vene-footer">
      <Container>
        <Row>
          <Col md="4">
            <div className="vene-footer__vene-link">
              <LocalizedLink to="/">
                <span>{t('site.front.title')}</span>
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
                <a
                  href={t('site.footer.url.helsinki_berths')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t('site.footer.browse_berths')}</span>
                </a>
              </li>
              <li>
                <a href={t('site.footer.url.berthing')} rel="noopener noreferrer" target="_blank">
                  <span>{t('site.footer.boating_info')}</span>
                </a>
              </li>
              <li>
                <a
                  href={t('site.footer.url.current_news')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t('site.footer.news')}</span>
                </a>
              </li>
              <li>
                <a
                  href={t('site.footer.url.terms_of_service')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t('site.footer.terms_of_service')}</span>
                </a>
              </li>
              <li>
                <a
                  href={t('site.footer.url.accessibility_statement')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t('site.footer.accessibility_statement')}</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <div className="vene-footer__bottom-link-wrapper">
            <span className="vene-footer__bottom-link">
              <a href={t('site.footer.url.feedback')} rel="noopener noreferrer" target="_blank">
                {t('site.footer.send_feedback')}
              </a>
            </span>
            <span className="vene-footer__bottom-link">
              <a href={t('site.footer.url.berthing')} rel="noopener noreferrer" target="_blank">
                {t('site.footer.contact_us')}
              </a>
            </span>
            <span className="vene-footer__bottom-link">
              {t('site.footer.copyright', { year: new Date().getFullYear() })}
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
