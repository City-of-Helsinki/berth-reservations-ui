import classNames from 'classnames';
import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import Icon, { IconNames } from '../../common/Icon';
import AutoSave from '../../forms/AutoSave';
import Form from '../../forms/Form';
import UnRegisteredBoatDetails from '../../forms/fragments/UnRegisteredBoatDetails';
import ApplicationSelector from '../../forms/sections/ApplicationSelector';

import { WithBoatType } from '../../forms/Selects';
import Steps from '../../steps';

import {
  BerthsServices,
  SelectedServices,
  SelectedWinterServices,
  WinterServices
} from '../../../types/services';
import './BerthLegend.scss';

type Props = {
  initialValues: object;
  onSubmit: Function;
  selectService: Function;
  deselectService: Function;
  selectedServices: SelectedServices | SelectedWinterServices;
  hideApplicationSelector?: boolean;
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
  services: Array<{
    label: string;
    value: BerthsServices | WinterServices;
    icon: IconNames;
  }>;
} & WithBoatType;

const BerthsLegend = ({
  boatTypes,
  initialValues,
  onSubmit,
  selectService,
  deselectService,
  selectedServices,
  steps,
  services,
  hideApplicationSelector
}: Props) => (
  <div className="vene-berths-legend">
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Steps steps={steps} />
          {!hideApplicationSelector && <ApplicationSelector />}
          <div className="vene-berths-legend__header">
            <FormattedMessage tagName="h3" id="legend.berths.title" />
            <FormattedMessage tagName="p" id="legend.berths.legend" />
          </div>

          <Form initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <Fragment>
                <UnRegisteredBoatDetails fieldsNotRequired boatTypes={boatTypes} />
                <AutoSave debounce={500} save={onSubmit} />
              </Fragment>
            )}
          </Form>

          <div className="vene-berths-legend__services__header">
            <FormattedMessage tagName="span" id="form.services.field.services.label" />
          </div>

          <div className="vene-berths-legend__services">
            {services.map((service, index) => {
              // @ts-ignore
              const selected = selectedServices.get(service.value) || false;
              return (
                <button
                  className="vene-berths-legend__service"
                  key={index}
                  onClick={() =>
                    selected ? deselectService(service.value) : selectService(service.value)
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
        </Col>
      </Row>
    </Container>
  </div>
);

export default BerthsLegend;
