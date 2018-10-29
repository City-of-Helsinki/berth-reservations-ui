// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { get } from 'lodash';

import RegisteredBoat from '../fragments/RegisteredBoat';
import UnRegisteredBoat from '../fragments/UnRegisteredBoat';
import NoBoat from '../fragments/NoBoat';

import FormTypeSelector from '../fragments/FormTypeSelector';

const Content = styled.div``;

type Props = {
  values: any
};

const BoatDetails = ({ values }: Props) => {
  const selected = get(values, ['select_form_type', 'boat_details']);
  return (
    <Content>
      <FormTypeSelector
        name="boat_details"
        selected={selected}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            value: 'registered_boat',
            iconName: 'registeredBoat'
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            value: 'unregistered_boat',
            iconName: 'unregisteredBoat'
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            value: 'no_boat',
            iconName: 'noBoat'
          }
        ]}
      />
      <Container>
        {selected === 'registered_boat' && <RegisteredBoat prefix="registered_boat" />}
        {selected === 'unregistered_boat' && <UnRegisteredBoat prefix="unregistered_boat" />}
        {selected === 'no_boat' && <NoBoat prefix="no_boat" />}
      </Container>
    </Content>
  );
};

export default BoatDetails;
