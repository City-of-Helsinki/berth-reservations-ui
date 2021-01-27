import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import Icon from '../../../../../common/icon/Icon';
import LocalizedLink from '../../../../../common/LocalizedLink';

import './linkedEditSection.scss';

export interface Props {
  title: string;
  link: string;
  children: React.ReactNode;
}

const LinkedEditSection = ({ title, link, children }: Props) => {
  const { t } = useTranslation();
  return (
    <Row className="vene-linked-edit-section">
      <Col>
        <Row>
          <Col>
            <div className="vene-linked-edit-section__header">
              <h4 className="vene-linked-edit-section__title">{t(title)}</h4>
              <LocalizedLink to={link} className="vene-linked-edit-section__link">
                <span>{t('page.overview.info.edit')}</span>
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
