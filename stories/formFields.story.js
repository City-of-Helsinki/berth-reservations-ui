import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Text,
  Select,
  Checkbox,
  Radio,
  MultiCheckbox,
  MultiRadio,
  Number
} from '../src/components/forms/Fields';
import Form from '../src/components/forms/Form';

storiesOf('Forms/Components', module)
  .addDecorator(storyFn => <Form onSubmit={action('onSubmit')}>{() => storyFn()}</Form>)
  .add('InputFields', () => (
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
          { name: 'test3', label: 'storybook.dummy.label', value: 'test3' }
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
  ))
  .add('InputGroup', () => (
    <div>
      <div>
        Prepend
        <Number id="number" name="Number" label="storybook.dummy.label" prepend="m" />
      </div>
      <div>
        append
        <Number id="number" name="Number" label="storybook.dummy.label" append="m" />
      </div>
      <div>
        both
        <Number id="number" name="Number" label="storybook.dummy.label" prepend="m" append="m" />
      </div>
    </div>
  ));
