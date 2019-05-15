import classNames from 'classnames';
import React from 'react';
import { FormattedHTMLMessage, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import Footer from './Footer';
import KoroSection from './KoroSection';
import Navbar from './Navbar';

import { FormMode } from '../../types/form';

import './Layout.scss';

type Props = {
  children: any;
  hero?: FormMode;
} & InjectedIntlProps;

const getHeroContentLink = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'https://www.hel.fi/helsinki/en/culture/recreation/boating/boat-berths/';
    case 'sv':
      return 'https://www.hel.fi/helsinki/sv/kultur-och-fritid/friluftsliv/botliv/batplatser/';
    default:
      return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/venepaikan-hakeminen/';
  }
};

const Layout = ({ children, hero, intl: { locale } }: Props) => (
  <div className="vene-layout">
    <Navbar />
    {hero && (
      <div
        className={classNames('vene-layout__hero', {
          'vene-layout__hero--winter': hero === FormMode.Winter
        })}
      >
        <Container>
          <FormattedMessage tagName="h1" id={`site.${hero}.title`} />
        </Container>
      </div>
    )}

    {hero && (
      <KoroSection top color="white" className="vene-layout__koro">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <FormattedMessage tagName="h1" id={`hero.${hero}.title`} />
              <FormattedMessage tagName="p" id={`hero.${hero}.paragraph.first`} />
              <FormattedHTMLMessage
                tagName="p"
                id={`hero.${hero}.paragraph.second`}
                values={{ url: getHeroContentLink(locale) }}
              />
            </Col>
          </Row>
        </Container>
      </KoroSection>
    )}

    <KoroSection top={!!hero} color="fog">
      {children}
    </KoroSection>
    <KoroSection top color="blue">
      <Footer />
    </KoroSection>
  </div>
);

export default injectIntl(Layout);
