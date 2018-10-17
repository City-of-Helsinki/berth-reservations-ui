import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';

import Logo from './Logo';

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
  width: 60%;
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
    border-left: 0.0625em solid #fff;
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
          <Logo />
        </FooterSection>
        <FooterSection md="4">
          <div>
            <FormattedMessage id="site.footer.browse_berths" />
          </div>
          <div>
            <FormattedMessage id="site.footer.apply" />
          </div>
          <div>
            <FormattedMessage id="site.footer.ukk" />
          </div>
        </FooterSection>
      </Row>
    </OptionsContainer>
    <LinksContainer>
      <Row>
        <FooterSection md="12">
          <List>
            <li>
              <FormattedMessage id="site.footer.send_feedback" />
            </li>
            <li>
              <FormattedMessage id="site.footer.contact_us" />
            </li>
            <li>
              <FormattedMessage id="site.footer.copyright" />
            </li>
          </List>
        </FooterSection>
      </Row>
    </LinksContainer>
  </Wrapper>
);

export default Footer;
