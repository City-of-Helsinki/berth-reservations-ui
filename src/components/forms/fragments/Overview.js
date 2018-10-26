// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '../Fields';

type Props = {
  prefix: string,
  values: Object
};

const OverviewForm = ({ prefix, values }: Props) => (
  <Fragment>
    <pre>{JSON.stringify(values)}</pre>
    <FormattedMessage tagName="h3" id="page.overview.form.section.info_options" />
    <Row>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.email`}
          label="page.overview.form.section.info_options.email"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.sms`}
          label="page.overview.form.section.info_options.sms"
          inline={false}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.guarantee`}
          label="page.overview.form.section.info_options.guarantee"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage tagName="h5" id="page.overview.form.section.info_options.receivable_items" />
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.receivable_boating_info`}
          label="page.overview.form.section.info_options.receivable_items.boating_info"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage
      tagName="h6"
      id="page.overview.form.section.info_options.receivable_items.also"
    />

    <Row>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_fitness_services`}
          label="page.overview.form.section.info_options.receivable_items.fitness_services"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_library_services`}
          label="page.overview.form.section.info_options.receivable_items.library_services"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_other_cultural_services`}
          label="page.overview.form.section.info_options.receivable_items.other_cultural_services"
          inline={false}
        />
      </Col>
    </Row>
  </Fragment>
);

export default OverviewForm;
