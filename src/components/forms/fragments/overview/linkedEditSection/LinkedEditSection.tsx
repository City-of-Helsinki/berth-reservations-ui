import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import Icon from '../../../../common/Icon';
import LocalizedLink from '../../../../common/LocalizedLink';

import './linkedEditSection.scss';

export interface Props {
  title: string;
  link: string;
  children: React.ReactNode;
}

const LinkedEditSection = ({ title, link, children }: Props) => {
  return (
    <Row className="vene-linked-edit-section">
      <Col>
        <Row>
          <Col>
            <div className="vene-linked-edit-section__header">
              <FormattedMessage id={title}>
                {(txt) => <h4 className="vene-linked-edit-section__title">{txt}</h4>}
              </FormattedMessage>
              <LocalizedLink to={link} className="vene-linked-edit-section__link">
                <FormattedMessage id="page.overview.info.edit" />
                <Icon name="pencil" className="vene-linked-edit-section__link-icon" />
              </LocalizedLink>
            </div>
          </Col>
        </Row>
        {children}
      </Col>
    </Row>
  );
};

export default LinkedEditSection;
