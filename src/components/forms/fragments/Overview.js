// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const OverviewForm = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.overview.header.title" />
    <Row>
      <Col sm={3}>
        <Checkbox name={`${prefix}.email`} label="form.overview.field.email.label" inline={false} />
      </Col>
      <Col sm={3}>
        <Checkbox name={`${prefix}.sms`} label="form.overview.field.sms.label" inline={false} />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.guarantee`}
          label="form.overview.field.guarantee.label"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.receivable_boating_info`}
          label="form.overview.field.boating_info.label"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage tagName="h6" id="form.overview.header.also.title" />

    <Row>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_fitness_services`}
          label="form.overview.field.fitness_services.label"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_library_services`}
          label="form.overview.field.library_services.label"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_other_cultural_services`}
          label="form.overview.field.other_cultural_services.label"
          inline={false}
        />
      </Col>
    </Row>
  </Fragment>
);

export default OverviewForm;
