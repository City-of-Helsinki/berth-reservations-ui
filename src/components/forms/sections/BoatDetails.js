// @flow

import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { injectIntl } from 'react-intl';

import RegisteredBoat from '../tabs/RegisteredBoat';
import UnRegisteredBoat from '../tabs/UnRegisteredBoat';
import NoBoat from '../tabs/NoBoat';

import SectionSelector from '../SectionSelector';
import { BigBoatTypeValue } from '../Fields';

const Content = styled.div``;

type Props = {
  values: Object,
  tab: string
};

const BoatDetails = ({ values, tab }: Props) => {
  const ShowBigShipsForm = get(values, 'boat.type') === BigBoatTypeValue;
  return (
    <Content>
      <SectionSelector
        name="boat"
        selected={tab}
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
      {tab === 'registered_boat' && (
        <RegisteredBoat prefix="boat" ShowBigShipsForm={ShowBigShipsForm} />
      )}
      {tab === 'unregistered_boat' && <UnRegisteredBoat prefix="boat" />}
      {tab === 'no_boat' && <NoBoat prefix="boat" />}
    </Content>
  );
};

export default injectIntl(BoatDetails);
