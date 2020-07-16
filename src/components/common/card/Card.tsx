import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card as RSCard, CardBody, CardTitle } from 'reactstrap';

import './card.scss';

type Props = {
  title: string;
  btnLabel: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const Card = ({ title, onClick, btnLabel, children }: Props) => {
  const { t } = useTranslation();

  return (
    <RSCard className="vene-card">
      <CardBody className="vene-card__body">
        <CardTitle className="vene-card__title" tag="h3">
          {t(title)}
        </CardTitle>
        <div className="vene-card__description">{children}</div>
        <Button
          onClick={onClick}
          className="vene-card__button"
          type="button"
          color="primary"
          outline
        >
          {t(btnLabel)}
        </Button>
      </CardBody>
    </RSCard>
  );
};

export default Card;
