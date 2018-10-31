// @flow
import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

type Props = {
  completed?: boolean,
  current?: boolean,
  label: string
};

const Section = styled.div`
  text-align: center;
`;

const Circle = styled.div`
  width: 3em;
  height: 3em;
  font-size: 1.2em;
  color: #000;
  margin: auto;
  margin-bottom: 1em;
  padding-top: 0.1em;
  border: 0.1em solid #000;
  border-radius: 50%;
  background-color: ${props => {
    if (props.current) {
      return props.theme.colors.blue;
    }
    if (props.completed) {
      return props.theme.colors.light;
    }
    return 'none';
  }}};
`;

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false
  };

  render() {
    const { completed, current, label } = this.props;
    const content = completed ? <Icon name="check" width="50" color="#000" /> : '';

    return (
      <Section>
        <Circle completed={completed} current={current}>
          {content}
        </Circle>
        <div>{label}</div>
      </Section>
    );
  }
}
