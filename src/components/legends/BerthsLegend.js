// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Form from '../forms/Form';
import AutoSave from '../forms/AutoSave';
import UnRegisteredBoatDetails from '../forms/fragments/UnRegisteredBoatDetails';
import Services from '../forms/fragments/Services';
import type { WithBoatType } from '../forms/Selects';

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
  onSubmit: Function
} & WithBoatType;

export default ({ boatTypes, initialValues, onSubmit }: Props) => (
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
                <Services prefix="services" noValidate />
                <AutoSave debounce={500} save={onSubmit} />
              </Fragment>
            )}
          </Form>
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);
