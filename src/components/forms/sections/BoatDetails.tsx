import { get } from 'lodash';
import React from 'react';
import { injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

import NoBoat from '../tabs/NoBoat';
import RegisteredBoat from '../tabs/RegisteredBoat';
import UnRegisteredBoat from '../tabs/UnRegisteredBoat';

import SectionSelector from '../SectionSelector';
import { BigBoatTypeValue, WithBoatType } from '../Selects';

type Props = {
  values: object;
  tab: string;
} & WithBoatType;

const BoatDetails = ({ values, tab, boatTypes }: Props) => {
  const ShowBigShipsForm = get(values, 'boat_type') === BigBoatTypeValue;
  return (
    <div>
      <SectionSelector
        name="boat"
        selected={tab}
        sizes={{
          xs: 12,
          md: 4,
          lg: 3
        }}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            tab: 'registered_boat',
            icon: 'registeredBoat'
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            tab: 'unregistered_boat',
            icon: 'unregisteredBoat'
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            tab: 'no_boat',
            icon: 'noBoat'
          }
        ]}
      />
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            {tab === 'registered_boat' && (
              <RegisteredBoat
                prefix="boat"
                ShowBigShipsForm={ShowBigShipsForm}
                boatTypes={boatTypes}
              />
            )}
            {tab === 'unregistered_boat' && (
              <UnRegisteredBoat prefix="boat" boatTypes={boatTypes} />
            )}
            {tab === 'no_boat' && <NoBoat boatTypes={boatTypes} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default injectIntl(BoatDetails);
