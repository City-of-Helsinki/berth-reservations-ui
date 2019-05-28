import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from 'react-intl';
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
  useLayoutEffect(() => window.scrollTo(0, 0));

  return (
    <Layout>
      <Hero title="page.front.title" bgUrl={frontHeroImg} />
      <KoroSection
        color="fog"
        top
        title="page.front.description.heading"
        description={[{ id: 'page.front.description.body' }]}
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
                <FormattedMessage tagName="p" id="page.front.card.berths.description" />
                <FormattedMessage tagName="p" id="page.front.card.instructions" />
              </Card>
            </Col>
            <Col md="6" xs="12" className="vene-front-page__card-wrapper">
              <Card
                onClick={() => localePush('/winter-storage')}
                btnLabel="page.front.card.winter.button_label"
                title="page.front.card.winter.title"
              >
                <FormattedMessage tagName="p" id="page.front.card.winter.description" />
                <FormattedMessage tagName="p" id="page.front.card.instructions" />
              </Card>
            </Col>
          </Row>
        </Container>
      </KoroSection>
    </Layout>
  );
};

export default withMatchParamsHandlers(FrontPage);
