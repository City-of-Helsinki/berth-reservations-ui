import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

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
            <Col md="6" xs="12" className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/berths')}
                btnLabel="page.front.card.berths.button_label"
                title="page.front.card.berths.title"
              >
                <p>{t('page.front.card.berths.description')}</p>
                <a href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/">
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </Col>
            <Col md="6" xs="12" className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/winter-storage')}
                btnLabel="page.front.card.winter.button_label"
                title="page.front.card.winter.title"
              >
                <p>{t('page.front.card.winter.description')}</p>
                <a href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/">
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </KoroSection>
    </Layout>
  );
};

export default withMatchParamsHandlers(FrontPage);
