// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import SelectedBerths from '../berths/SelectedBerths';
import SelectedBerthsLegend from '../legends/SelectedBerthsLegend';

import Layout from '../layout/Layout';

const Wrapper = styled.div`
  margin-bottom: 5em;
`;

type Props = any;

class BerthPage extends Component<Props> {
  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/form/registered_boat');
  };

  render() {
    const { berths, selectedBerths, deselectBerth, moveUp, moveDown } = this.props;
    return (
      <Layout>
        <Wrapper>
          <SelectedBerthsLegend />

          <SelectedBerths
            progress={this.moveToForm}
            moveUp={moveUp}
            moveDown={moveDown}
            deselectBerth={deselectBerth}
            berths={selectedBerths.map(key => berths.find(berth => key === berth.identifier))}
          />
        </Wrapper>
      </Layout>
    );
  }
}

export default BerthPage;
