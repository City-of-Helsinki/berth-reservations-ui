import React from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Select } from 'hds-react';

import { BerthSwitchProps } from '../../../../redux/types';
import { BerthOption, HarborOption, PierOption, ReasonOption } from '../types';

import './switchApplication.scss';

export interface SwitchApplicationProps {
  harborOptions: HarborOption[];
  reasonOptions: ReasonOption[];
  values: BerthSwitchProps;
  change<F extends 'berth' | 'pier' | 'harbor'>(name: F, value: BerthSwitchProps[F]): void;
}

const SwitchApplication = ({ harborOptions, reasonOptions, values, change }: SwitchApplicationProps) => {
  const { t } = useTranslation();

  const pierOptions: PierOption[] = values.harbor?.piers ?? [];
  const berthOptions: BerthOption[] = values.pier?.berths ?? [];

  return (
    <Container className="vene-switch-application">
      <Row>
        <Col>
          <h3 className="vene-switch-application__heading">{t('page.berth.switch_application.current_berth.title')}</h3>
          <p className="vene-switch-application__description">
            {t('page.berth.switch_application.current_berth.info_text')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Field name="harbor" required>
            {({ input, meta }) => (
              <Select
                id={input.name}
                invalid={!!(meta.touched && meta.error)}
                label={t('page.berth.switch_application.form.current_harbour_area.label')}
                onBlur={input.onBlur}
                onChange={(option: HarborOption | null) => {
                  input.onChange(option);
                  change('pier', null);
                  change('berth', null);
                }}
                onFocus={input.onFocus}
                options={harborOptions}
                required
                value={input.value}
              />
            )}
          </Field>
        </Col>
      </Row>
      <br />

      <Row>
        <Col sm={6}>
          <Field name="pier" required>
            {({ input, meta }) => (
              <Select
                disabled={pierOptions.length === 0}
                id={input.name}
                invalid={!!(meta.touched && meta.error)}
                label={t('page.berth.switch_application.form.pier.title')}
                onBlur={input.onBlur}
                onChange={(option: PierOption | null) => {
                  input.onChange(option);
                  change('berth', null);
                }}
                onFocus={input.onFocus}
                options={pierOptions}
                required
                value={input.value}
              />
            )}
          </Field>
        </Col>

        <Col sm={6}>
          <Field name="berth" required>
            {({ input, meta }) => (
              <Select
                disabled={berthOptions.length === 0}
                id={input.name}
                invalid={!!(meta.touched && meta.error)}
                label={t('page.berth.switch_application.form.berth.title')}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onFocus={input.onFocus}
                options={berthOptions}
                required
                value={input.value}
              />
            )}
          </Field>
        </Col>
      </Row>
      <br />

      <Row>
        <Col>
          <h3 className="vene-switch-application__heading">{t('page.berth.switch_application.reason.title')}</h3>
          <p className="vene-switch-application__description">{t('page.berth.switch_application.reason.info_text')}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Field name="reason">
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
      <br />
    </Container>
  );
};

export default SwitchApplication;
