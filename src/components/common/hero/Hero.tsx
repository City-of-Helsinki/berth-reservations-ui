import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';

import './hero.scss';

interface Props {
  title: string;
  bgUrl: string;
  bgPosition?: string;
}

const Hero = ({ title, bgUrl, bgPosition }: Props) => (
  <div
    className="vene-hero"
    style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: bgPosition }}
  >
    <Container>
      <FormattedMessage id={title}>
        {(txt) => <h1 className="vene-hero__title">{txt}</h1>}
      </FormattedMessage>
    </Container>
  </div>
);

export default Hero;
