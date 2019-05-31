import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import SelectedBerths from '../../berths/selectedBerths/SelectedBerths';
import Icon from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import Layout from '../../layout/Layout';
import SelectedBerthsLegend from '../../legends/BerthLegend/SelectedBerthsLegend';

import { ApplicationOptions } from '../../../types/applicationType';
import { Berths } from '../../berths/types';

import { Form } from 'react-final-form';

import ExchangeApplication from '../../forms/fragments/exchangeApplication/ExchangeApplication';
import NewApplication from '../../forms/fragments/newApplication/NewApplication';

import { HarborOptions } from '../../../types/harborOptionsTypes';

import './selectedBerthPage.scss';

interface BoatInfoForBerths {
  boatType: string;
  width: string;
  length: string;
}
interface BoatInfoForWinter {
  width: string;
  length: string;
}

export interface Props {
  selectedBerths: Berths;
  moveToForm: () => {};
  handlePrevious: () => {};
  deselectBerth: Function;
  boatInfo: BoatInfoForBerths | BoatInfoForWinter;
  moveUp: Function;
  moveDown: Function;
  harbors?: HarborOptions;
  selectedApplicationType?: string;
  submitExchangeForm?: Function;
  values: {};
  initialValues: {};
  legend: { title: string; legend: string };
  validSelection: boolean;
  filter: Function;
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
      initialValues,
      filter,
      boatInfo,
      handlePrevious,
      steps,
      legend,
      validSelection,
      harbors
    } = this.props;
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
                    {selectedApplicationType && harbors && (
                      <div className="vene-berth-page-selected__application">
                        {selectedApplicationType === ApplicationOptions.NewApplication ? (
                          <NewApplication />
                        ) : (
                          <ExchangeApplication harbors={harbors} />
                        )}
                      </div>
                    )}

                    <FormattedMessage tagName="h3" id="page.berth.selected.title" />
                    <hr />
                    {Object.values(boatInfo).every(value => !!value) ? (
                      <Container>
                        <Row>
                          {boatInfo.hasOwnProperty('boatType') && (
                            <Col md="5">
                              <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
                              <span className="vene-berth-page-selected__boat-value">
                                {(boatInfo as BoatInfoForBerths).boatType}
                              </span>
                            </Col>
                          )}
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
