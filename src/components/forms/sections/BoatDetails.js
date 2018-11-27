// @flow

import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { injectIntl } from 'react-intl';

import RegisteredBoat from '../tabs/RegisteredBoat';
import UnRegisteredBoat from '../tabs/UnRegisteredBoat';
import NoBoat from '../tabs/NoBoat';

import SectionSelector from '../SectionSelector';
import { BigBoatTypeValue, type WithBoatType } from '../Selects';

const Content = styled.div``;

type Props = {
  values: Object,
  tab: string
} & WithBoatType;

const BoatDetails = ({ values, tab, boatTypes }: Props) => {
  const ShowBigShipsForm = get(values, 'boat.type') === BigBoatTypeValue;
  return (
    <Content>
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
      {tab === 'registered_boat' && (
        <RegisteredBoat prefix="boat" ShowBigShipsForm={ShowBigShipsForm} boatTypes={boatTypes} />
      )}
      {tab === 'unregistered_boat' && <UnRegisteredBoat prefix="boat" boatTypes={boatTypes} />}
      {tab === 'no_boat' && <NoBoat prefix="boat" boatTypes={boatTypes} />}
    </Content>
  );
};

export default injectIntl(BoatDetails);
