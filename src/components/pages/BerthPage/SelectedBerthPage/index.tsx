import { get } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Row } from 'reactstrap';

import { getBerthFilterByValues } from '../../../../utils/berths';
import SelectedBerths from '../../../berths/SelectedBerths';
import Icon from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import Layout from '../../../layout';
import SelectedBerthsLegend from '../../../legends/BerthLegend/SelectedBerthLegend';

import { BoatTypes } from '../../../../types/boatTypes';
import { SelectedServices } from '../../../../types/services';
import { Berths } from '../../../berths/types';
import './SelectedBerthPage.scss';

interface Props {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  moveToForm: () => {};
  handlePrevious: () => {};
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  boatTypes: BoatTypes;
  values: {};
  steps: Array<{
    key: string;
    completed: boolean;
    current: boolean;
    linkTo?: string;
  }>;
}

class SelectedBerthPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
  }

  render() {
    const {
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      values,
      selectedServices,
      boatTypes,
      handlePrevious,
      moveToForm,
      steps
    } = this.props;
    const type = get(values, 'boatType');
    const width = get(values, 'boatWidth');
    const length = get(values, 'boatLength');
    const filter = getBerthFilterByValues(values, selectedServices);

    const boatType = boatTypes && type ? boatTypes.find(t => !!t && t.id === type) : undefined;
    const validSelection = selectedBerths.every(filter);

    return (
      <Layout>
        <SelectedBerthsLegend steps={steps} />
        <Container className="vene-berth-page-selected__wrapper">
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
                        <span className="vene-berth-page-selected__boat-value">
                          {boatType.name}
                        </span>
                      </Col>
                    )}
                    {width && (
                      <Col md="3">
                        <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
                        <span className="vene-berth-page-selected__boat-value">{width} m</span>
                      </Col>
                    )}
                    {length && (
                      <Col md="3">
                        <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
                        <span className="vene-berth-page-selected__boat-value">{length} m</span>
                      </Col>
                    )}
                  </Row>
                </Container>
              ) : (
                <div className="vene-berth-page-selected__notice">
                  <Icon name="exclamationCircle" />
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
                berths={selectedBerths}
              />
            </Col>
          </Row>
        </Container>
        <div className="vene-berth-page-selected__button-wrapper">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="vene-berth-page-selected__button-wrapper__button-groups">
                  <Button color="link" type="button" onClick={handlePrevious}>
                    <FormattedMessage id="form.wizard.button.previous" />
                  </Button>
                  <Button
                    onClick={moveToForm}
                    outline
                    color="primary"
                    size="lg"
                    disabled={selectedBerths.size === 0}
                  >
                    <FormattedMessage tagName="span" id="page.berth.selected.submit" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default SelectedBerthPage;
