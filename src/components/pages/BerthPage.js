// @flow
import React, { Component, Fragment } from 'react';
import { get } from 'lodash';
import Layout from '../layout/Layout';
import Form from '../forms/Form';
import BerthsLegend from '../legends/BerthsLegend';
import BerthsOnMap from '../berths/BerthsOnMap';
import Berths from '../berths/Berths';
import SelectedBerths from '../berths/SelectedBerths';
import TabSelector from '../berths/TabSelector';

type Props = any;

class BerthPage extends Component<Props> {
  componentDidMount() {
    const { getBerths } = this.props;
    getBerths();
  }

  onSubmit = (values: any) => {
    console.log(values);
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
    const { initialValues, berths, selectedBerths } = this.props;
    return (
      <Layout>
        <Form initialValues={initialValues} onSubmit={this.onSubmit}>
          {({ values }) => {
            const filter = this.getFilterByValues(values);
            const filtered = berths.filter(filter);
            return (
              <Fragment>
                <BerthsLegend />
                <TabSelector>
                  <Berths
                    tabHeader="Lista"
                    berths={filtered}
                    selected={selectedBerths}
                    onClick={this.toggleBerthSelect}
                  />
                  <BerthsOnMap tabHeader="Kartalla" berths={filtered} />
                  <SelectedBerths
                    tabHeader={`Valitut ${selectedBerths.size}/${berths.size}`}
                    berths={berths.filter(b => selectedBerths.includes(b.id))}
                  />
                </TabSelector>
              </Fragment>
            );
          }}
        </Form>
      </Layout>
    );
  }
}

export default BerthPage;
