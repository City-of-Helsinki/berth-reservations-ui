import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { Checkbox } from '../fields/Fields';

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col sm={6}>
          <Checkbox name={`acceptBoatingNewsletter`} label="form.overview.field.boating_info.label" inline={false} />
        </Col>
      </Row>
      <h6>{t('form.overview.header.also.title')}</h6>
      <Row>
        <Col sm={3}>
          <Checkbox name={`acceptFitnessNews`} label="form.overview.field.fitness_services.label" inline={false} />
        </Col>
        <Col sm={3}>
          <Checkbox name={`acceptLibraryNews`} label="form.overview.field.library_services.label" inline={false} />
        </Col>
        <Col sm={3}>
          <Checkbox
            name={`acceptOtherCultureNews`}
            label="form.overview.field.other_cultural_services.label"
            inline={false}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Newsletter;
