import { Trans, useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import Agreement from '../../../../common/agreement/Agreement';
import ApplicationCode from '../../../../common/applicationCode/ApplicationCode';
import Newsletter from '../../../../common/newsletter/Newsletter';
import WinterOverviewInfo from './WinterOverviewInfo';
import { WinterStorageAreas, WinterFormValues } from '../../types';
import { StepType } from '../../../../common/steps/step/Step';
import { WithBoatType } from '../../../../common/selects/Selects';

type Props = {
  values?: WinterFormValues;
  selectedAreas: WinterStorageAreas;
  boatTab: string;
  steps: StepType[];
} & WithBoatType;

const getWinterStorageRulesLink = (language: string) => {
  switch (language) {
    case 'fi':
      return 'https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/veneily/veneiden-talvisailytys';
    case 'sv':
      return 'https://www.hel.fi/sv/kultur-och-fritid/friluftsliv-parker-och-naturomraden/batliv/vinterupplaggning-av-batar';
    case 'en':
      return 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/boating/winter-storage-of-boats';
  }
};

const WinterOverview = ({ values, selectedAreas, boatTab, boatTypes, steps }: Props) => {
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

export default WinterOverview;
