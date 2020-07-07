import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import './cardsList.scss';

interface CardsListProps {
  TabHeader?: React.FC;
  includedHeader: string;
  included: React.ReactNodeArray;
  excludedHeader: string;
  excluded: React.ReactNodeArray;
}

const CardsList = ({ includedHeader, included, excludedHeader, excluded }: CardsListProps) => (
  <Container className="vene-cardsList">
    {included.length > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage id={includedHeader} values={{ count: included.length }}>
            {txt => <h3 className="vene-cardsList__heading">{txt}</h3>}
          </FormattedMessage>
        </Col>
      </Row>
    )}
    <div className="vene-cardsList__list">{included}</div>
    {excluded.length > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage tagName="h3" id={excludedHeader}>
            {txt => <h3 className="vene-cardsList__heading">{txt}</h3>}
          </FormattedMessage>
        </Col>
      </Row>
    )}
    <div className={classNames('vene-cardsList__list', 'vene-cardsList__list--excluded')}>
      {excluded}
    </div>
  </Container>
);

export default CardsList;
