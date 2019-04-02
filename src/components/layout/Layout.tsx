import React, { Fragment } from 'react';
import { FormattedHTMLMessage, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'reactstrap';
import Icon from '../common/Icon';
import Footer from './Footer';
import KoroSection from './KoroSection';
import LanguageDropdown from './LanguageDropdown';

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
  <Fragment>
    <Navbar expand="md">
      <Container>
        <NavbarBrand href="/">
          <Icon name="helsinkiLogo" width="90px" color="#000" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <LanguageDropdown />
        </Nav>
      </Container>
    </Navbar>
    <Navbar color="white" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <FormattedMessage id="site.title" />
        </NavbarBrand>
      </Container>
    </Navbar>
    {hero && (
      <Fragment>
        <Container>
          <FormattedMessage tagName="h1" id="site.title" />
        </Container>
        <KoroSection color="white">
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
      </Fragment>
    )}
    <KoroSection color="fog">{children}</KoroSection>
    <KoroSection bottom color="blue">
      <Footer />
    </KoroSection>
  </Fragment>
);

export default injectIntl(Layout);
