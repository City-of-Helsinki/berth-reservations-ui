import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '../Fields';

const AccessibilityFragment = () => (
  <>
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Checkbox
      name={`accessibilityRequired`}
      label="form.accessibility.field.accessibility.label"
      inline={false}
    />
  </>
);

export default AccessibilityFragment;
