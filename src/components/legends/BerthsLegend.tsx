import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import Icon, { IconNames } from '../common/Icon';
import AutoSave from '../forms/AutoSave';
import Form from '../forms/Form';
import UnRegisteredBoatDetails from '../forms/fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../forms/Selects';
import Steps from '../steps/Steps';

import { SelectedServices } from '../../types/services';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
`;

const LegendContainer = styled(Container)`
  padding-bottom: 3em;
`;

type Props = {
  initialValues: object;
  onSubmit: Function;
  selectService: Function;
  deselectService: Function;
  selectedServices: SelectedServices;
} & WithBoatType;

const services: Array<{
  label: string;
  value: 'electricity' | 'water' | 'waste_collection' | 'gate' | 'lighting';
  icon: IconNames;
}> = [
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

const FormHeader = styled.div`
  margin-bottom: 2em;
`;

const Services = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
  margin: -0.75em;
`;

const ServiceIcon = styled(Icon)<{ selected: boolean }>`
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${props => (props.selected ? 'white' : 'transparent')};
  padding: 4px;
`;

const ServiceButton = styled.button<{ selected: boolean }>`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: transparent;
  padding: 0 0.75em;
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
  margin-bottom: 1.5em;
  font-weight: 500;
`;

const ServiceTitle = styled.div`
  margin: 0.5em 0;
  font-size: 0.8rem;
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
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <Steps
            steps={[
              {
                key: 'berths',
                completed: false,
                current: true,
                linkTo: undefined
              },
              {
                key: 'selected_berths',
                completed: false,
                current: false,
                linkTo: undefined
              },
              {
                key: 'boat_information',
                completed: false,
                current: false,
                linkTo: undefined
              },
              {
                key: 'applicant',
                completed: false,
                current: false,
                linkTo: undefined
              },
              {
                key: 'send_application',
                completed: false,
                current: false,
                linkTo: undefined
              }
            ]}
          />

          <FormHeader>
            <FormattedMessage tagName="h3" id="legend.berths.title" />
            <FormattedMessage tagName="p" id="legend.berths.legend" />
          </FormHeader>

          <Form initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <Fragment>
                <UnRegisteredBoatDetails fieldsNotRequired boatTypes={boatTypes} />
                <AutoSave debounce={500} save={onSubmit} />
              </Fragment>
            )}
          </Form>

          <ServicesHeader>
            <FormattedMessage tagName="span" id="form.services.field.services.label" />
          </ServicesHeader>

          <Services>
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
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);

export default BerthsLegend;
