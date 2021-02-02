import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../fragments/Agreement';
import ApplicationCode from '../fragments/applicationCode/ApplicationCode';
import Newsletter from '../fragments/Newsletter';
import WinterOverviewInfo from './WinterOverviewInfo';
import { ApplicationState } from '../../../redux/types';
import { WinterFormValues } from '../../../features/winterStorageApplication/types';
import { WinterAreas } from '../../berths/types';
import { StepType } from '../../../common/steps/step/Step';
import { WithBoatType } from '../Selects';

type Props = {
  values?: WinterFormValues;
  selectedAreas: WinterAreas;
  application?: ApplicationState;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const getWinterStorageRulesLink = (language: string) => {
  switch (language) {
    case 'fi':
      return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/talvisailytyssaannot/';
    case 'sv':
      return 'https://www.hel.fi/helsinki/sv/kultur-och-fritid/friluftsliv/botliv/vinterupplaggning/anvisningar-for-forvaringen-av-batar-och-upplaggningstillbehor/';
    case 'en':
      return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/talvisailytyssaannot/';
  }
};

const Submit = ({ values, selectedAreas, application, boatTab, boatTypes, steps }: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <div className="vene-form__styled-container">
            {values && (
              <WinterOverviewInfo
                selectedAreas={selectedAreas}
                boatTab={boatTab}
                values={values}
                boatTypes={boatTypes}
                steps={steps}
              />
            )}
            <ApplicationCode />
            <h5>{t('form.overview.header.receivable_items.title')}</h5>
            <Newsletter />
            <h3>{t('form.overview.header.agreement.title')}</h3>
            <Agreement
              label={
                <span>
                  <Trans i18nKey={'form.overview.field.winter.guarantee.label'}>
                    A
                    <a href={getWinterStorageRulesLink(language)} target="_blank" rel="noopener noreferrer">
                      hel.fi
                    </a>
                    a.
                  </Trans>
                </span>
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Submit;
