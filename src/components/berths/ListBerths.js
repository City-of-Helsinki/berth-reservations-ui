import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const Berth = styled.div`
  display: flex;
  img {
  }
`;

const Wrapper = styled.div`
  ${Berth} + ${Berth} {
    margin-bottom: 1em;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ({ berths }) => (
  <Wrapper>
    {berths.map(berth => (
      <Berth key={berth.id}>
        <div>
          <strong>{berth.municipality.fi}</strong>
          <h3>{berth.name.fi}</h3>
          <span>{berth.street_address.fi}</span>
          <button type="button">Lisää</button>
          <a href={berth.www_url}>Verkkosivu</a>
        </div>
        <DetailsWrapper>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Paikkoja</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Kiinnitys</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Sähkö</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Vesi</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Max. leveys</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Jätehuolto</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Portti</span>
          </Details>
          <Details>
            <Icon name="globe" width="10px" />
            <span>Valaistus</span>
          </Details>
        </DetailsWrapper>
      </Berth>
    ))}
  </Wrapper>
);
