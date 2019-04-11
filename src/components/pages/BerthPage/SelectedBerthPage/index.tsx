import { get } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert, Button, Col, Container, Row } from 'reactstrap';

import { getBerthFilterByValues, getBerths } from '../../../../utils/berths';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../../utils/graphql';
import SelectedBerths from '../../../berths/SelectedBerths';
import BoatsBerthsQuery from '../../../common/BoatsBerthsQuery';
import Icon from '../../../common/Icon';
import LocalizedLink from '../../../common/LocalizedLink';
import Layout from '../../../layout';
import SelectedBerthsLegend from '../../../legends/BerthLegend/SelectedBerthLegend';

import { SelectedServices } from '../../../../types/services';
import { Berths, SelectedBerths as SelectedBerthsType } from '../../../berths/types';
import './SelectedBerthPage.scss';

interface Props {
  selectedBerths: SelectedBerthsType;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
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
      selectedBerths,
      deselectBerth,
      moveUp,
      moveDown,
      values,
      selectedServices
    } = this.props;
    const type = get(values, 'boatType');
    const width = get(values, 'boatWidth');
    const length = get(values, 'boatLength');
    const filter = getBerthFilterByValues(values, selectedServices);

    return (
      <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
        {({
          // error, TODO: handle errors
          data: { boatTypes, harbors } = { boatTypes: [], harbors: { edges: [] } }
        }) => {
          const berthsData = harbors ? harbors.edges : [];
          const berths = getBerths(berthsData);

          const boatType = type ? boatTypes.find(t => t.identifier === type) : undefined;

          const validSelection = berths
            .filter(berth => berth && selectedBerths.includes(berth.identifier))
            .every(filter);

          return (
            <Layout>
              <SelectedBerthsLegend />
              <Container className="app-BerthPageSelected__wrapper">
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
                              <span className="app-BerthPageSelected__boat-value">
                                {boatType.name}
                              </span>
                            </Col>
                          )}
                          {width && (
                            <Col md="3">
                              <FormattedMessage tagName="span" id="page.overview.info.boat_width" />
                              :<span className="app-BerthPageSelected__boat-value">{width} m</span>
                            </Col>
                          )}
                          {length && (
                            <Col md="3">
                              <FormattedMessage
                                tagName="span"
                                id="page.overview.info.boat_length"
                              />
                              :<span className="app-BerthPageSelected__boat-value">{length} m</span>
                            </Col>
                          )}
                        </Row>
                      </Container>
                    ) : (
                      <div className="app-BerthPageSelected__notice">
                        <Icon name="exclamationCircle" />
                        <LocalizedLink to="">
                          <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
                        </LocalizedLink>
                      </div>
                    )}
                    <hr />
                    {validSelection || (
                      <Alert color="warning">
                        <FormattedMessage
                          tagName="strong"
                          id="page.berth.selected.warning.heading"
                        />
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
                        ) as Berths // TODO: fix the types
                      }
                    />
                  </Col>
                </Row>
              </Container>
              <div className="app-BerthPageSelected__button-wrapper">
                <Container>
                  <Row>
                    <Col xs={12}>
                      <div className="app-BerthPageSelected__button-wrapper__button-groups">
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
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Layout>
          );
        }}
      </BoatsBerthsQuery>
    );
  }
}

export default BerthPage;
