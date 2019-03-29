import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import SelectedBerths from '../berths/SelectedBerths';
import SelectedBerthsLegend from '../legends/SelectedBerthsLegend';
import { getBerthFilterByValues } from '../../utils/berths';
import responsive from '../../utils/responsive';
import Layout from '../layout/Layout';
import Icon from '../common/Icon';
import LocalizedLink from '../common/LocalizedLink';

import { Berths as BerthsType, SelectedBerths as SelectedBerthsType } from '../../types/berths';
import { SelectedServices } from '../../types/services';
import { BoatTypes } from '../../types/boatTypes';

const PrevnextWrapperWrapper = styled.div`
  background-color: ${props => props.theme.helLight};
  padding: 1em 0 3em;
`;

const PrevnextWrapper = styled(Col).attrs({
  xs: 12
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${responsive.sm`
    flex-direction: row;
  `}
`;

const BoatValue = styled.span`
  margin-left: 1ch;
`;

const PageContainer = styled(Container)`
  padding-top: 3em;
  padding-bottom: 3em;
`;

const Notice = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
`;

const NoticeIcon = styled(Icon)`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

type Props = {
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
};

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
        <PageContainer>
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
                <Notice>
                  <NoticeIcon color="red" name="exclamationCircle" width="1.5em" height="1.5em" />
                  <LocalizedLink to="">
                    <FormattedMessage tagName="span" id="page.berth.selected.info_text" />
                  </LocalizedLink>
                </Notice>
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
        </PageContainer>
        <PrevnextWrapperWrapper>
          <Container>
            <Row>
              <PrevnextWrapper>
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
              </PrevnextWrapper>
            </Row>
          </Container>
        </PrevnextWrapperWrapper>
      </Layout>
    );
  }
}

export default BerthPage;
