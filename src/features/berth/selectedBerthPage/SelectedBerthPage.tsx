import React, { FormEvent, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';

import Icon, { IconNames } from '../../../common/icon/Icon';
import LocalizedLink from '../../../common/localizedLink/LocalizedLink';
import { BerthSwitchProps } from '../../../redux/types';
import NewApplication from './newApplication/NewApplication';
import Layout from '../../../common/layout/Layout';
import SelectionPageLegend from '../../../common/selectionPageLegend/SelectionPageLegend';
import { ApplicationOptions } from '../../../common/types/applicationType';
import { Harbors, HarborType } from '../types';
import SelectedResourceContainer from '../../../common/areaCard/selectedResource/SelectedResourceContainer';
import SwitchApplication from './switchApplication/SwitchApplication';
import { StepType } from '../../../common/steps/step/Step';
import './selectedBerthPage.scss';
import { BoatInfo, HarborOption, ReasonOption } from './types';

export type Props = {
  applicationType?: string;
  reasonOptions: ReasonOption[];
  boatInfo?: BoatInfo;
  harbors?: Harbors;
  harborOptions: HarborOption[];
  invalid: boolean;
  selectedHarbors: Harbors;
  validSelection: boolean;
  values: BerthSwitchProps;
  change<F extends 'berth' | 'pier' | 'harbor'>(name: F, value: BerthSwitchProps[F]): void;
  deselectBerth(id: string): void;
  filter(resource: HarborType): boolean;
  handlePrevious(): void;
  handleSubmit(event: FormEvent<HTMLFormElement>): void;
  moveDown(id: string): void;
  moveUp(id: string): void;
};

const steps: StepType[] = [
  {
    completed: true,
    current: false,
    label: 'site.steps.berths',
    linkTo: `berths`,
  },
  {
    completed: false,
    current: true,
    label: 'site.steps.selected_berths',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.boat_information',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.applicant',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.send_application',
    linkTo: '',
  },
];

const SelectedBerthPage = ({
  applicationType,
  reasonOptions,
  boatInfo,
  change,
  deselectBerth,
  filter,
  handlePrevious,
  handleSubmit,
  harbors,
  harborOptions,
  invalid,
  moveDown,
  moveUp,
  selectedHarbors,
  validSelection,
  values,
}: Props) => {
  const { t } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <Layout>
      <SelectionPageLegend
        steps={steps}
        legend={{
          title: 'legend.selected_berths.title',
          legend: 'legend.selected_berths.legend',
        }}
      />
      <BTForm onSubmit={handleSubmit}>
        <Container className="vene-selected-berth-page__wrapper">
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              {applicationType &&
                harbors &&
                (applicationType === ApplicationOptions.NewApplication ? (
                  <NewApplication />
                ) : (
                  <SwitchApplication
                    values={values}
                    harborOptions={harborOptions}
                    reasonOptions={reasonOptions}
                    change={change}
                  />
                ))}

              <h3>{t('page.berth.selected.title')}</h3>
              <hr />

              {boatInfo ? (
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

              {selectedHarbors.size === 0 ? (
                <Alert color="danger">
                  <strong>{t('page.berth.selected.alert.strong')}</strong>
                  <h2>{t('page.berth.selected.alert.paragraph')}</h2>
                </Alert>
              ) : (
                <div>
                  {selectedHarbors.map((resource, index) => {
                    const services: [IconNames, boolean][] = [
                      ['plug', resource.electricity],
                      ['waterTap', resource.water],
                      ['trash', resource.wasteCollection],
                      ['fence', resource.gate],
                      ['streetLight', resource.lighting],
                    ];

                    return (
                      <SelectedResourceContainer
                        className="vene-selected-berth-page__berth"
                        title={`${index + 1}. ${resource.name}`}
                        id={resource.id}
                        key={resource.id}
                        services={services}
                        moveUp={index !== 0 ? moveUp : undefined}
                        moveDown={index !== selectedHarbors.size - 1 ? moveDown : undefined}
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
                    disabled={
                      selectedHarbors.size === 0 ||
                      invalid ||
                      (applicationType === ApplicationOptions.SwitchApplication && !values.berth)
                    }
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
  );
};

export default SelectedBerthPage;
