// @flow

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';
import LocalizedLink from '../common/LocalizedLink';
import Icon from '../common/Icon';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.blue};
  color: #fff;
  padding-top: 4em;
  padding-bottom: 4em;
  min-height: 15em;

  & a {
    color: #fff;
  }
`;

const OptionsContainer = styled(Container)`
  width: 100%;
`;

const LinksContainer = styled(Container)`
  margin-top: 2em;
  max-width: ${props => props.theme.maxWidth.xl};
`;

const HorizontalList = styled.ul`
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

const VerticalList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
  }
`;

const FooterSection = styled(Col)`
  text-align: center;
`;

type Props = {
  intl: IntlShape
};

const Footer = ({ intl: { formatMessage } }: Props) => {
  return (
    <Wrapper>
      <OptionsContainer>
        <Row>
          <FooterSection md="4">
            <LocalizedLink to="">
              <FormattedMessage id="site.footer.bearth_search" />
            </LocalizedLink>
          </FooterSection>
          <FooterSection md="4">
            <Icon name="helsinkiLogo" width="120px" color="#fff" />
          </FooterSection>
          <FooterSection md="4">
            <VerticalList>
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
            </VerticalList>
          </FooterSection>
        </Row>
      </OptionsContainer>
      <LinksContainer>
        <Row>
          <FooterSection md="12">
            <HorizontalList>
              <a href={formatMessage({ id: 'site.footer.url.feedback' })}>
                <FormattedMessage tagName="li" id="site.footer.send_feedback" />
              </a>
              <a href={formatMessage({ id: 'site.footer.url.berthing' })}>
                <FormattedMessage tagName="li" id="site.footer.contact_us" />
              </a>
              <FormattedMessage tagName="li" id="site.footer.copyright" />
            </HorizontalList>
          </FooterSection>
        </Row>
      </LinksContainer>
    </Wrapper>
  );
};

export default injectIntl(Footer);
