// @flow
import React from 'react';
import styled from 'styled-components';
import LocalizedLink from '../common/LocalizedLink';

type Props = {
  completed: boolean,
  current: boolean,
  label: string,
  linkTo?: string
};

const Section = styled.div`
  color: inherit;
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
  display: block;
  text-align: left;
`;

const StatusBox = styled.div`
  height: 1.25em;
  color: #000;
  margin: auto;
  margin-bottom: 0.5em;
  padding-top: 0.1em;
  border-radius: 0.67em;
  background-color: ${props => {
    if (props.current) {
      return props.theme.colors.blue;
    }
    if (props.completed) {
      return props.theme.colors.blue;
    }
    return props.theme.colors.light;
  }}};
`;

const StatusTitle = styled.div`
  font-weight: 500;
  padding-left: 0.3em;
`;

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false
  };

  render() {
    const { completed, current, label, linkTo } = this.props;

    return (
      <Section as={linkTo ? LocalizedLink : 'div'} to={linkTo}>
        <StatusBox completed={completed} current={current} />
        <StatusTitle>{label}</StatusTitle>
      </Section>
    );
  }
}
