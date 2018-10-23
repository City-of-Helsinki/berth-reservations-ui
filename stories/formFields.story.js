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
        <Text
          id="mobilePhone"
          name="mobilePhone"
          label="page.person.form.mobile_phone.label"
          required
        />
        <Select
          id="mobilePhone"
          name="mobilePhone"
          label="page.person.form.mobile_phone.label"
          required
        />
        <Checkbox
          id="mobilePhone"
          name="mobilePhone"
          label="page.person.form.mobile_phone.label"
          required
        />
        <Radio
          id="mobilePhone"
          name="mobilePhone"
          value="test"
          label="page.person.form.mobile_phone.label"
          required
        />
        <MultiCheckbox
          id="mobilePhone"
          name="mobilePhone"
          items={{ test: 'Testi kenttä1', test2: 'Testi kenttä2' }}
          label="page.person.form.mobile_phone.label"
          required
        />
        <MultiRadio
          id="mobilePhone"
          name="mobilePhone"
          items={{ test: 'Testi kenttä1', test2: 'Testi kenttä2' }}
          label="page.person.form.mobile_phone.label"
          required
        />
      </div>
    )}
  </Form>
));
