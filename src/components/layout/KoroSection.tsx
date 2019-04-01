import classnames from 'classnames';
import React from 'react';

import './KoroSection.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  color: 'fog' | 'blue' | 'white';
  top?: boolean;
  bottom?: boolean;
}

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
