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
  const { t, i18n } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const trailerPaymentURL = new URL(process.env.REACT_APP_TRAILER_PAYMENT_URL ?? window.location.href);
  trailerPaymentURL.searchParams.set('language', i18n.language);

  return (
    <Layout>
      <Hero title="page.front.title" bgUrl={frontHeroImg} />
      {/* The service is shutting down, so we are not using the title and description.
      They are explicitly set as undefined, so the properties are easily seeable for devs, 
      until we have a good fitting text to show there.
      Ref. https://helsinkisolutionoffice.atlassian.net/browse/VEN-1596. */}
      <KoroSection color="fog" top title={undefined} description={undefined} centered>
        <Container className="vene-front-page">
          <Row sm="1" md="2" lg="2">
            <Col className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/berths')}
                btnLabel={t('page.front.card.berths.button_label')}
                title={t('page.front.card.berths.title')}
              >
                <p>{t('page.front.card.berths.description')}</p>
                <a
                  href="https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/veneily/vuokrattavat-venepaikat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>{t('page.front.card.instructions')}</p>
                </a>
              </Card>
            </Col>
            <Col className="vene-front-page__card-wrapper">
              <Card
                btnLabel={t('page.front.card.trailer.button_label')}
                title={t('page.front.card.trailer.title')}
                href={trailerPaymentURL.href}
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
