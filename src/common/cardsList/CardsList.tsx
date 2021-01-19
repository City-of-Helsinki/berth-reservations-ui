import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import './cardsList.scss';
import Spinner from '../spinner/Spinner';

interface CardsListProps {
  TabHeader?: React.FC;
  includedHeader: string;
  included: React.ReactNodeArray;
  excludedHeader: string;
  excluded: React.ReactNodeArray;
  loading: boolean;
}

const CardsList = ({ includedHeader, included, excludedHeader, excluded, loading }: CardsListProps) => {
  const { t } = useTranslation();

  if (loading) {
    return <Spinner withText={true} />;
  }

  return (
    <Container className="vene-cardsList">
      {included.length > 0 && (
        <Row>
          <Col xs={12}>
            <h3 className="vene-cardsList__heading">{t(includedHeader, { count: included.length })}</h3>
          </Col>
        </Row>
      )}
      <div className="vene-cardsList__list">{included}</div>
      {excluded.length > 0 && (
        <Row>
          <Col xs={12}>
            <h3 className="vene-cardsList__heading">{t(excludedHeader)}</h3>
          </Col>
        </Row>
      )}
      <div className={classNames('vene-cardsList__list', 'vene-cardsList__list--excluded')}>{excluded}</div>
    </Container>
  );
};

export default CardsList;
