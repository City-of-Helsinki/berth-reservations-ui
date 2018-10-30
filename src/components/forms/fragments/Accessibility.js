// @flow

import React from 'react';

import { Checkbox } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const AccessibilityFragment = ({ prefix }: FormFragmentProps) => (
  <Checkbox
    name={`${prefix}.accessibility`}
    label="form.accessibility.field.accessibility.label"
    inline={false}
  />
);

export default AccessibilityFragment;
