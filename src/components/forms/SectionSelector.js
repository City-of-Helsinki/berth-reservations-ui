// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import { Radio } from './Fields';
import Icon from '../common/Icon';

const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.helLight};
  padding: 1em;
`;
const StyledIcon = styled(Icon)``;
const FormSelectWrapper = styled.div`
  padding: 1em;
  ${StyledIcon} {
    text-align: center;
    background-color: ${props => (props.selected ? props.theme.helFog : 'unset')};
  }
`;

type Props = {
  name: string,
  types: Array<any>,
  selected: any
};

const SectionSelector = ({ name, types, selected }: Props) => (
  <ButtonWrapper>
    <Container>
      <Row>
        {types.map(({ label, value, iconName }) => (
          <Col xs={3} key={`${name}.${value}`}>
            <FormSelectWrapper selected={selected === value}>
              <StyledIcon name={iconName} width="50%" color="black" />
              <Radio id={label} name={`sections.${name}`} value={value} label={label} />
            </FormSelectWrapper>
          </Col>
        ))}
      </Row>
    </Container>
  </ButtonWrapper>
);

export default SectionSelector;
