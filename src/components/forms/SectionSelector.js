// @flow
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import LocalizedLink from '../common/LocalizedLink';
import Icon from '../common/Icon';
import './_section-selector.scss';

type TypeProps = {
  label: string,
  tab: string,
  icon: string
};

type Props = {
  name: string,
  selected: any,
  types: Array<TypeProps>,
  sizes: {
    xs?: number,
    md?: number,
    lg?: number
  }
};

const SectionSelector = ({ name, selected, types, sizes }: Props) => (
  <div className="app-section-selector">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Row>
            {types.map(({ label, tab, icon }: TypeProps) => (
              <Col id={`${tab}_selection`} key={`${name}.${tab}`} {...sizes}>
                <LocalizedLink
                  className={classNames('app-section-selector__link', {
                    'is-selected': selected === tab
                  })}
                  to={`form/${tab}`}
                >
                  <Icon name={icon} width="50%" color="black" />
                  <FormattedMessage id={label} />
                </LocalizedLink>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionSelector;
