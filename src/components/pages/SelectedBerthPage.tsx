import { get } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Row } from 'reactstrap';
import { getBerthFilterByValues } from '../../utils/berths';
import SelectedBerths from '../berths/SelectedBerths';
import Icon from '../common/Icon';
import LocalizedLink from '../common/LocalizedLink';
import Layout from '../layout/Layout';
import SelectedBerthsLegend from '../legends/SelectedBerthsLegend';

import { BoatTypes } from '../../types/boatTypes';
import { SelectedServices } from '../../types/services';
import { Berths as BerthsType, SelectedBerths as SelectedBerthsType } from '../berths/types';

interface Props {
  boatTypes: BoatTypes;
  berths: BerthsType;
  selectedBerths: SelectedBerthsType;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
  locale: string;
  values: {};
}

class BerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  moveToForm = async () => {
    const { localePush } = this.props;
    await localePush('/form/registered_boat');
  };

  handlePrevious = async () => {
    const { localePush } = this.props;
    await localePush('/berths');
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
    const type = get(values, 'boat_type');
    const width = get(values, 'boat_width');
    const length = get(values, 'boat_length');
    const boatType = type ? boatTypes.find(t => t.identifier === type) : undefined;
    const filter = getBerthFilterByValues(values, selectedServices);
    const validSelection = berths
      .filter(berth => selectedBerths.includes(berth.identifier))
      .every(filter);
    return (
      <Layout>
        <SelectedBerthsLegend />
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <FormattedMessage tagName="h1" id="page.berth.selected.title" />
              <hr />
              {boatType ? (
                <Container>
                  <Row>
                    {type && (
                      <Col md="5">
                        <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
                        <span>{boatType.name[locale]}</span>
                      </Col>
                    )}
                    {width && (
                      <Col md="3">
                        <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
                        <span>{width} m</span>
                      </Col>
                    )}
                    {length && (
                      <Col md="3">
                        <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
                        <span>{length} m</span>
                      </Col>
                    )}
                  </Row>
                </Container>
              ) : (
                <div>
                  <Icon color="red" name="exclamationCircle" width="1.5em" height="1.5em" />
                  <LocalizedLink to="">
                    <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
                  </LocalizedLink>
                </div>
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
                berths={
                  selectedBerths.map(key =>
                    berths.find(berth => key === berth.identifier)
                  ) as BerthsType
                }
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12}>
              <Button color="link" type="button" onClick={this.handlePrevious}>
                <FormattedMessage id="form.wizard.button.previous" />
              </Button>
              <Button
                onClick={this.moveToForm}
                outline
                color="primary"
                size="lg"
                disabled={berths.size === 0}
              >
                <FormattedMessage tagName="span" id="page.berth.selected.submit" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default BerthPage;
