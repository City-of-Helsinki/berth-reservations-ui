import React, { Component } from 'react';
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

class FrontPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  render() {
    const { localePush } = this.props;

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
          <div className="vene-front-page">
            <Container className="vene-front-page__body">
              {/* <Row className="vene-front-page__title">
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <FormattedMessage tagName="h1" id="page.front.description.heading" />
                  <FormattedMessage tagName="p" id="page.front.description.body" />
                </Col>
              </Row> */}
              <Row>
                <Col xs="6">
                  <Card
                    onClick={() => localePush('/berths')}
                    btnLabel="page.front.card.berths.button_label"
                    title="page.front.card.berths.title"
                  >
                    <FormattedMessage tagName="p" id="page.front.card.berths.description" />
                    <FormattedMessage tagName="p" id="page.front.card.instructions" />
                  </Card>
                </Col>
                <Col xs="6">
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
          </div>
        </KoroSection>
      </Layout>
    );
  }
}

export default withMatchParamsHandlers(FrontPage);
