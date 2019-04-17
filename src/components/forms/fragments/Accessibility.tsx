import React from 'react';

import { Checkbox } from '../Fields';

const AccessibilityFragment = () => (
  <Checkbox
    name={`accessibilityRequired`}
    label="form.accessibility.field.accessibility.label"
    inline={false}
  />
);

export default AccessibilityFragment;
