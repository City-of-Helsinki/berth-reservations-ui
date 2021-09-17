import * as React from 'react';
import { Button, Card as RSCard, CardBody, CardTitle } from 'reactstrap';

import './card.scss';
import Icon from '../icon/Icon';

type Props = {
  title: string;
  btnLabel: string;
  children: React.ReactNode;
};

interface InternalProps extends Props {
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ExternalProps extends Props {
  href: string;
  rel?: string;
  target?: string;
}

type CardProps = InternalProps | ExternalProps;

const isInternal = (props: CardProps): props is InternalProps => {
  return (props as InternalProps).onClick !== undefined;
};

const Card = (props: CardProps) => {
  const { title, btnLabel, children, ...rest } = props;

  return (
    <RSCard className="vene-card">
      <CardBody className="vene-card__body">
        <CardTitle className="vene-card__title" tag="h3">
          {title}
        </CardTitle>
        <div className="vene-card__description">{children}</div>
        <Button
          className="vene-card__button"
          type="button"
          color="primary"
          outline
          {...(isInternal(props) ? rest : { ...rest, tag: 'a' })}
        >
          <span className="vene-card__button-label">{btnLabel}</span>
          <Icon name={isInternal(props) ? 'arrowRight' : 'linkExternal'} className="vene-card__arrow-icon" />
        </Button>
      </CardBody>
    </RSCard>
  );
};

export default Card;
