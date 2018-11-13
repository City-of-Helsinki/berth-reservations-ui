// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../common/LocalizedLink';
import Icon from '../common/Icon';

const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.helLight};
  padding: 1em;
`;
type TypeProps = {
  label: string,
  tab: string,
  icon: string
};

const StyledIcon = styled(Icon)``;

type Props = {
  name: string,
  selected: any,
  types: Array<TypeProps>
};

const FormSelectWrapper = styled(LocalizedLink)`
  display: block;
  color: inherit;
  padding: 1em;
  text-align: center;
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  background-color: ${props => (props.selected ? props.theme.helFog : 'unset')};
  font-weight: ${props => (props.selected ? '600' : '400')};
  letter-spacing: ${props => (props.selected ? '1.05px' : 'inherit')};
`;

const SectionSelector = ({ name, selected, types }: Props) => (
  <ButtonWrapper>
    <Container>
      <Row>
        {types.map(({ label, tab, icon }: TypeProps) => (
          <Col xs={3} key={`${name}.${tab}`}>
            <FormSelectWrapper to={`form/${tab}`} selected={selected === tab}>
              <StyledIcon name={icon} width="50%" color="black" />
              <FormattedMessage id={label} />
            </FormSelectWrapper>
          </Col>
        ))}
      </Row>
    </Container>
  </ButtonWrapper>
);

export default SectionSelector;
