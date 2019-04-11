import React from 'react';
import { FormattedHTMLMessage, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Footer from './Footer';
import KoroSection from './KoroSection';
import Navbar from './Navbar';

import './Layout.scss';

type Props = {
  children: any;
  hero?: boolean;
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
      <div className="vene-layout__hero">
        <Container>
          <FormattedMessage tagName="h1" id="site.title" />
        </Container>
      </div>
    )}

    {hero && (
      <KoroSection bottom color="white" className="vene-layout__koro">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <FormattedMessage tagName="h1" id="hero.title" />
              <FormattedMessage tagName="p" id="hero.paragraph.first" />
              <FormattedHTMLMessage
                tagName="p"
                id="hero.paragraph.second"
                values={{ url: getHeroContentLink(locale) }}
              />
            </Col>
          </Row>
        </Container>
      </KoroSection>
    )}

    <KoroSection top color="fog">
      {children}
    </KoroSection>
    <KoroSection bottom color="blue">
      <Footer />
    </KoroSection>
  </div>
);

export default injectIntl(Layout);
