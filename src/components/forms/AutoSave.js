import React from 'react';
import { FormSpy } from 'react-final-form';

class AutoSave extends React.Component {
  componentWillReceiveProps() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.save, this.props.debounce);
  }

  save = async () => {
    if (this.promise) {
      await this.promise;
    }

    const { values, save } = this.props;

    this.promise = save(values);
    await this.promise;
    delete this.promise;
  };

  render() {
    return this.promise ? 'submitting' : null;
  }
}
export default props => <FormSpy {...props} subscription={{ values: true }} component={AutoSave} />;
