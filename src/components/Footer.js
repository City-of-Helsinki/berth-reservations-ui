import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';

import Icon from './Icon';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.blue};
  color: #fff;
  padding-top: 4em;
  height: 15em;
`;

const OptionsContainer = styled(Container)`
  width: 100%;
`;

const LinksContainer = styled(Container)`
  margin-top: 2em;
  max-width: ${props => props.theme.maxWidth.xl};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
    display: inline;
    padding-left: 1em;
    padding-right: 1em;
  }

  li + li {
    border-left: 0.06em solid #fff;
  }
`;

const FooterSection = styled(Col)`
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <OptionsContainer>
      <Row>
        <FooterSection md="4">
          <FormattedMessage id="site.footer.bearth_search" />
        </FooterSection>
        <FooterSection md="4">
          <Icon name="helsinkiLogo" width="120" color="#fff" />
        </FooterSection>
        <FooterSection md="4">
          <FormattedMessage tagName="div" id="site.footer.browse_berths" />
          <FormattedMessage tagName="div" id="site.footer.apply" />
          <FormattedMessage tagName="div" id="site.footer.ukk" />
        </FooterSection>
      </Row>
    </OptionsContainer>
    <LinksContainer>
      <Row>
        <FooterSection md="12">
          <List>
            <FormattedMessage tagName="li" id="site.footer.send_feedback" />
            <FormattedMessage tagName="li" id="site.footer.contact_us" />
            <FormattedMessage tagName="li" id="site.footer.copyright" />
          </List>
        </FooterSection>
      </Row>
    </LinksContainer>
  </Wrapper>
);

export default Footer;
