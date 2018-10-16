import React from 'react';
import classnames from 'classnames';
import './KoroSection.scss';

export default class KoroSection extends React.Component {
  render() {
    const { styleType, theme } = this.props;

    return (
      <div>
        <section className={classnames(['section-koro', theme, styleType, 'koro-size-x3'])}>
          <div className="section-koro__content">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
