// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import SelectedBerths from '../berths/SelectedBerths';
import SelectedBerthsLegend from '../legends/SelectedBerthsLegend';
import { getBerthFilterByValues } from '../../utils/berths';

import Layout from '../layout/Layout';

const Wrapper = styled.div`
  margin-bottom: 5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`;

const BoatValue = styled.span`
  margin-left: 1ch;
`;

type Props = any;

class BerthPage extends Component<Props> {
  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/form/registered_boat');
  };

  render() {
    const {
      berths,
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      values,
      selectedServices,
      boatTypes,
      locale
    } = this.props;
    const type = get(values, 'boat.type');
    const width = get(values, 'boat.width');
    const length = get(values, 'boat.length');
    const boatType = type ? boatTypes.find(t => t.identifier === type) : undefined;
    const filter = getBerthFilterByValues(values, selectedServices);
    const validSelection = berths
      .filter(berth => selectedBerths.includes(berth.identifier))
      .every(filter);
    return (
      <Layout>
        <Wrapper>
          <SelectedBerthsLegend />

          <Container>
            <FormattedMessage tagName="h1" id="page.berth.selected.title" />
            <FormattedMessage tagName="p" id="page.berth.selected.paragraph.first" />
            <FormattedMessage tagName="p" id="page.berth.selected.paragraph.second" />
            <hr />
            {boatType ? (
              <Container>
                <Row>
                  {type && (
                    <Col md="5">
                      <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
                      <BoatValue>{boatType.name[locale]}</BoatValue>
                    </Col>
                  )}
                  {width && (
                    <Col md="3">
                      <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
                      <BoatValue>{width} m</BoatValue>
                    </Col>
                  )}
                  {length && (
                    <Col md="3">
                      <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
                      <BoatValue>{length} m</BoatValue>
                    </Col>
                  )}
                </Row>
              </Container>
            ) : (
              <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
            )}
            <hr />
            {validSelection || (
              <Alert color="warning">
                <FormattedMessage tagName="strong" id="page.berth.selected.warning.heading" />
              </Alert>
            )}

            <SelectedBerths
              moveUp={moveUp}
              moveDown={moveDown}
              deselectBerth={deselectBerth}
              berthValidator={filter}
              berths={selectedBerths.map(key => berths.find(berth => key === berth.identifier))}
            />

            <ButtonWrapper>
              <Button
                onClick={this.moveToForm}
                outline
                color="primary"
                size="lg"
                disabled={berths.size === 0}
              >
                <FormattedMessage tagName="span" id="page.berth.selected.submit" />
              </Button>
            </ButtonWrapper>
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

export default BerthPage;
