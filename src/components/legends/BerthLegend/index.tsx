import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import Icon, { IconNames } from '../../common/Icon';
import AutoSave from '../../forms/AutoSave';
import Form from '../../forms/Form';
import ApplicationSelector from '../../forms/sections/applicationSelector/ApplicationSelector';
import Steps from '../../steps/Steps';

import {
  BerthsServices,
  SelectedServices,
  SelectedWinterServices,
  WinterServices
} from '../../../types/services';
import { StepType } from '../../steps/step/Step';
import './BerthLegend.scss';

interface Props {
  form?: {
    initialValues: object;
    onSubmit: Function;
    render: () => JSX.Element;
  };
  legend?: {
    title: string;
    legend: string;
  };
  showApplicationSelector?: boolean;
  steps?: StepType[];
  services?: {
    available: Array<{
      label: string;
      value: BerthsServices | WinterServices;
      icon: IconNames;
    }>;
    deselectService: Function;
    label: string;
    selectedServices: SelectedServices | SelectedWinterServices;
    selectService: Function;
  };
}

const BerthsLegend = ({ form, legend, steps, services, showApplicationSelector }: Props) => (
  <div className="vene-berths-legend">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          {showApplicationSelector && (
            <ApplicationSelector className="vene-berths-legend__app-selector" />
          )}

          {steps && <Steps steps={steps} />}

          {legend && (
            <div className="vene-berths-legend__header">
              <FormattedMessage tagName="h3" id={legend.title} />
              <FormattedMessage tagName="p" id={legend.legend} />
            </div>
          )}

          {form && (
            <Form initialValues={form.initialValues} onSubmit={form.onSubmit}>
              {() => (
                <>
                  {form.render()}
                  <AutoSave debounce={500} save={form.onSubmit} />
                </>
              )}
            </Form>
          )}

          {services && (
            <>
              <div className="vene-berths-legend__services__header">
                <FormattedMessage tagName="span" id={services.label} />
              </div>
              <div className="vene-berths-legend__services">
                {services.available.map((service, index) => {
                  // @ts-ignore
                  const selected = services.selectedServices.get(service.value) || false;
                  return (
                    <button
                      className="vene-berths-legend__service"
                      key={index}
                      onClick={() =>
                        selected
                          ? services.deselectService(service.value)
                          : services.selectService(service.value)
                      }
                    >
                      <div
                        className={classNames('vene-berths-legend__icon-wrapper', {
                          selected
                        })}
                      >
                        <Icon name={service.icon} />
                      </div>
                      <div className="vene-berths-legend__label">
                        <FormattedMessage id={service.label} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  </div>
);

export default BerthsLegend;
