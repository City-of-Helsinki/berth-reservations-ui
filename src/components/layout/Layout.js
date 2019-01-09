// @flow

import React, { Fragment } from 'react';
import { FormattedMessage, FormattedHTMLMessage, injectIntl, type intlShape } from 'react-intl';
import { Navbar, NavbarBrand, Nav, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import LanguageDropdown from './LanguageDropdown';
import Icon from '../common/Icon';
import KoroSection from './KoroSection';
import Footer from './Footer';
import heroImage from '../../assets/images/hero_image_berth.jpg';
import responsive from '../../utils/responsive';

type Props = {
  children: any,
  hero?: boolean,
  intl: intlShape
};

const TopNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.helWhite};
  border-bottom: 1px solid ${props => props.theme.colors.light};
  height: 3.5em;
  & a {
    color: #000;
  }
  & a:hover {
    text-decoration: none;
    color: #000;
  }
`;

const BottomNavbar = styled(Navbar)`
  height: 3.5em;
`;

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  padding: 5.5vw;
  min-height:20em;
  h1 {
    font-size: 2em;
    ${responsive.md`
      font-size: 3em;
    `}
    ${responsive.lg`
      font-size: 4em;
    `}
    ${responsive.xl`
      font-size: 5em;
    `}
    color: #fff;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled(KoroSection).attrs({
  bottom: true,
  color: 'fog'
})``;

const HeroContent = styled(KoroSection).attrs({
  bottom: true,
  color: 'white'
})`
  > div {
    margin-top: 3em;
    margin-bottom: 4em;
  }
`;

const getHeroContentLink = locale => {
  switch (locale) {
    case 'en':
      return 'https://www.hel.fi/helsinki/en/culture/recreation/boating/berths';
    case 'sv':
      return 'https://www.hel.fi/helsinki/sv/kultur-och-fritid/friluftsliv/botliv/batplatser/';
    default:
      return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/venepaikan-hakeminen/';
  }
};

const Layout = ({ children, hero, intl: { locale } }: Props) => (
  <Fragment>
    <TopNavbar expand="md">
      <NavbarBrand href="/">
        <Icon name="helsinkiLogo" width="90px" color="#000" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <LanguageDropdown />
      </Nav>
    </TopNavbar>
    <BottomNavbar color="white" light expand="md">
      <NavbarBrand href="/">
        <FormattedMessage id="site.title" />
      </NavbarBrand>
    </BottomNavbar>
    {hero && (
      <Fragment>
        <Hero>
          <FormattedMessage tagName="h1" id="site.title" />
        </Hero>
        <HeroContent>
          <Container>
            <Row>
              <Col>
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
        </HeroContent>
      </Fragment>
    )}
    <Content>{children}</Content>
    <KoroSection bottom color="blue">
      <Footer />
    </KoroSection>
  </Fragment>
);

export default injectIntl(Layout);
