import { get } from 'lodash';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import StorageMethod from '../fragments/StorageMethod';
import WinterNoBoat from '../tabs/WinterNoBoat';
import WinterRegisteredBoat from '../tabs/WinterRegisteredBoat';
import WinterUnRegisteredBoat from '../tabs/WinterUnRegisteredBoat';

import { WinterStorageMethod } from '../../../__generated__/globalTypes';
import { WinterFormValues } from '../../../types/winterStorage';
import { WithBoatType } from '../Selects';
import SectionSelector, { TypeProps } from './SectionSelector';

type Props = {
  values?: WinterFormValues;
  tab: string;
  requireBoat?: boolean;
  showStorageMethod?: boolean;
} & WithBoatType;

const BoatDetails = ({ values, tab, requireBoat, boatTypes, showStorageMethod = true }: Props) => {
  const showTrailerRegNum = get(values, 'storageMethod') === WinterStorageMethod.ON_TRAILER;
  const getRegistrationTypes = () => {
    const registeredBoat: TypeProps = {
      label: 'form.boat_type_selector.registered_boat.label',
      tab: 'registered-boat',
      icon: 'registeredBoat',
    };
    const unregisteredBoat: TypeProps = {
      label: 'form.boat_type_selector.unregistered_boat.label',
      tab: 'unregistered-boat',
      icon: 'unregisteredBoat',
    };
    const noBoat: TypeProps = {
      label: 'form.boat_type_selector.no_boat.label',
      tab: 'no-boat',
      icon: 'noBoat',
    };

    return requireBoat
      ? [registeredBoat, unregisteredBoat]
      : [registeredBoat, unregisteredBoat, noBoat];
  };

  return (
    <>
      <SectionSelector
        name="boat"
        sizes={{
          xs: 12,
          md: 4,
          lg: 3,
        }}
        types={getRegistrationTypes()}
      />
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            {showStorageMethod && <StorageMethod showTrailerRegNum={showTrailerRegNum} />}
            {tab === 'registered-boat' && <WinterRegisteredBoat boatTypes={boatTypes} />}
            {tab === 'unregistered-boat' && <WinterUnRegisteredBoat boatTypes={boatTypes} />}
            {tab === 'no-boat' && <WinterNoBoat boatTypes={boatTypes} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BoatDetails;
