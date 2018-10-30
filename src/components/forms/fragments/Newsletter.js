// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const NewsletterFragment = ({ prefix }: FormFragmentProps) => (
  <Fragment>
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

export default NewsletterFragment;
