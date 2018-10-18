// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  completed?: boolean,
  current?: boolean,
  label: string
};

const Section = styled.div`
  width: 100%;
  height: 5.125em;
  display: block;
  margin-bottom: 2em;
  text-align: center;
  margin: auto;
`;

const Circle = styled.div`
  width: 3.125em;
  height: 3.125em;
  border: 0.125em solid #000;
  border-radius: 50%;
  padding-top: 0.8em;
  font-size: 1.2em;
  color: #fff;
  margin: auto;
  margin-bottom: 1em;

  &.current {
    background-color: #0072c6;
  }

  &.completed {
    background-color: #e9ecef;
    color: #000;
  }
`;

const Label = styled.div`
  display: inline-block;
  margin-top: 0em;
`;

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false,
    label: ''
  };

  render() {
    const { completed, current, label } = this.props;

    const classes = classnames('content', {
      current,
      completed
    });

    const content = completed ? <FontAwesomeIcon icon="check" /> : '';

    return (
      <Section>
        <Circle className={classes}>{content}</Circle>
        <Label>
          <FormattedMessage id={label} />
        </Label>
      </Section>
    );
  }
}
