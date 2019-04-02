import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import ThankYouLegend from '../legends/ThankYouLegend';

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  margin-bottom: 3em;
`;

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
        <ButtonSection>
          <Link to="/">
            <Button type="button">
              <FormattedMessage tagName="span" id="site.buttons.back_to_frontpage" />
            </Button>
          </Link>
        </ButtonSection>
      </Layout>
    );
  }
}

export default ThankYouPage;
