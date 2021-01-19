import React, { Component } from 'react';
import { Form } from 'react-final-form';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import Icon, { IconNames } from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import ExchangeApplication from '../../forms/fragments/exchangeApplication/ExchangeApplicationContainer';
import NewApplication from '../../forms/fragments/newApplication/NewApplication';
import Layout from '../../../common/layout/Layout';
import SelectionPageLegend from '../../legends/selectionPageLegend/SelectionPageLegend';
import { ApplicationOptions } from '../../../types/applicationType';
import { BerthFormValues, BerthType } from '../../../types/berth';
import { Berths } from '../../berths/types';
import SelectedResource from '../../../common/areaCard/selectedResource/SelectedResource';
import { StepType } from '../../../common/steps/step/Step';

import './selectedBerthPage.scss';

interface BoatInfoForBerths {
  boatType?: string | null;
  width: string;
  length: string;
}

export interface Props extends WithTranslation {
  selectedBerths: Berths;
  boatInfo: BoatInfoForBerths;
  berths?: Berths;
  berthsApplicationType?: string;
  values: BerthFormValues;
  initialValues?: BerthFormValues;
  legend: { title: string; legend: string };
  validSelection: boolean;
  steps: StepType[];
  moveToForm(): void;
  handlePrevious(): void;
  deselectBerth(id: string): void;
  moveUp(id: string): void;
  moveDown(id: string): void;
  submitExchangeForm?(values: BerthFormValues): void;
  filter(resource: BerthType): boolean;
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
      t,
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
      berths,
    } = this.props;

    return (
      <Form
        onSubmit={this.handleSubmitApplication}
        initialValues={initialValues}
        render={({ handleSubmit, invalid }) => (
          <Layout>
            <SelectionPageLegend steps={steps} legend={legend} />
            <BTForm onSubmit={handleSubmit}>
              <Container className="vene-selected-berth-page__wrapper">
                <Row>
                  <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                    {berthsApplicationType &&
                      berths &&
                      (berthsApplicationType === ApplicationOptions.NewApplication ? (
                        <NewApplication />
                      ) : (
                        <ExchangeApplication berths={berths} />
                      ))}

                    <h3>{t('page.berth.selected.title')}</h3>
                    <hr />
                    {Object.values(boatInfo).every((value) => !!value) ? (
                      <Container>
                        <Row>
                          <Col md="5">
                            <span>{t('page.overview.info.boat_type')}</span>
                            <span className="vene-selected-berth-page__boat-value">{boatInfo.boatType}</span>
                          </Col>
                          <Col md="3">
                            <span>{t('page.overview.info.boat_width')}</span>
                            <span className="vene-selected-berth-page__boat-value">{boatInfo.width} m</span>
                          </Col>
                          <Col md="3">
                            <span>{t('page.overview.info.boat_length')}</span>
                            <span className="vene-selected-berth-page__boat-value">{boatInfo.length} m</span>
                          </Col>
                        </Row>
                      </Container>
                    ) : (
                      <div className="vene-selected-berth-page__notice">
                        <Icon name="exclamationCircle" />
                        <LocalizedLink to={steps[0].linkTo || ''}>
                          <span>{t('page.berth.selected.info_text')}</span>
                        </LocalizedLink>
                      </div>
                    )}
                    <hr />
                    {validSelection || (
                      <Alert color="warning">
                        <strong>{t('page.berth.selected.warning.heading')}</strong>
                      </Alert>
                    )}
                    {selectedBerths.size === 0 ? (
                      <Alert color="danger">
                        <strong>{t('page.berth.selected.alert.strong')}</strong>
                        <h2>{t('page.berth.selected.alert.paragraph')}</h2>
                      </Alert>
                    ) : (
                      <div>
                        {selectedBerths.map((resource, index) => {
                          const services: [IconNames, boolean][] = [
                            ['plug', resource.electricity],
                            ['waterTap', resource.water],
                            ['trash', resource.wasteCollection],
                            ['fence', resource.gate],
                            ['streetLight', resource.lighting],
                          ];

                          return (
                            <SelectedResource
                              className="vene-selected-berth-page__berth"
                              title={`${index + 1}. ${resource.name}`}
                              id={resource.id}
                              key={resource.id}
                              services={services}
                              moveUp={index !== 0 ? moveUp : undefined}
                              moveDown={index !== selectedBerths.size - 1 ? moveDown : undefined}
                              handleRemove={deselectBerth}
                              availabilityLevel={resource.availabilityLevel}
                              validationErrMsg={filter(resource) ? undefined : 'error.message.invalid_berth'}
                            />
                          );
                        })}
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
              <div className="vene-selected-berth-page__button-wrapper">
                <Container>
                  <Row>
                    <Col xs={12}>
                      <div className="vene-selected-berth-page__button-wrapper__button-groups">
                        <Button color="link" type="button" onClick={handlePrevious}>
                          <span>{t('form.wizard.button.previous')}</span>
                        </Button>
                        <Button
                          type="submit"
                          outline
                          color="primary"
                          size="lg"
                          disabled={selectedBerths.size === 0 || invalid}
                        >
                          <span>{t('page.berth.selected.submit')}</span>
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

export default withTranslation()(SelectedBerthPage);
