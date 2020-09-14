import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { UnmarkedWinterFormValues, WinterStorageArea } from '../../../types/unmarkedWinterStorage';

import Agreement from '../fragments/Agreement';
import Newsletter from '../fragments/Newsletter';
import UnmarkedWinterOverviewInfo from './UnmarkedWinterOverviewInfo';

import { StepType } from '../../steps/step/Step';
import { WithBoatType } from '../Selects';

type Props = {
  values?: UnmarkedWinterFormValues;
  selectedArea: WinterStorageArea;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const UnmarkedWinterOverview = ({ values, selectedArea, boatTab, boatTypes, steps }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <h3>{t('form.overview.header.unmarked_winter_overview.title')}</h3>
          <p>{t('form.overview.header.unmarked_winter_overview.legend')}</p>
          <div className="vene-form__styled-container">
            {values && (
              <UnmarkedWinterOverviewInfo
                boatTab={boatTab}
                selectedArea={selectedArea}
                steps={steps}
                values={values}
                boatTypes={boatTypes}
              />
            )}
            <h5>{t('form.overview.header.receivable_items.title')}</h5>
            <Newsletter />
            <h3>{t('form.overview.header.agreement.title')}</h3>
            <Agreement
              label={<span>{t('form.overview.field.unmarked_winter.guarantee.label')}</span>}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UnmarkedWinterOverview;