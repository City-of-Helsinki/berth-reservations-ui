import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import Icon from '../common/Icon';

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

const StyledRow = styled(Row)`
  background-color: ${props => props.theme.helLight};
  div:first-child {
    padding-left: 0px;
  }
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
  }
  small {
    font-size: 14px;
  }
  a {
    font-size: 12px;
  }
`;

const Berth = ({ berth, className, onClick, selected }) => (
  <StyledRow className={className}>
    <Col xs={3}>
      <BerthImage src={berth.image_file} alt={berth.name.fi} />
    </Col>
    <Col xs={4}>
      <SummaryWrapper>
        <span>{berth.municipality.fi}</span>
        <strong>{berth.name.fi}</strong>
        <small>{berth.street_address.fi}</small>
        {selected ? (
          <Button color="secondary" onClick={onClick}>
            Valittu
          </Button>
        ) : (
          <Button outline primary="true" onClick={onClick}>
            + Lisää
          </Button>
        )}

        <a href={berth.www_url}>Verkkosivu</a>
      </SummaryWrapper>
    </Col>
    <Col xs={5}>
      <DetailsWrapper>
        <Details available={true}>
          <DetailsValue>{berth.number_of_places}</DetailsValue>
          <DetailsTitle>Paikkoja</DetailsTitle>
        </Details>
        <Details available={berth.mooring}>
          <DetailsIcon name="pole" />
          <DetailsTitle>Kiinnitys</DetailsTitle>
        </Details>
        <Details available={berth.electricity}>
          <DetailsIcon name="plug" />
          <DetailsTitle>Sähkö</DetailsTitle>
        </Details>
        <Details available={berth.water}>
          <DetailsIcon name="waterTap" />
          <DetailsTitle>Vesi</DetailsTitle>
        </Details>
        <Details available={true}>
          <DetailsValue>{berth.maximum_width}</DetailsValue>
          <DetailsTitle>Max. leveys</DetailsTitle>
        </Details>
        <Details available={berth.waste_collection}>
          <DetailsIcon name="trash" />
          <DetailsTitle>Jätehuolto</DetailsTitle>
        </Details>
        <Details available={berth.gate}>
          <DetailsIcon name="fence" />
          <DetailsTitle>Portti</DetailsTitle>
        </Details>
        <Details available={berth.lighting}>
          <DetailsIcon name="streetLight" />
          <DetailsTitle>Valaistus</DetailsTitle>
        </Details>
      </DetailsWrapper>
    </Col>
  </StyledRow>
);

export default Berth;
