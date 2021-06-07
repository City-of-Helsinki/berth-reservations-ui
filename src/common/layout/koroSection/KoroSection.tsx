import classnames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import './koroSection.scss';

interface Props {
  title?: string;
  description?: React.ReactNode;
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
    description,
    top = false,
    bottom = false,
    centered = false,
    children,
    className,
    color = 'white',
  } = props;
  const { t } = useTranslation();
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
            {title && <h2 className="section-koro__title">{t(title)}</h2>}
            {description}
          </Col>
        </Row>
      </Container>
      {children}
    </section>
  );
};

export default KoroSection;
