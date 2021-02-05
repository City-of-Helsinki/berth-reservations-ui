import React, { Component } from 'react';
import { FormSpy, FormSpyRenderProps } from 'react-final-form';

interface Props<T> {
  save: (values: T) => void;
  debounce: number;
  values?: T;
}

class AutoSave extends Component<Props<any> & FormSpyRenderProps> {
  timeout?: number;

  constructor(props: Props<any> & FormSpyRenderProps) {
    super(props);
    this.timeout = undefined;
  }

  componentDidUpdate() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = window.setTimeout(this.save, this.props.debounce);
  }

  save = async () => {
    const { values, save } = this.props;
    save(values);
  };

  render() {
    return null;
  }
}

// FIXME: Turn into function component
// eslint-disable-next-line import/no-anonymous-default-export
export default (props: Props<any>) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <FormSpy {...props} subscription={{ values: true }} component={AutoSave} />
);
