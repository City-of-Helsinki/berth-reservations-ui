// @flow
import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Icon from '../common/Icon';
import type { Berth } from '../../types/berths';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  opacity: ${props => (props.available ? 1 : 0.15)};

  flex: 1 0 25%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  padding: 1em 0;
`;

const DetailsIcon = styled(Icon).attrs({
  height: '42px'
})`
  margin: 0.25em;
`;

const DetailsValue = styled.span`
  line-height: 42px;
  font-size: 24px;
`;

const DetailsTitle = styled.span``;

const BerthImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const SummaryWrapper = styled.div`
  padding: 1em 0;
  > * {
    display: block;
  }
  span {
    font-size: 16px;
  }
  strong {
    font-size: 32px;
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
  display: inline-block;
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
  selected: boolean
};

export default ({ berth, className, onClick, selected }: Props) => (
  <Row className={className}>
    <Col xs={12}>
      <StyledDiv>
        <Row>
          <Col xs={3}>
            <BerthImage src={berth.image_file} alt={berth.name.fi} />
          </Col>
          <Col xs={4}>
            <SummaryWrapper>
              <strong>{berth.name.fi}</strong>

              <BerthAddress>
                {berth.street_address.fi}, {berth.zip_code} {berth.municipality.fi}
              </BerthAddress>
              {selected ? (
                <Button color="secondary" onClick={onClick}>
                  <ButtonIcon name="check" width="1em" height="1em" />
                  <FormattedMessage tagName="span" id="page.berths.selected" />
                </Button>
              ) : (
                <Button outline primary="true" onClick={onClick}>
                  + <FormattedMessage tagName="span" id="page.berths.select" />
                </Button>
              )}

              <WebsiteLink href={berth.www_url}>
                <FormattedMessage tagName="span" id="page.berths.website" />
              </WebsiteLink>
            </SummaryWrapper>
          </Col>
          <Col xs={5}>
            <DetailsWrapper>
              <Details available={true}>
                <DetailsValue>{berth.number_of_places}</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.number_of_places" />
                </DetailsTitle>
              </Details>
              <Details available={berth.mooring}>
                <DetailsIcon name="pole" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.pole" />
                </DetailsTitle>
              </Details>
              <Details available={berth.electricity}>
                <DetailsIcon name="plug" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.electricity" />
                </DetailsTitle>
              </Details>
              <Details available={berth.water}>
                <DetailsIcon name="waterTap" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.water_tap" />
                </DetailsTitle>
              </Details>
              <Details available={true}>
                <DetailsValue>{berth.maximum_width}</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.maximum_width" />
                </DetailsTitle>
              </Details>
              <Details available={berth.waste_collection}>
                <DetailsIcon name="trash" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.waste_collection" />
                </DetailsTitle>
              </Details>
              <Details available={berth.gate}>
                <DetailsIcon name="fence" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.fence" />
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
