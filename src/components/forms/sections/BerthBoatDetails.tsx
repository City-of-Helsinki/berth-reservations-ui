import get from 'lodash/get';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import BerthNoBoat from '../tabs/BerthNoBoat';
import BerthRegisteredBoat from '../tabs/BerthRegisteredBoat';
import BerthUnregisteredBoat from '../tabs/BerthUnregisteredBoat';
import SectionSelector from './sectionSelector/SectionSelector';
import { BerthFormValues } from '../../../features/berthApplication/types';
import { BigBoatTypeValue, WithBoatType } from '../Selects';

type Props = {
  values?: BerthFormValues;
  tab: string;
} & WithBoatType;

const BoatDetails = ({ values, tab, boatTypes }: Props) => {
  const showBigShipsForm = get(values, 'boatType') === BigBoatTypeValue;
  return (
    <>
      <SectionSelector
        name="boat"
        sizes={{
          xs: 12,
          md: 4,
          lg: 3,
        }}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            tab: 'registered-boat',
            icon: 'registeredBoat',
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            tab: 'unregistered-boat',
            icon: 'unregisteredBoat',
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            tab: 'no-boat',
            icon: 'noBoat',
          },
        ]}
      />
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            {tab === 'registered-boat' && (
              <BerthRegisteredBoat showBigShipsForm={showBigShipsForm} boatTypes={boatTypes} />
            )}
            {tab === 'unregistered-boat' && <BerthUnregisteredBoat boatTypes={boatTypes} />}
            {tab === 'no-boat' && <BerthNoBoat boatTypes={boatTypes} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BoatDetails;
