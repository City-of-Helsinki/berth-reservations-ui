import classnames from 'classnames';
import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import './koroSection.scss';

interface Props {
  title?: string;
  description?: {
    id: string;
    values?: { [key: string]: string };
  }[];
  className?: string;
  children?: React.ReactNode;
  color?: 'fog' | 'blue' | 'white';
  top?: boolean;
  bottom?: boolean;
  centered?: boolean;
}

const KoroSection = (props: Props) => {
  const {
    title,
    description = [],
    top = false,
    bottom = false,
    centered = false,
    children,
    className,
    color = 'white',
  } = props;
  const classes = classnames(className, `section-koro--${color}`, 'section-koro', {
    'section-koro--top': top,
    'section-koro--bottom': bottom,
    'section-koro--centered': centered,
  });

  return (
    <section className={classes}>
      <Container className="vene-layout__desc">
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            {title && (
              <FormattedMessage id={title}>
                {(txt) => <h2 className="section-koro__title">{txt}</h2>}
              </FormattedMessage>
            )}
            {description.map((paragraph) => (
              <FormattedHTMLMessage
                key={paragraph.id}
                tagName="p"
                id={paragraph.id}
                values={paragraph.values}
              />
            ))}
          </Col>
        </Row>
      </Container>
      {children}
    </section>
  );
};

export default KoroSection;
