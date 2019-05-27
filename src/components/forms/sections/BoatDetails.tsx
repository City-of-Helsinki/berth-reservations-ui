import { get } from 'lodash';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import StorageMethod from '../fragments/StorageMethod';
import NoBoat from '../tabs/NoBoat';
import RegisteredBoat from '../tabs/RegisteredBoat';
import UnRegisteredBoat from '../tabs/UnRegisteredBoat';

import { WinterStorageMethod } from '../../../__generated__/globalTypes';
import { FormMode } from '../../../types/form';
import { BigBoatTypeValue, WithBoatType } from '../Selects';
import SectionSelector from './SectionSelector';

type Props = {
  values: object;
  tab: string;
  mode?: FormMode;
} & WithBoatType;

const BoatDetails = ({ values, tab, mode = FormMode.Berth, boatTypes }: Props) => {
  const ShowBigShipsForm = get(values, 'boatType') === BigBoatTypeValue;
  const showTrailerRegNum = get(values, 'storageMethod') === WinterStorageMethod.ON_TRAILER;

  return (
    <>
      <SectionSelector
        name="boat"
        sizes={{
          xs: 12,
          md: 4,
          lg: 3
        }}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            tab: 'registered-boat',
            icon: 'registeredBoat'
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            tab: 'unregistered-boat',
            icon: 'unregisteredBoat'
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            tab: 'no-boat',
            icon: 'noBoat'
          }
        ]}
      />
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            <Container>
              {mode === FormMode.Winter && <StorageMethod showTrailerRegNum={showTrailerRegNum} />}
            </Container>
            {tab === 'registered-boat' && (
              <RegisteredBoat
                mode={mode}
                ShowBigShipsForm={ShowBigShipsForm}
                boatTypes={boatTypes}
              />
            )}
            {tab === 'unregistered-boat' && <UnRegisteredBoat mode={mode} boatTypes={boatTypes} />}
            {tab === 'no-boat' && <NoBoat mode={mode} boatTypes={boatTypes} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BoatDetails;
