import React from 'react';
import classnames from 'classnames';
import './KoroSection.scss';

export default class KoroSection extends React.Component {
  render() {
    const { type, theme } = this.props;

    const koroPulsePosition = type === 'top' ? 'koro-pulse-top' : 'koro-pulse-bottom';

    return (
      <div>
        <section className={classnames(['section-koro', theme, koroPulsePosition, 'koro-size-x3'])}>
          <div className="section-koro__content">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
