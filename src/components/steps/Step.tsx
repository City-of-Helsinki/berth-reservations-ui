import React from 'react';
import LocalizedLink from '../common/LocalizedLink';

interface Props {
  completed: boolean;
  current: boolean;
  label: string;
  linkTo?: string;
}

export default class Step extends React.Component<Props> {
  static defaultProps = {
    completed: false,
    current: false
  };

  render() {
    const { label, linkTo } = this.props;

    return (
      // @ts-ignore
      <div as={linkTo ? LocalizedLink : 'div'} to={linkTo}>
        <span>{label}</span>
      </div>
    );
  }
}
