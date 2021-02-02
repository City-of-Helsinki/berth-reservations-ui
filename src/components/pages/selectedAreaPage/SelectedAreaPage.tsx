import React, { useLayoutEffect } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import SelectedResourceContainer from '../../../common/areaCard/selectedResource/SelectedResourceContainer';
import Icon, { IconNames } from '../../../common/icon/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import Layout from '../../../common/layout/Layout';
import SelectionPageLegend from '../../legends/selectionPageLegend/SelectionPageLegend';
import { WinterAreas, WinterFormValues, WinterStorageType } from '../../../features/winterStorageApplication/types';
import { StepType } from '../../../common/steps/step/Step';
import './selectedAreaPage.scss';

type BoatInfoForWinter = {
  length: string;
  width: string;
};

export type Props = {
  boatInfo: BoatInfoForWinter;
  initialValues?: WinterFormValues;
  legend: { title: string; legend: string };
  selectedAreas: WinterAreas;
  steps: StepType[];
  validSelection: boolean;
  values: WinterFormValues;
  deselectArea(id: string): void;
  filter(resource: WinterStorageType): boolean;
  handlePrevious(): void;
  moveDown(id: string): void;
  moveToForm(): void;
  moveUp(id: string): void;
  submitExchangeForm?(values: WinterFormValues): void;
};

const SelectedAreaPage = ({
  boatInfo,
  deselectArea,
  filter,
  handlePrevious,
  initialValues,
  legend,
  moveDown,
  moveToForm,
  moveUp,
  selectedAreas,
  steps,
  submitExchangeForm,
  validSelection,
}: Props) => {
  const { t } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0));

  const handleSubmitApplication = (values: WinterFormValues) => {
    if (submitExchangeForm) {
      submitExchangeForm(values);
    }
    moveToForm();
  };

  return (
    <Form
      onSubmit={handleSubmitApplication}
      initialValues={initialValues}
      render={({ handleSubmit, invalid }) => (
        <Layout>
          <SelectionPageLegend steps={steps} legend={legend} />
          <BTForm onSubmit={handleSubmit}>
            <Container className="vene-selected-area-page__wrapper">
              <Row>
                <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                  <h3>{t('page.winter_storage.selected.title')}</h3>
                  {Object.values(boatInfo).every((value) => !!value) ? (
                    <Container>
                      <Row>
                        <Col md="3">
                          <span>{t('page.overview.info.boat_width')}</span>
                          <span className="vene-selected-area-page__boat-value">{boatInfo.width} m</span>
                        </Col>

                        <Col md="3">
                          <span>{t('page.overview.info.boat_length')}</span>
                          <span className="vene-selected-area-page__boat-value">{boatInfo.length} m</span>
                        </Col>
                      </Row>
                    </Container>
                  ) : (
                    <div className="vene-selected-area-page__notice">
                      <Icon name="exclamationCircle" />
                      <LocalizedLink to={steps[0].linkTo || ''}>
                        <span>{t('page.winter_storage.selected.info_text')}</span>
                      </LocalizedLink>
                    </div>
                  )}
                  <hr />
                  {validSelection || (
                    <Alert color="warning">
                      <strong>{t('page.winter_storage.selected.warning.heading')}</strong>
                    </Alert>
                  )}
                  {selectedAreas.size === 0 ? (
                    <Alert color="danger">
                      <strong>{t('page.winter_storage.selected.alert.strong')}</strong>
                      <h2>{t('page.winter_storage.selected.alert.paragraph')}</h2>
                    </Alert>
                  ) : (
                    <div>
                      {selectedAreas.map((resource, index) => {
                        const services: [IconNames, boolean][] = [
                          ['waterTap', resource.water],
                          ['fence', resource.gate],
                          ['plug', resource.electricity],
                          ['dollyEmpty', resource.summerStorageForTrailers],
                          ['trestle', resource.summerStorageForDockingEquipment],
                          ['tools', resource.repairArea],
                        ];

                        return (
                          <SelectedResourceContainer
                            className="vene-selected-area-page__area"
                            title={`${index + 1}. ${resource.name}`}
                            id={resource.id}
                            key={resource.id}
                            services={services}
                            moveUp={index !== 0 ? moveUp : undefined}
                            moveDown={index !== selectedAreas.size - 1 ? moveDown : undefined}
                            handleRemove={deselectArea}
                            availabilityLevel={resource.availabilityLevel}
                            validationErrMsg={filter(resource) ? undefined : 'error.message.invalid_area'}
                          />
                        );
                      })}
                    </div>
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
                        <span>{t('form.wizard.button.previous')}</span>
                      </Button>
                      <Button
                        type="submit"
                        outline
                        color="primary"
                        size="lg"
                        disabled={selectedAreas.size === 0 || invalid}
                      >
                        <span>{t('page.winter_storage.selected.submit')}</span>
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
};

export default SelectedAreaPage;
