// @flow

import React from 'react';

import { Checkbox } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const AccessibilityFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Checkbox
    noValidate={noValidate}
    name={`${prefix}.accessibility`}
    label="form.accessibility.field.accessibility.label"
    inline={false}
  />
);

export default AccessibilityFragment;
