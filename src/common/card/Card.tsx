import React from 'react';
import { Button, Card as RSCard, CardBody, CardTitle } from 'reactstrap';

import './card.scss';
import Icon from '../icon/Icon';

type Props = {
  title: string;
  btnLabel: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const Card = ({ title, onClick, btnLabel, children }: Props) => {
  return (
    <RSCard className="vene-card">
      <CardBody className="vene-card__body">
        <CardTitle className="vene-card__title" tag="h3">
          {title}
        </CardTitle>
        <div className="vene-card__description">{children}</div>
        <Button onClick={onClick} className="vene-card__button" type="button" color="primary" outline>
          <span className="vene-card__button-label">{btnLabel}</span>
          <Icon name="arrowRight" className="vene-card__arrow-icon" />
        </Button>
      </CardBody>
    </RSCard>
  );
};

export default Card;
