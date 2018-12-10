// @flow
import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Icon from '../common/Icon';
import type { Berth } from '../../types/berths';
import responsive from '../../utils/responsive';

const Details = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 33.33%;
  height: auto;

  opacity: ${props => (props.available ? 1 : 0.15)};

  &:last-child {
    flex-grow: 1;
  }

  ${responsive.lg`
    justify-content: center;
    flex: 1 0 50%;
    flex-direction: column;
    height: 1px;
  `}
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  padding: 2em;
  padding-top: 0px;
  white-space: nowrap;
  ${responsive.lg`
    flex-direction: column;
    padding: 1em 0;
  `}
`;

const DetailsIcon = styled(Icon).attrs({
  height: '42px',
  width: '42px'
})`
  margin: 0.25em;
  display: none;
  text-align: center;
  ${responsive.lg`
    display: block;
  `}
`;

const DetailsValue = styled.span`
  margin-right: 1ch;
  text-align: center;
  ${responsive.lg`
    margin-right: 0;
    line-height: 42px;
    font-size: 24px;
  `}
`;

const DetailsTitle = styled.span`
  text-align: center;
`;

const BerthImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-height: 16em;
`;

const SummaryWrapper = styled.div`
  padding: 2em;
  padding-bottom: 1em;
  ${responsive.lg`
    padding: 1em 0;
  `}
  > * {
    display: block;
  }
  span {
    font-size: 16px;
  }
  strong {
    line-height: 1em;
  }
  small {
    font-size: 14px;
  }
  a {
    font-size: 12px;
    color: black;
  }
`;

const ButtonIcon = styled(Icon)`
  display: none;
  ${responsive.lg`
    display: inline-block;
  `}
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
`;

const BerthAddress = styled.div`
  margin-top: 0.8em;
  margin-bottom: 1em;
`;

const WebsiteLink = styled.a`
  margin-top: 1em;
`;

const StyledDiv = styled.div`
  background-color: ${props => props.theme.helLight};
`;

type Props = {
  berth: Berth,
  className: string,
  onClick: Function,
  selected: boolean,
  disabled?: boolean
};
const Heading = styled.strong`
  font-size: 18px;
  ${responsive.lg`
    font-size: 32px;
  `}
`;

export default ({ berth, className, onClick, selected, disabled }: Props) => (
  <Row className={className}>
    <Col xs={12}>
      <StyledDiv>
        <Row>
          <Col lg={3}>
            <BerthImage src={berth.image} alt={berth.name.fi} />
          </Col>
          <Col lg={4}>
            <SummaryWrapper>
              <Heading>{berth.name.fi}</Heading>

              <BerthAddress>
                {berth.street_address.fi}, {berth.zip_code} {berth.municipality.fi}
              </BerthAddress>
              {selected ? (
                <Button color="secondary" onClick={onClick}>
                  <ButtonIcon name="check" width="1em" height="1em" />
                  <FormattedMessage tagName="span" id="page.berths.selected" />
                </Button>
              ) : (
                <Button outline primary="true" onClick={onClick} disabled={disabled}>
                  + <FormattedMessage tagName="span" id="page.berths.select" />
                </Button>
              )}

              <WebsiteLink rel="noopener" target="_blank" href={berth.www_url}>
                <FormattedMessage tagName="span" id="page.berths.website" />
              </WebsiteLink>
            </SummaryWrapper>
          </Col>
          <Col lg={5}>
            <DetailsWrapper>
              <Details available={true}>
                <DetailsValue>{berth.number_of_places}</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.number_of_places" />
                </DetailsTitle>
              </Details>
              <Details available={true}>
                <DetailsValue>{berth.maximum_width} m</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.maximum_width" />
                </DetailsTitle>
              </Details>
              <Details available={berth.mooring}>
                <DetailsIcon name="pole" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.pole" />
                </DetailsTitle>
              </Details>
              <Details available={berth.waste_collection}>
                <DetailsIcon name="trash" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.waste_collection" />
                </DetailsTitle>
              </Details>
              <Details available={berth.electricity}>
                <DetailsIcon name="plug" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.electricity" />
                </DetailsTitle>
              </Details>
              <Details available={berth.gate}>
                <DetailsIcon name="fence" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.fence" />
                </DetailsTitle>
              </Details>
              <Details available={berth.water}>
                <DetailsIcon name="waterTap" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.water_tap" />
                </DetailsTitle>
              </Details>
              <Details available={berth.lighting}>
                <DetailsIcon name="streetLight" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.lighting" />
                </DetailsTitle>
              </Details>
            </DetailsWrapper>
          </Col>
        </Row>
      </StyledDiv>
    </Col>
  </Row>
);
