import { FormEvent, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Col, Container, Form as BTForm, Row } from 'reactstrap';
import { List } from 'immutable';

import Icon from '../icon/Icon';
import LocalizedLink from '../localizedLink/LocalizedLink';
import Layout from '../layout/Layout';
import SelectionPageLegend from '../selectionPageLegend/SelectionPageLegend';
import { StepType } from '../steps/step/Step';
import './selectionPage.scss';
import { BoatInfo } from '../../features/berth/selectedBerthPage/types';

export type Props = {
  tContext: 'berth' | 'winter';
  boatInfo?: BoatInfo;
  legend: { title: string; legend: string };
  submitDisabled: boolean;
  SelectionElements: List<JSX.Element>;
  validSelection: boolean;
  isAuthenticated: boolean;
  steps: StepType[];
  handlePrevious(): void;
  handleSubmit(event: FormEvent<HTMLFormElement>): void;
};

const SelectionPageLayout = ({
  tContext: context,
  boatInfo,
  legend,
  steps,
  submitDisabled,
  isAuthenticated,
  handlePrevious,
  handleSubmit,
  SelectionElements,
  validSelection,
}: Props) => {
  const { t } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <Layout>
      <SelectionPageLegend steps={steps} legend={legend} />
      <BTForm onSubmit={handleSubmit} className="vene-selected-page__form">
        <Container className="vene-selected-page__wrapper">
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <h3>{t('page.selected.title', { context })}</h3>
              <hr />
              {boatInfo && Object.values(boatInfo).every((value) => !!value) ? (
                <Container>
                  <Row>
                    {boatInfo?.boatType && (
                      <Col md="5">
                        <span>{t('page.overview.info.boat_type')}</span>
                        <span className="vene-selected-page__boat-value">{boatInfo.boatType}</span>
                      </Col>
                    )}
                    <Col md="3">
                      <span>{t('page.overview.info.boat_width')}</span>
                      <span className="vene-selected-page__boat-value">{boatInfo.width} m</span>
                    </Col>
                    <Col md="3">
                      <span>{t('page.overview.info.boat_length')}</span>
                      <span className="vene-selected-page__boat-value">{boatInfo.length} m</span>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <div className="vene-selected-page__notice">
                  <Icon name="exclamationCircle" />
                  <LocalizedLink to={steps[0].linkTo || ''}>
                    <span>{t('page.selected.info_text')}</span>
                  </LocalizedLink>
                </div>
              )}
              <hr />
              {validSelection || (
                <Alert color="warning">
                  <strong>{t('page.selected.warning.heading', { context })}</strong>
                </Alert>
              )}
              {SelectionElements.size === 0 ? (
                <Alert color="danger">
                  <strong>{t('page.selected.alert.strong', { context })}</strong>
                  <h2>{t('page.selected.alert.paragraph', { context })}</h2>
                </Alert>
              ) : (
                SelectionElements
              )}
            </Col>
          </Row>
          {!isAuthenticated && (
            <Row>
              <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                <hr />
                <h3>Jatka hakemuksen tekoa</h3>
                <p>
                  Venepaikkahakemuksen jättämiseksi pyydämme sinua tunnistautumaan. Tunnistautuminen toimii
                  pankkitunnuksilla tai mobiilivarmenteella. Tunnistautumisen lisäksi sinulla on mahdollisuus hyödyntää
                  Helsinki-profiilia, jolla voit hallita tietojasi useissa Helsingin kaupungin palveluissa.
                </p>
                <p>Jos sinulla on kysyttävää, ota yhteytta venepaikat@hel.fi</p>
              </Col>
            </Row>
          )}
        </Container>

        <div className="vene-selected-page__button-wrapper">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="vene-selected-page__button-wrapper__button-groups">
                  <Button color="link" type="button" onClick={handlePrevious}>
                    <span>{t('form.wizard.button.previous')}</span>
                  </Button>
                  <Button type="submit" outline color="primary" size="lg" disabled={submitDisabled}>
                    <span>{isAuthenticated ? t('page.selected.submit') : t('page.selected.login')}</span>
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

export default SelectionPageLayout;