import React, { Component } from 'react';
import { Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import SelectedBerths from '../../berths/selectedBerths/SelectedBerths';
import SelectedResource from '../../common/areaCard/selectedResource/SelectedResource';
import Icon, { IconNames } from '../../common/Icon';
import LocalizedLink from '../../common/LocalizedLink';
import Layout from '../../layout/Layout';
import SelectedBerthsLegend from '../../legends/selectedBerthsLegend/SelectedBerthsLegend';

import { WinterFormValues, WinterStorageType } from '../../../types/winterStorage';
import { WinterAreas } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import './selectedAreaPage.scss';

interface BoatInfoForWinter {
  width: string;
  length: string;
}

export interface Props {
  selectedAreas: WinterAreas;
  boatInfo: BoatInfoForWinter;
  values: WinterFormValues;
  initialValues?: WinterFormValues;
  legend: { title: string; legend: string };
  validSelection: boolean;
  steps: StepType[];
  moveUp(id: string): void;
  moveDown(id: string): void;
  moveToForm(): void;
  submitExchangeForm?(values: WinterFormValues): void;
  handlePrevious(): void;
  deselectArea(id: string): void;
  filter(resource: WinterStorageType): boolean;
}

class SelectedAreaPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  handleSubmitApplication = (values: WinterFormValues) => {
    if (this.props.submitExchangeForm) {
      this.props.submitExchangeForm(values);
    }
    this.props.moveToForm();
  };

  render() {
    const {
      selectedAreas,
      deselectArea,
      moveUp,
      moveDown,
      initialValues,
      filter,
      boatInfo,
      handlePrevious,
      steps,
      legend,
      validSelection
    } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmitApplication}
        initialValues={initialValues}
        render={({ handleSubmit, invalid }) => (
          <Layout>
            <SelectedBerthsLegend steps={steps} legend={legend} />
            <BTForm onSubmit={handleSubmit}>
              <Container className="vene-selected-area-page__wrapper">
                <Row>
                  <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                    <FormattedMessage tagName="h3" id="page.winter_storage.selected.title" />
                    {Object.values(boatInfo).every(value => !!value) ? (
                      <Container>
                        <Row>
                          <Col md="3">
                            <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
                            <span className="vene-selected-area-page__boat-value">
                              {boatInfo.width} m
                            </span>
                          </Col>

                          <Col md="3">
                            <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
                            <span className="vene-selected-area-page__boat-value">
                              {boatInfo.length} m
                            </span>
                          </Col>
                        </Row>
                      </Container>
                    ) : (
                      <div className="vene-selected-area-page__notice">
                        <Icon name="exclamationCircle" />
                        <LocalizedLink to={steps[0].linkTo || ''}>
                          <FormattedMessage
                            tagName="span"
                            id="page.winter_storage.selected.info_text"
                          />
                        </LocalizedLink>
                      </div>
                    )}
                    <hr />
                    {validSelection || (
                      <Alert color="warning">
                        <FormattedMessage
                          tagName="strong"
                          id="page.winter_storage.selected.warning.heading"
                        />
                      </Alert>
                    )}
                    {selectedAreas.size === 0 ? (
                      <Alert color="danger">
                        <FormattedMessage
                          tagName="strong"
                          id="page.winter_storage.selected.alert.strong"
                        />
                        <FormattedMessage
                          tagName="h2"
                          id="page.winter_storage.selected.alert.paragraph"
                        />
                      </Alert>
                    ) : (
                      <SelectedBerths>
                        {selectedAreas
                          .map((resource, index) => {
                            const services: Array<[IconNames, boolean]> = [
                              ['waterTap', resource.water],
                              ['fence', resource.gate],
                              ['plug', resource.electricity],
                              ['dollyEmpty', resource.summerStorageForTrailers],
                              ['trestle', resource.summerStorageForDockingEquipment],
                              ['tools', resource.repairArea]
                            ];

                            return (
                              <SelectedResource
                                className="vene-selected-berths__berth"
                                title={`${index + 1}. ${resource.name}`}
                                id={resource.id}
                                key={resource.id}
                                services={services}
                                moveUp={index !== 0 ? moveUp : undefined}
                                moveDown={index !== selectedAreas.size - 1 ? moveDown : undefined}
                                handleRemove={deselectArea}
                                availabilityLevel={resource.availabilityLevel}
                                validationErrMsg={
                                  filter(resource) ? undefined : 'error.message.invalid_berth'
                                }
                              />
                            );
                          })
                          .toArray()}
                      </SelectedBerths>
                    )}
                  </Col>
                </Row>
              </Container>
              <div className="vene-selected-area-page__button-wrapper">
                <Container>
                  <Row>
                    <Col xs={12}>
                      <div className="vene-selected-area-page__button-wrapper__button-groups">
                        <Button color="link" type="button" onClick={handlePrevious}>
                          <FormattedMessage id="form.wizard.button.previous" />
                        </Button>
                        <Button
                          type="submit"
                          outline
                          color="primary"
                          size="lg"
                          disabled={selectedAreas.size === 0 || invalid}
                        >
                          <FormattedMessage
                            tagName="span"
                            id="page.winter_storage.selected.submit"
                          />
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

export default SelectedAreaPage;
