import get from 'lodash/get';
import React, { Fragment, SFC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import { ApplicationState } from '../../../../../redux/types';
import { ApplicationOptions } from '../../../../../types/applicationType';
import { GET_HARBOR_NAME } from '../../../../../utils/graphql';
import Icon from '../../../../common/Icon';
import LocalizedLink from '../../../../common/LocalizedLink';
import SelectedHarborQuery from '../../../../query/SelectedHarborQuery';
import './OldBerthInfo.scss';

const OldBerthInfo: SFC<{ application?: ApplicationState }> = ({ application }) => {
  return (
    <Fragment>
      {application &&
      application.selectedApplicationType === ApplicationOptions.ExchangeApplication ? (
        <Fragment>
          <Row>
            <Col xs={8} md={10} className="vene-overview-info__header">
              <FormattedMessage
                tagName="h6"
                id="page.berth.exchange_application.current_berth.title"
              />
            </Col>
            <Col xs={4} md={2} className="vene-overview-info__edit-icon">
              <LocalizedLink to={`selected-berths`} className="vene-overview-info__edit-link">
                <Icon name="pencil" />
                <FormattedMessage tagName="span" id="page.overview.info.edit" />
              </LocalizedLink>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="vene-overview-info__old-berth-info">
                <div className="vene-overview-info__old-berth-info__name">
                  <FormattedMessage id="page.berth.exchange_application.form.current_harbour_area.label" />
                  <span>:</span>
                  <SelectedHarborQuery query={GET_HARBOR_NAME(application.berthSwitch.harborId)}>
                    {({
                      // TODO: handle errors
                      data
                    }) => (
                      <span>
                        {get(data, 'harbor.properties.name') || application.berthSwitch.harborId}
                      </span>
                    )}
                  </SelectedHarborQuery>
                </div>

                <div className="vene-overview-info__old-berth-info__info-wrapper">
                  <div className="vene-overview-info__old-berth-info__pier">
                    <FormattedMessage id="page.berth.exchange_application.form.pier.title" />
                    <span>:</span>
                    <span>{application.berthSwitch.pier || `-`}</span>
                  </div>

                  <div className="vene-overview-info__old-berth-info__berth-number">
                    <FormattedMessage id="page.berth.exchange_application.form.berth.title" />
                    <span>:</span>
                    <span>{application.berthSwitch.berthNumber || `-`}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Fragment>
      ) : (
        <Row>
          <Col xs={8} md={10} className="vene-overview-info__header">
            <FormattedMessage tagName="h3" id="page.berth.exchange_application.new" />
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default OldBerthInfo;
