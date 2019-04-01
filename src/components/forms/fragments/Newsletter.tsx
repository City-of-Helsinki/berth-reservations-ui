import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { Checkbox } from '../Fields';

const NewsletterFragment = () => (
  <Fragment>
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`accept_boating_newsletter`}
          label="form.overview.field.boating_info.label"
          inline={false}
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h6" id="form.overview.header.also.title" />
    <Row>
      <Col sm={3}>
        <Checkbox
          name={`accept_fitness_news`}
          label="form.overview.field.fitness_services.label"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`accept_library_news`}
          label="form.overview.field.library_services.label"
          inline={false}
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          name={`accept_other_culture_news`}
          label="form.overview.field.other_cultural_services.label"
          inline={false}
        />
      </Col>
    </Row>
  </Fragment>
);

export default NewsletterFragment;
