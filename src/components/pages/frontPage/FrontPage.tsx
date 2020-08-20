import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import Card from '../../common/card/Card';
import Hero from '../../common/hero/Hero';
import KoroSection from '../../layout/koroSection/KoroSection';
import Layout from '../../layout/Layout';

import frontHeroImg from '../../../assets/images/hero_image_front.jpg';

import './frontPage.scss';

type Props = {
  localePush: LocalePush;
} & RouteComponentProps;

const FrontPage = ({ localePush }: Props) => {
  const { t } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0));

  return (
    <Layout>
      <Hero title="page.front.title" bgUrl={frontHeroImg} />
      <KoroSection
        color="fog"
        top
        title="page.front.description.heading"
        description={<p>{t('page.front.description.body')}</p>}
        centered
      >
        <Container className="vene-front-page">
          <Row>
            <div className="vene-front-page__card-wrapper vene-front-page__card-wrapper--wide">
              <Card
                onClick={() => localePush('/berths')}
                btnLabel={t('page.front.card.berths.button_label')}
                title={t('page.front.card.berths.title')}
              >
                <p>{t('page.front.card.berths.description')}</p>
                <a href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/">
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </div>
            <div className="vene-front-page__card-wrapper vene-front-page__card-wrapper--wide">
              <Card
                onClick={() => localePush('/winter-storage')}
                btnLabel={t('page.front.card.winter.button_label')}
                title={t('page.front.card.winter.title')}
              >
                <p>{t('page.front.card.winter.description')}</p>
                <a href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/">
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </div>
            <div className="vene-front-page__card-wrapper vene-front-page__card-wrapper--thin">
              <Card
                onClick={() => localePush('/')}
                btnLabel={t('page.front.card.unmarkedWinter.button_label')}
                title={t('page.front.card.unmarkedWinter.title')}
              >
                <p>{t('page.front.card.unmarkedWinter.description')}</p>
                <a href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/nostojarjestyksessa/">
                  <p>{t('page.front.card.instructions_short')}</p>
                </a>
              </Card>
            </div>
          </Row>
        </Container>
      </KoroSection>
    </Layout>
  );
};

export default withMatchParamsHandlers(FrontPage);
