import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Select } from 'hds-react';

import { Option } from './types';
import './switchApplication.scss';

export interface SwitchApplicationProps {
  currentBerths: Option[];
  reasonOptions: Option[];
}

const SwitchApplication = ({ currentBerths, reasonOptions }: SwitchApplicationProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <h3 className="vene-switch-application__heading">{t('page.berth.switch_application.current_berth.title')}</h3>
          <p className="vene-switch-application__description">
            {t('page.berth.switch_application.current_berth.info_text')}
          </p>
          <Field name="berthSwitch.berth" required>
            {({ input, meta }) => (
              <Select
                id={input.name}
                invalid={!!(meta.touched && meta.error)}
                label={t('page.berth.switch_application.form.berth.title')}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onFocus={input.onFocus}
                options={currentBerths}
                required
                value={input.value}
              />
            )}
          </Field>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Field name="berthSwitch.reason">
            {({ input, meta }) => (
              <Select
                id={input.name}
                invalid={!!(meta.touched && meta.error)}
                label={null}
                placeholder={t('page.berth.switch_application.reason.default')}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onFocus={input.onFocus}
                options={reasonOptions}
                value={input.value}
              />
            )}
          </Field>
        </Col>
      </Row>
    </Container>
  );
};

export default SwitchApplication;
