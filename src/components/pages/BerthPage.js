// @flow
import React, { Component } from 'react';
import { get } from 'lodash';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

import Layout from '../layout/Layout';
import Form from '../forms/Form';
import BerthsLegend from '../legends/BerthsLegend';
import BerthsOnMap from '../berths/BerthsOnMap';
import Berths from '../berths/Berths';
import SelectedBerths from '../berths/SelectedBerths';
import TabSelector from '../berths/TabSelector';

const Wrapper = styled.div`
  margin-bottom: 5em;
`;

type Props = any;

class BerthPage extends Component<Props> {
  componentDidMount() {
    const { getBerths, berths } = this.props;
    if (berths.size === 0) {
      getBerths();
    }
  }

  onSubmit = async (values: any) => {
    const { onSubmit, localePush, nextStep } = this.props;
    await onSubmit(values);
    await nextStep();
    localePush('form');
  };

  getFilterByValues = (values: any) => {
    const services = get(values, 'services.service', []);
    const width = get(values, 'boat.width', 0);
    const length = get(values, 'boat.length', 0);
    return (b: any) => {
      const filterByService = services.reduce((acc, cur) => acc && b[cur], true);
      const filterByWidth = b.maximum_width >= width;
      const filterByLenght = b.maximum_length >= length;
      return filterByService && filterByWidth && filterByLenght;
    };
  };

  toggleBerthSelect = (id: string) => {
    const { selectedBerths, selectBerth, deselectBerth } = this.props;
    if (selectedBerths.includes(id)) {
      deselectBerth(id);
    } else {
      selectBerth(id);
    }
  };

  render() {
    const { initialValues, berths, selectedBerths, moveUp, moveDown } = this.props;
    return (
      <Layout>
        <Form initialValues={initialValues} onSubmit={this.onSubmit}>
          {({ values }) => {
            const filter = this.getFilterByValues(values);
            const filtered = berths.filter(filter);
            return (
              <Wrapper>
                <BerthsLegend />
                <TabSelector>
                  <Berths
                    TabHeader={() => <span>Lista</span>}
                    berths={filtered}
                    selected={selectedBerths}
                    onClick={this.toggleBerthSelect}
                  />
                  <BerthsOnMap
                    TabHeader={() => <span>Kartalla</span>}
                    berths={berths}
                    filtered={filtered}
                    selected={selectedBerths}
                    onClick={this.toggleBerthSelect}
                  />
                  <SelectedBerths
                    TabHeader={() => (
                      <span>
                        Valitut:
                        <Badge pill>
                          {selectedBerths.size} / {berths.size}
                        </Badge>
                      </span>
                    )}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    berths={selectedBerths.map(key =>
                      berths.find(berth => key === berth.identifier)
                    )}
                  />
                </TabSelector>
              </Wrapper>
            );
          }}
        </Form>
      </Layout>
    );
  }
}

export default BerthPage;
