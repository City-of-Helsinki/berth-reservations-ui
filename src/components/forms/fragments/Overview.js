// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '../Fields';
import OverviewInfo from '../../OverviewInfo';

import type { FormFragmentProps } from '../../../types/form';

const OverviewForm = ({ prefix, values }: FormFragmentProps) => (
  <Fragment>
    <OverviewInfo values={values} />
    <FormattedMessage tagName="h3" id="form.overview.info_options" />
    <Row>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.email`}
          label="form.overview.info_options.email"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox name={`${prefix}.sms`} label="form.overview.info_options.sms" inline={false} />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.guarantee`}
          label="form.overview.info_options.guarantee"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage tagName="h5" id="form.overview.info_options.receivable_items" />
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.receivable_boating_info`}
          label="form.overview.info_options.receivable_items.boating_info"
          inline={false}
        />
      </Col>
    </Row>

    <FormattedMessage tagName="h6" id="form.overview.info_options.receivable_items.also" />

    <Row>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_fitness_services`}
          label="form.overview.info_options.receivable_items.fitness_services"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_library_services`}
          label="form.overview.info_options.receivable_items.library_services"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`${prefix}.receivable_other_cultural_services`}
          label="form.overview.info_options.receivable_items.other_cultural_services"
          inline={false}
        />
      </Col>
    </Row>
  </Fragment>
);

export default OverviewForm;
