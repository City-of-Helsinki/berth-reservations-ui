// @flow
import React, { Component, Fragment } from 'react';
import Layout from '../layout/Layout';
import Form from '../forms/Form';
import BerthsLegend from '../legends/BerthsLegend';
import BerthsOnMap from '../berths/BerthsOnMap';
import ListBerths from '../berths/ListBerths';
import SelectedBerths from '../berths/SelectedBerths';

type Props = any;

class BerthPage extends Component<Props> {
  componentDidMount() {
    const { getBerths } = this.props;
    getBerths();
  }

  onSubmit = (values: any) => {
    console.log(values);
  };

  getBerthsByValues = () => {
    const { berths } = this.props;
    return berths;
  };

  render() {
    const { initialValues } = this.props;
    return (
      <Layout>
        <Form initialValues={initialValues} onSubmit={this.onSubmit}>
          {({ values }) => {
            const berths = this.getBerthsByValues();
            return (
              <Fragment>
                <BerthsLegend />
                <pre>{JSON.stringify(values)}</pre>
                <div>
                  <div>Toglle List / Map / Selected</div>
                  <div>
                    <ListBerths berths={berths} />
                    <BerthsOnMap berths={berths} />
                    <SelectedBerths berths={berths} />
                  </div>
                </div>
              </Fragment>
            );
          }}
        </Form>
      </Layout>
    );
  }
}

export default BerthPage;
