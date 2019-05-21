import React from 'react';
import { Button, Card as RSCard, CardBody, CardText, CardTitle } from 'reactstrap';

import { shallowWithIntl } from '../../../utils/testUtils';
import Card from './Card';

describe('Card', () => {
  const onClick = jest.fn();

  const getWrapper = (children: JSX.Element = <div>foo bar</div>, props?: object) =>
    shallowWithIntl(
      <Card title="foo" btnLabel="click me" onClick={onClick} {...props}>
        {children}
      </Card>
    );

  beforeEach(() => {
    onClick.mockClear();
  });

  test('should render a Card component from with a className of "vene-card"', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.vene-card')).toHaveLength(1);
  });

  test('should render the passed children', () => {
    const children = (
      <div className="custom-card-body">
        <p>first paragraph</p>
        <p>second paragraph</p>
      </div>
    );
    const wrapper = getWrapper(children);
    expect(wrapper.find('div.custom-card-body')).toHaveLength(1);
  });

  test('should call the provided click handler when the button is clicked', () => {
    const wrapper = getWrapper();
    wrapper.find(Button).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
