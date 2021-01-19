import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../fragments/Agreement';
import ApplicationCode from '../fragments/applicationCode/ApplicationCode';
import Newsletter from '../fragments/Newsletter';
import BerthOverviewInfo from './BerthOverviewInfo';
import { ApplicationState } from '../../../redux/types';
import { BerthFormValues } from '../../../types/berth';
import { Berths } from '../../berths/types';
import { StepType } from '../../../common/steps/step/Step';
import { WithBoatType } from '../Selects';

type Props = {
  values?: BerthFormValues;
  selectedBerths: Berths;
  application?: ApplicationState;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const BerthOverview = ({ values, selectedBerths, application, boatTab, boatTypes, steps }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <div className="vene-form__styled-container">
            {values && (
              <BerthOverviewInfo
                selectedBerths={selectedBerths}
                boatTab={boatTab}
                values={values}
                boatTypes={boatTypes}
                application={application}
                steps={steps}
              />
            )}
            <ApplicationCode />
            <h5>{t('form.overview.header.receivable_items.title')}</h5>
            <Newsletter />
            <h3>{t('form.overview.header.agreement.title')}</h3>
            <Agreement label={<span>{t('form.overview.field.berth.guarantee.label')}</span>} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BerthOverview;
