import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Layout from '../layout';
import ThankYouLegend from '../legends/ThankYouLegend';

interface Props {
  resetValues: Function;
  resetBerths: Function;
}

class ThankYouPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <ThankYouLegend />
        <div>
          <Link to="/">
            <Button type="button">
              <FormattedMessage tagName="span" id="site.buttons.back_to_frontpage" />
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default ThankYouPage;
