// @flow
import React, { Component, Fragment } from 'react';
import Form from './fields/Form';

type State = any;
type Props = any;

export default class Wizard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
  }

  next = (values: any) =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = (values: any) => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values: any) => {
    console.log('HEI!');
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Form initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
        {({ submitting, values }) => (
          <Fragment>
            {activePage}
            <div>
              {page > 0 && (
                <button type="button" onClick={this.previous}>
                  « Previous
                </button>
              )}
              {!isLastPage && <button type="submit">Next »</button>}
              {isLastPage && (
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </Fragment>
        )}
      </Form>
    );
  }
}
