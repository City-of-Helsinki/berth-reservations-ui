import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../../../../common/agreement/Agreement';
import ApplicationCode from '../../../../common/applicationCode/ApplicationCode';
import Newsletter from '../../../../common/newsletter/Newsletter';
import BerthOverviewInfo from './BerthOverviewInfo';
import { BerthSwitchState } from '../../../../redux/types';
import { BerthFormValues, Harbors } from '../../types';
import { StepType } from '../../../../common/steps/step/Step';
import { WithBoatType } from '../../../../common/selects/Selects';

type Props = {
  berthSwitch: BerthSwitchState;
  boatTab: string;
  selectedHarbors: Harbors;
  steps: StepType[];
  values?: BerthFormValues;
} & WithBoatType;

const BerthOverview = ({ berthSwitch, boatTab, boatTypes, selectedHarbors, steps, values }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <div className="vene-form__styled-container">
            {values && (
              <BerthOverviewInfo
                berthSwitch={berthSwitch}
                boatTab={boatTab}
                boatTypes={boatTypes}
                selectedHarbors={selectedHarbors}
                steps={steps}
                values={values}
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
