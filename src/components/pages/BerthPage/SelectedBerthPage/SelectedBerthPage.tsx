import { get } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import { getBerthFilterByValues } from '../../../../utils/berths';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../../utils/graphql';
import SelectedBerths from '../../../berths/SelectedBerths';
import Icon from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import Layout from '../../../layout';
import SelectedBerthsLegend from '../../../legends/BerthLegend/SelectedBerthLegend';
import BoatsBerthsQuery from '../../../query/BoatsBerthsQuery';

import { SelectedServices } from '../../../../types/services';
import { getHarbors } from '../../../../utils/harborUtils';
import { Berths } from '../../../berths/types';

import { Form } from 'react-final-form';

import { APPLICATION_OPTIONS } from '../../../../constants/ApplicationConstants';
import ExchangeApplication from '../../../forms/fragments/exchangeApplication/ExchangeApplication';
import NewApplication from '../../../forms/fragments/newApplication/NewApplication';

import './SelectedBerthPage.scss';

export interface Props {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
  selectedApplicationType: string;
  submitExchangeForm: Function;
  values: {};
  initialValues: {};
}

class SelectedBerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/form/registered_boat');
  };

  handlePrevious = async () => {
    const { localePush } = this.props;
    await localePush('/berths');
  };

  handleSubmitApplication = (values: any) => {
    this.props.submitExchangeForm(values);
    this.moveToForm();
  };

  render() {
    const {
      selectedApplicationType,
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      selectedServices,
      initialValues
    } = this.props;
    const type = get(this.props.values, 'boatType');
    const width = get(this.props.values, 'boatWidth');
    const length = get(this.props.values, 'boatLength');
    const filter = getBerthFilterByValues(this.props.values, selectedServices);

    return (
      <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
        {({
          loading,
          // error, TODO: handle errors
          data: { boatTypes, harbors } = { boatTypes: [], harbors: { edges: [] } }
        }) => {
          const normalizedHarbors = getHarbors(harbors ? harbors.edges : []);

          const boatType = !loading && type ? boatTypes.find(t => t.id === type) : undefined;

          const validSelection = selectedBerths.every(filter);

          return (
            <Form
              onSubmit={values => this.handleSubmitApplication(values)}
              initialValues={initialValues}
              render={({ handleSubmit, invalid }) => (
                <Layout>
                  <SelectedBerthsLegend />

                  <BTForm onSubmit={handleSubmit}>
                    <Container className="vene-berth-page-selected__wrapper">
                      <Row>
                        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                          <div className="vene-berth-page-selected__application">
                            {selectedApplicationType === APPLICATION_OPTIONS.NEW_APPLICATION ? (
                              <NewApplication />
                            ) : (
                              <ExchangeApplication harbors={normalizedHarbors} />
                            )}
                          </div>

                          <FormattedMessage tagName="h1" id="page.berth.selected.title" />
                          <hr />
                          {boatType ? (
                            <Container>
                              <Row>
                                {type && (
                                  <Col md="5">
                                    <FormattedMessage
                                      tagName="span"
                                      id="page.overview.info.boat_type"
                                    />
                                    :
                                    <span className="vene-berth-page-selected__boat-value">
                                      {boatType.name}
                                    </span>
                                  </Col>
                                )}
                                {width && (
                                  <Col md="3">
                                    <FormattedMessage
                                      tagName="span"
                                      id="page.overview.info.boat_width"
                                    />
                                    :
                                    <span className="vene-berth-page-selected__boat-value">
                                      {width} m
                                    </span>
                                  </Col>
                                )}
                                {length && (
                                  <Col md="3">
                                    <FormattedMessage
                                      tagName="span"
                                      id="page.overview.info.boat_length"
                                    />
                                    :
                                    <span className="vene-berth-page-selected__boat-value">
                                      {length} m
                                    </span>
                                  </Col>
                                )}
                              </Row>
                            </Container>
                          ) : (
                            <div className="vene-berth-page-selected__notice">
                              <Icon name="exclamationCircle" />
                              <LocalizedLink to="">
                                <FormattedMessage
                                  tagName="span"
                                  id="page.berth.selected.info_text"
                                />
                              </LocalizedLink>
                            </div>
                          )}
                          <hr />
                          {validSelection || (
                            <Alert color="warning">
                              <FormattedMessage
                                tagName="strong"
                                id="page.berth.selected.warning.heading"
                              />
                            </Alert>
                          )}
                          <SelectedBerths
                            moveUp={moveUp}
                            moveDown={moveDown}
                            deselectBerth={deselectBerth}
                            berthValidator={filter}
                            berths={selectedBerths}
                          />
                        </Col>
                      </Row>
                    </Container>
                    <div className="vene-berth-page-selected__button-wrapper">
                      <Container>
                        <Row>
                          <Col xs={12}>
                            <div className="vene-berth-page-selected__button-wrapper__button-groups">
                              <Button color="link" type="button" onClick={this.handlePrevious}>
                                <FormattedMessage id="form.wizard.button.previous" />
                              </Button>
                              <Button
                                type="submit"
                                outline
                                color="primary"
                                size="lg"
                                disabled={selectedBerths.size === 0 || invalid}
                              >
                                <FormattedMessage tagName="span" id="page.berth.selected.submit" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </BTForm>
                </Layout>
              )}
            />
          );
        }}
      </BoatsBerthsQuery>
    );
  }
}

export default SelectedBerthPage;
