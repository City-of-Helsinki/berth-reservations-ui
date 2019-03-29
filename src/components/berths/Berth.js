// @flow
import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Alert, Popover, PopoverBody } from 'reactstrap';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
import classNames from 'classnames';
import Icon from '../common/Icon';
import type { Berth as BerthType } from '../../types/berths';
import { getLocalizedText } from '../../utils/berths';
import Details from './BerthDetails';
import IntlComponent from '../common/IntlComponent';
import Image from '../common/Image';

type Props = {
  berth: BerthType,
  className?: string,
  onClick: Function,
  selected: boolean,
  disabled?: boolean,
  excluded?: boolean,
  intl: IntlShape
};

type State = {
  popoverOpen: boolean
};

class Berth extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      popoverOpen: false
    };
  }

  togglePopover(isOpen) {
    this.setState({
      popoverOpen: isOpen
    });
  }

  render() {
    const { berth, onClick, selected, disabled, excluded, intl, className } = this.props;

    return (
      <Row className={classNames('app-berth', className)}>
        <Col md={3}>
          <IntlComponent
            Component={Alert}
            color="danger"
            id="error.message.invalid_berth"
            visible={selected && excluded}
          />
          <Image
            className="app-berth__image"
            src={berth.image}
            alt={getLocalizedText(berth.name, intl.locale)}
          />
        </Col>

        <Col md={4}>
          <div className="app-berth__summary-wrapper">
            <strong>{getLocalizedText(berth.name, intl.locale)}</strong>

            <div className="app-berth__address">
              {getLocalizedText(berth.street_address, intl.locale)}, {berth.zip_code}{' '}
              {getLocalizedText(berth.municipality, intl.locale)}
              <div />
              {selected ? (
                <Button color={excluded ? 'danger' : 'secondary'} onClick={onClick}>
                  <Icon name="check" width="1em" height="1em" />
                  <FormattedMessage tagName="span" id="page.berths.selected" />
                </Button>
              ) : (
                <Button outline primary="true" onClick={onClick} disabled={disabled}>
                  + <FormattedMessage tagName="span" id="page.berths.select" />
                </Button>
              )}
              <div className="app-berth__availability-level">
                <Button
                  className="app-berth__availability-level__button"
                  id={`availability_${berth.identifier}`}
                  color="link"
                  onMouseEnter={() => this.togglePopover(true)}
                  onMouseLeave={() => this.togglePopover(false)}
                >
                  <Fragment>
                    <span
                      className={classNames(
                        'app-berth__availability-level__marker',
                        berth.availability_level ? 'default' : berth.availability_level
                      )}
                    />
                    <FormattedMessage
                      tagName="span"
                      id={`page.berths.status.${berth.availability_level}.title`}
                    />
                  </Fragment>
                </Button>

                <Popover
                  placement="right"
                  target={`availability_${berth.identifier}`}
                  isOpen={this.state.popoverOpen}
                >
                  <PopoverBody>
                    <FormattedMessage
                      tagName="span"
                      id={`page.berths.status.${berth.availability_level}.description`}
                    />
                  </PopoverBody>
                </Popover>
              </div>
              <a
                className="app-berth__website-link"
                target="_blank"
                rel="noopener noreferrer"
                href={berth.www_url}
              >
                <FormattedMessage tagName="span" id="page.berths.website" />
                <Icon name="arrowRight" />
              </a>
            </div>
          </div>
        </Col>

        <Col md={5}>
          <div className="app-berth__details-wrapper">
            <Details
              available
              value={berth.number_of_places}
              titleId="page.berths.number_of_places"
            />
            <Details available value={berth.maximum_width} titleId="page.berths.maximum_width" />

            <Details
              available={!!berth.waste_collection}
              icon="trash"
              titleId="page.berths.waste_collection"
            />

            <Details
              available={!!berth.electricity}
              icon="plug"
              titleId="page.berths.electricity"
            />

            <Details available={!!berth.gate} icon="fence" titleId="page.berths.fence" />

            <Details available={!!berth.water} icon="waterTap" titleId="page.berths.water_tap" />

            <Details
              available={!!berth.lighting}
              icon="streetLight"
              titleId="page.berths.lighting"
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default injectIntl(Berth);
