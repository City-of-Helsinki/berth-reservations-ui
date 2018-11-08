// @flow
import React, { type Node } from 'react';
import classnames from 'classnames';
// $SuppressFlowComment
import './KoroSection.scss';

type Props = {
  className?: string,
  children?: Node,
  color: 'fog' | 'blue' | 'white',
  top?: boolean,
  bottom?: boolean
};

export default class KoroSection extends React.Component<Props> {
  static defaultProps = {
    top: false,
    bottom: false
  };

  render() {
    const { top, bottom, children, className, color } = this.props;
    const classes = classnames(className, color, {
      'section-koro-top': top,
      'section-koro-bottom': bottom
    });

    return <section className={classes}>{children}</section>;
  }
}
