import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Text,
  Select,
  Checkbox,
  Radio,
  MultiCheckbox,
  MultiRadio
} from '../src/components/forms/fields/InputField';
import Form from '../src/components/forms/fields/Form';

storiesOf('Form', module).add('Fields', () => (
  <Form onSubmit={action('onSubmit')}>
    {() => (
      <div>
        <Text id="text" name="Text" label="storybook.dummy.label" />
        <Select id="select" name="Select" label="storybook.dummy.label">
          <option value="a">First</option>
          <option value="b">Second</option>
          <option value="c">Third</option>
        </Select>
        <Checkbox id="checkbox" name="Checkbox" label="storybook.dummy.label" />
        <Radio id="radio" name="Radio" value="Radio" label="storybook.dummy.label" />
        <MultiCheckbox
          id="multiCheckbox"
          name="MultiCheckbox"
          items={[
            { name: 'test1', label: 'storybook.dummy.label', value: 'test1' },
            { name: 'test2', label: 'storybook.dummy.label', value: 'test2' },
            { name: 'test3', label: 'storybook.dummy.label', value: 'test2' }
          ]}
          label="storybook.dummy.label"
        />
        <MultiRadio
          id="multiRadio"
          name="MultiRadio"
          items={[
            { name: 'test', label: 'storybook.dummy.label', value: 'test1' },
            { name: 'test', label: 'storybook.dummy.label', value: 'test2' },
            { name: 'test', label: 'storybook.dummy.label', value: 'test3' }
          ]}
          label="storybook.dummy.label"
        />
      </div>
    )}
  </Form>
));
