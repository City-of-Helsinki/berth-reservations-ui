// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Form from '../forms/Form';
import AutoSave from '../forms/AutoSave';
import UnRegisteredBoatDetails from '../forms/fragments/UnRegisteredBoatDetails';
import type { WithBoatType } from '../forms/Selects';
import Icon from '../common/Icon';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 3em;
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 3em;
`;

type Props = {
  initialValues: Object,
  onSubmit: Function,
  selectService: Function,
  deselectService: Function,
  selectedServices: Function
} & WithBoatType;

const services = [
  {
    label: 'form.services.field.mooring.label',
    value: 'mooring',
    icon: 'pole'
  },
  {
    label: 'form.services.field.electricity.label',
    value: 'electricity',
    icon: 'plug'
  },
  { label: 'form.services.field.water.label', value: 'water', icon: 'waterTap' },
  {
    label: 'form.services.field.waste_collection.label',
    value: 'waste_collection',
    icon: 'trash'
  },
  { label: 'form.services.field.gate.label', value: 'gate', icon: 'fence' },
  {
    label: 'form.services.field.lighting.label',
    value: 'lighting',
    icon: 'streetLight'
  }
];

const Services = styled(Col)`
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
`;

const ServiceIcon = styled(Icon)`
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${props => (props.selected ? 'white' : 'transparent')};

  padding: 4px;
`;

const ServiceButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: transparent;
  margin: 0.5em;
  && {
    outline: none;
  }
  &:hover {
    ${ServiceIcon} {
      background-color: ${props => (props.selected ? props.theme.helDark : props.theme.helGray)};
    }
  }
`;

const ServicesHeader = styled.div`
  margin-bottom: 1em;
  font-weight: 500;
`;

const ServiceTitle = styled.div`
  margin-top: 0.5em;
  font-weight: 500;
`;

const BerthsLegend = ({
  boatTypes,
  initialValues,
  onSubmit,
  selectService,
  deselectService,
  selectedServices
}: Props) => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">
          <FormattedMessage tagName="h3" id="legend.berths.title" />
          <FormattedMessage tagName="p" id="legend.berths.legend" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Form initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <Fragment>
                <UnRegisteredBoatDetails prefix="boat" noValidate boatTypes={boatTypes} />
                <AutoSave debounce={500} save={onSubmit} />
              </Fragment>
            )}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ServicesHeader>
            <FormattedMessage tagName="span" id="form.services.field.services.label" />
          </ServicesHeader>
        </Col>
      </Row>
      <Row>
        <Services sm={12}>
          {services.map((service, index) => {
            const selected = selectedServices.get(service.value);
            return (
              <ServiceButton
                key={index}
                selected={selected}
                onClick={() =>
                  selected ? deselectService(service.value) : selectService(service.value)
                }
              >
                <ServiceIcon selected={selected} name={service.icon} width="42px" height="42px" />
                <ServiceTitle>
                  <FormattedMessage id={service.label} />
                </ServiceTitle>
              </ServiceButton>
            );
          })}
        </Services>
      </Row>
    </LegendContainer>
  </Legend>
);

export default BerthsLegend;
