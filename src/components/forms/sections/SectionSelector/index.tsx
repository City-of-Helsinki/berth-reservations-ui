import classNames from 'classnames';
import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import Icon, { IconNames } from '../../../common/Icon';

import './SectionSelector.scss';

interface TypeProps {
  label: string;
  tab: string;
  icon: IconNames;
}

type Props = {
  name: string;
  types: TypeProps[];
  sizes: {
    xs?: number;
    md?: number;
    lg?: number;
  };
} & RouteComponentProps;

const SectionSelector = ({ name, types, sizes, location, match }: Props) => {
  // @ts-ignore
  const url = location.pathname.replace(match.params.tab, '');
  return (
    <div className="vene-section-selector">
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            <Row>
              {types.map(({ label, tab, icon }: TypeProps) => (
                <Col id={`${tab}_selection`} key={`${name}.${tab}`} {...sizes}>
                  <NavLink
                    className="vene-section-selector__link"
                    activeClassName="vene-section-selector__link--is-selected"
                    to={`${url}${tab}`}
                  >
                    <Icon name={icon} />
                    <FormattedMessage id={label} />
                  </NavLink>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(SectionSelector);
