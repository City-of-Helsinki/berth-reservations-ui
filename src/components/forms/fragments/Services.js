// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { MultiCheckbox } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const Services = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={12}>
      <MultiCheckbox
        noValidate={noValidate}
        label="form.services.field.services.label"
        inline
        items={[
          {
            name: `${prefix}.service`,
            label: 'form.services.field.mooring.label',
            value: 'mooring'
          },
          {
            name: `${prefix}.service`,
            label: 'form.services.field.electricity.label',
            value: 'electricity'
          },
          { name: `${prefix}.service`, label: 'form.services.field.water.label', value: 'water' },
          {
            name: `${prefix}.service`,
            label: 'form.services.field.waste_collection.label',
            value: 'waste_collection'
          },
          { name: `${prefix}.service`, label: 'form.services.field.gate.label', value: 'gate' },
          {
            name: `${prefix}.service`,
            label: 'form.services.field.lighting.label',
            value: 'lighting'
          }
        ]}
      />
    </Col>
  </Row>
);

export default Services;
