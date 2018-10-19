// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  completed?: boolean,
  current?: boolean,
  label: string
};

const Section = styled.div`
  text-align: center;
`;

const Circle = styled.div.attrs({
  backgroundcolor: props => {
    if (props.current) {
      return props.theme.colors.blue;
    }
    if (props.completed) {
      return props.theme.colors.light;
    }
    return 'none';
  }
})`
  width: 3em;
  height: 3em;
  font-size: 1.2em;
  color: #000;
  margin: auto;
  margin-bottom: 1em;
  padding-top: 0.8em;
  border: 0.1em solid #000;
  border-radius: 50%;
  background-color: ${props => props.backgroundcolor};
`;

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false
  };

  render() {
    const { completed, current, label } = this.props;
    const content = completed ? <FontAwesomeIcon icon="check" /> : '';

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
