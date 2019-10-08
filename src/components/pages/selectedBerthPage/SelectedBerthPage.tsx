import React, { Component } from 'react';
import { Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import SelectedBerths from '../../berths/selectedBerths/SelectedBerths';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import ExchangeApplication from '../../forms/fragments/exchangeApplication/ExchangeApplicationContainer';
import NewApplication from '../../forms/fragments/newApplication/NewApplication';
import Layout from '../../layout/Layout';
import SelectedBerthsLegend from '../../legends/selectedBerthsLegend/SelectedBerthsLegend';

import { ApplicationOptions } from '../../../types/applicationType';
import { BerthFormValues } from '../../../types/berth';
import { Berths } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

import './selectedBerthPage.scss';

interface BoatInfoForBerths {
  boatType?: string | null;
  width: string;
  length: string;
}

export interface Props {
  selectedBerths: Berths;
  moveToForm: () => {};
  handlePrevious: () => {};
  deselectBerth: Function;
  boatInfo: BoatInfoForBerths;
  moveUp: Function;
  moveDown: Function;
  berths?: Berths;
  berthsApplicationType?: string;
  submitExchangeForm?: Function;
  values: BerthFormValues;
  initialValues?: BerthFormValues;
  legend: { title: string; legend: string };
  validSelection: boolean;
  filter: Function;
  steps: StepType[];
}

class SelectedBerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  handleSubmitApplication = (values: BerthFormValues) => {
    if (this.props.submitExchangeForm) {
      this.props.submitExchangeForm(values);
    }
    this.props.moveToForm();
  };

  render() {
    const {
      berthsApplicationType,
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      initialValues,
      filter,
      boatInfo,
      handlePrevious,
      steps,
      legend,
      validSelection,
      berths
    } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmitApplication}
        initialValues={initialValues}
        render={({ handleSubmit, invalid }) => (
          <Layout>
            <SelectedBerthsLegend steps={steps} legend={legend} />

            <BTForm onSubmit={handleSubmit}>
              <Container className="vene-berth-page-selected__wrapper">
                <Row>
                  <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                    {berthsApplicationType &&
                      berths &&
                      (berthsApplicationType === ApplicationOptions.NewApplication ? (
                        <NewApplication />
                      ) : (
                        <ExchangeApplication berths={berths} />
                      ))}

                    <FormattedMessage tagName="h3" id="page.berth.selected.title" />
                    <hr />
                    {Object.values(boatInfo).every(value => !!value) ? (
                      <Container>
                        <Row>
                          <Col md="5">
                            <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
                            <span className="vene-berth-page-selected__boat-value">
                              {boatInfo.boatType}
                            </span>
                          </Col>
                          <Col md="3">
                            <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
                            <span className="vene-berth-page-selected__boat-value">
                              {boatInfo.width} m
                            </span>
                          </Col>
                          <Col md="3">
                            <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
                            <span className="vene-berth-page-selected__boat-value">
                              {boatInfo.length} m
                            </span>
                          </Col>
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
                    {selectedBerths.size === 0 ? (
                      <Alert color="danger">
                        <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
                        <FormattedMessage tagName="h2" id="page.berth.selected.alert.paragraph" />
                      </Alert>
                    ) : (
                      <SelectedBerths
                        moveUp={moveUp}
                        moveDown={moveDown}
                        deselectBerth={deselectBerth}
                        berthValidator={filter}
                        resources={selectedBerths}
                      />
                    )}
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
