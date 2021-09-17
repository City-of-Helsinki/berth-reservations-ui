import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { LocalePush, withMatchParamsHandlers } from '../../common/utils/container';
import Card from '../../common/card/Card';
import Hero from '../../common/hero/Hero';
import KoroSection from '../../common/layout/koroSection/KoroSection';
import Layout from '../../common/layout/Layout';
import frontHeroImg from '../../assets/images/hero_image_front.jpg';

import './frontPage.scss';

type Props = {
  localePush: LocalePush;
} & RouteComponentProps;

const FrontPage = ({ localePush }: Props) => {
  const { t } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

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
          <Row sm="1" md="2" lg="3">
            <Col className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/berths')}
                btnLabel={t('page.front.card.berths.button_label')}
                title={t('page.front.card.berths.title')}
              >
                <p>{t('page.front.card.berths.description')}</p>
                <a
                  href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </Col>
            <Col className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/winter-storage')}
                btnLabel={t('page.front.card.winter.button_label')}
                title={t('page.front.card.winter.title')}
              >
                <p>{t('page.front.card.winter.description')}</p>
                <a
                  href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </Col>
            <Col className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/unmarked-winter-storage')}
                btnLabel={t('page.front.card.unmarked_winter.button_label')}
                title={t('page.front.card.unmarked_winter.title')}
              >
                <p>{t('page.front.card.unmarked_winter.description')}</p>
                <a
                  href="https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/nostojarjestyksessa/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>{t('page.front.card.instructions_short')}</p>
                </a>
              </Card>
            </Col>
            <Col className="vene-front-page__card-wrapper">
              <Card
                btnLabel={t('page.front.card.trailer.button_label')}
                title={t('page.front.card.trailer.title')}
                href={process.env.REACT_APP_TRAILER_PAYMENT_LINK ?? '#'}
                rel="noopener noreferrer nofollow"
              >
                <p>{t('page.front.card.trailer.description')}</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </KoroSection>
    </Layout>
  );
};

export default withMatchParamsHandlers(FrontPage);
