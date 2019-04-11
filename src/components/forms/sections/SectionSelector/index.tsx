import classNames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import Icon, { IconNames } from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';

import './SectionSelector.scss';

interface TypeProps {
  label: string;
  tab: string;
  icon: IconNames;
}

interface Props {
  name: string;
  selected: any;
  types: TypeProps[];
  sizes: {
    xs?: number;
    md?: number;
    lg?: number;
  };
}

const SectionSelector = ({ name, selected, types, sizes }: Props) => (
  <div className="app-SectionSelector">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Row>
            {types.map(({ label, tab, icon }: TypeProps) => (
              <Col id={`${tab}_selection`} key={`${name}.${tab}`} {...sizes}>
                <LocalizedLink
                  className={classNames('app-SectionSelector__link', {
                    'is-selected': selected === tab
                  })}
                  to={`form/${tab}`}
                >
                  <Icon name={icon} />
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
