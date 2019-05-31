import { get } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import { getBerthFilterByValues } from '../../../../utils/berths';
import SelectedBerths from '../../../berths/SelectedBerths';
import Icon from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import Layout from '../../../layout/Layout';
import SelectedBerthsLegend from '../../../legends/BerthLegend/SelectedBerthsLegend';

import { ApplicationOptions } from '../../../../types/applicationType';
import { BoatTypes } from '../../../../types/boatTypes';
import { SelectedServices } from '../../../../types/services';
import { getHarbors } from '../../../../utils/harborUtils';
import { Berths } from '../../../berths/types';

import { Form } from 'react-final-form';

import ExchangeApplication from '../../../forms/fragments/exchangeApplication/ExchangeApplication';
import NewApplication from '../../../forms/fragments/newApplication/NewApplication';

import { BoatTypesBerthsQuery } from '../../../../utils/__generated__/BoatTypesBerthsQuery';
import './SelectedBerthPage.scss';

export interface Props {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  moveToForm: () => {};
  handlePrevious: () => {};
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  boatTypes: BoatTypes;
  data: BoatTypesBerthsQuery | null;
  selectedApplicationType?: string;
  submitExchangeForm?: Function;
  values: {};
  initialValues: {};
  legend: { title: string; legend: string };
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
}

class SelectedBerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  handleSubmitApplication = (values: any) => {
    if (this.props.submitExchangeForm) {
      this.props.submitExchangeForm(values);
    }
    this.props.moveToForm();
  };

  render() {
    const {
      selectedApplicationType,
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      values,
      selectedServices,
      initialValues,
      data,
      boatTypes,
      handlePrevious,
      steps,
      legend
    } = this.props;
    const type = get(values, 'boatType');
    const width = get(values, 'boatWidth');
    const length = get(values, 'boatLength');
    const filter = getBerthFilterByValues(values, selectedServices);
    // TODO: fix types
    // @ts-ignore
    const normalizedHarbors = getHarbors(data && data.harbors ? data.harbors.edges : []);

    const boatType = boatTypes && type ? boatTypes.find(t => !!t && t.id === type) : undefined;
    const validSelection = selectedBerths.every(filter);

    return (
      <Form
        onSubmit={formValues => this.handleSubmitApplication(formValues)}
        initialValues={initialValues}
        render={({ handleSubmit, invalid }) => (
          <Layout>
            <SelectedBerthsLegend steps={steps} legend={legend} />

            <BTForm onSubmit={handleSubmit}>
              <Container className="vene-berth-page-selected__wrapper">
                <Row>
                  <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                    {selectedApplicationType && (
                      <div className="vene-berth-page-selected__application">
                        {selectedApplicationType === ApplicationOptions.NewApplication ? (
                          <NewApplication />
                        ) : (
                          <ExchangeApplication harbors={normalizedHarbors} />
                        )}
                      </div>
                    )}

                    <FormattedMessage tagName="h3" id="page.berth.selected.title" />
                    <hr />
                    {boatType ? (
                      <Container>
                        <Row>
                          {type && (
                            <Col md="5">
                              <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
                              <span className="vene-berth-page-selected__boat-value">
                                {boatType.name}
                              </span>
                            </Col>
                          )}
                          {width && (
                            <Col md="3">
                              <FormattedMessage tagName="span" id="page.overview.info.boat_width" />
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
                        <LocalizedLink to={steps[0].linkTo || ''}>
                          <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
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
                        <Button color="link" type="button" onClick={handlePrevious}>
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
  }
}

export default SelectedBerthPage;
