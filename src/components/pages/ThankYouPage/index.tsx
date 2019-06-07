import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Layout from '../../layout/Layout';
import ThankYouLegend from '../../legends/thankYouLegend/ThankYouLegend';
import './ThankYouPage.scss';

interface Props {
  resetValues: Function;
  resetBerths: Function;
  resetWinterAreas: Function;
  resetApplication: Function;
}

class ThankYouPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <div className="vene-thankyou-page">
          <ThankYouLegend />
          <div className="vene-thankyou-page__link">
            <Link to="/">
              <Button type="button">
                <FormattedMessage tagName="span" id="site.buttons.back_to_frontpage" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ThankYouPage;
