import classNames from 'classnames';
import React, { Component, Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert, Button, Col, Popover, PopoverBody, Row } from 'reactstrap';

import Icon from '../../common/Icon';
import Image from '../../common/Image';
import IntlComponent from '../../common/IntlComponent';
import BerthDetails from './BerthDetails';

import './Berth.scss';

import { Berth as BerthType } from './types';

type Props = {
  berth: BerthType;
  className?: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  selected: boolean;
  disabled?: boolean;
  excluded?: boolean;
} & InjectedIntlProps;

interface State {
  popoverOpen: boolean;
}

class Berth extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      popoverOpen: false
    };
  }

  togglePopover = (isOpen: boolean) => {
    this.setState({
      popoverOpen: isOpen
    });
  };

  render() {
    const { berth, excluded, onClick, selected, disabled, className } = this.props;

    return (
      <div className={classNames('vene-berth', className)}>
        <Row>
          <Col md={3}>
            <div className="vene-berth__image">
              <IntlComponent
                Component={Alert}
                color="danger"
                id="error.message.invalid_berth"
                isOpen={selected && excluded}
              />
              <Image src={berth.imageFile} alt={berth.name} />
            </div>
          </Col>

          <Col md={4}>
            <div className="vene-berth__summary-wrapper">
              <strong>{berth.name}</strong>

              <div className="vene-berth__address">
                {berth.streetAddress}, {berth.zipCode} {berth.municipality}
                <div />
                {selected ? (
                  <Button color={excluded ? 'danger' : 'secondary'} onClick={onClick}>
                    <Icon name="check" />
                    <FormattedMessage tagName="span" id="page.berths.selected" />
                  </Button>
                ) : (
                  <Button outline primary="true" onClick={onClick} disabled={disabled}>
                    + <FormattedMessage tagName="span" id="page.berths.select" />
                  </Button>
                )}
                <div className="vene-berth__availability-level">
                  <Button
                    className="vene-berth__availability-level__button"
                    id={`availability_${berth.identifier}`}
                    color="link"
                    // TODO: fix this
                    // tslint:disable-next-line: jsx-no-lambda
                    onMouseEnter={() => this.togglePopover(true)}
                    // tslint:disable-next-line: jsx-no-lambda
                    onMouseLeave={() => this.togglePopover(false)}
                  >
                    <Fragment>
                      <span
                        className={classNames(
                          'vene-berth__availability-level__marker',
                          berth.availabilityLevel ? berth.availabilityLevel.identifier : 'default'
                        )}
                      />
                      {berth.availabilityLevel.title}
                    </Fragment>
                  </Button>

                  <Popover
                    placement="right"
                    target={`availability_${berth.identifier}`}
                    isOpen={this.state.popoverOpen}
                  >
                    <PopoverBody>
                      {berth.availabilityLevel.description || berth.availabilityLevel.title}
                    </PopoverBody>
                  </Popover>
                </div>
                <a
                  className="vene-berth__website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={berth.wwwUrl}
                >
                  <FormattedMessage tagName="span" id="page.berths.website" />
                  <Icon name="arrowRight" />
                </a>
              </div>
            </div>
          </Col>

          <Col md={5}>
            <div className="vene-berth__details-wrapper">
              <BerthDetails
                available
                value={berth.numberOfPlaces}
                titleId="page.berths.number_of_places"
              />
              <BerthDetails
                available
                value={berth.maximumWidth}
                titleId="page.berths.maximum_width"
              />

              <BerthDetails
                available={!!berth.wasteCollection}
                iconName="trash"
                titleId="page.berths.waste_collection"
              />

              <BerthDetails
                available={!!berth.electricity}
                iconName="plug"
                titleId="page.berths.electricity"
              />

              <BerthDetails available={!!berth.gate} iconName="fence" titleId="page.berths.fence" />

              <BerthDetails
                available={!!berth.water}
                iconName="waterTap"
                titleId="page.berths.water_tap"
              />

              <BerthDetails
                available={!!berth.lighting}
                iconName="streetLight"
                titleId="page.berths.lighting"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(Berth);
