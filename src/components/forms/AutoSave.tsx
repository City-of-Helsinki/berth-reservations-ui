import React, { Component } from 'react';
import { FormSpy, FormSpyRenderProps } from 'react-final-form';

interface Props {
  save: Function;
  debounce: number;
  values?: FormData;
}

class AutoSave extends Component<Props & FormSpyRenderProps> {
  timeout?: number;

  promise?: Promise<any>;
  constructor(props: Props & FormSpyRenderProps) {
    super(props);

    this.timeout = undefined;
    this.promise = undefined;
  }

  componentDidUpdate() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = window.setTimeout(this.save, this.props.debounce);
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

// FIXME: Turn into function component
// eslint-disable-next-line import/no-anonymous-default-export
export default (props: Props) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <FormSpy {...props} subscription={{ values: true }} component={AutoSave} />
);
