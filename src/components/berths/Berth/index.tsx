import classNames from 'classnames';
import React, { Component, Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert, Button, Col, Popover, PopoverBody, Row } from 'reactstrap';

import { genValidSelector } from '../../../utils/berths';
import Icon from '../../common/Icon';
import Image from '../../common/Image';
import IntlComponent from '../../common/IntlComponent';
import BerthDetails from './BerthDetails';

import './Berth.scss';

import { BerthType } from '../../../types/berth';
import { WinterStorageType } from '../../../types/winterStorage';

type Props = {
  berth: BerthType | WinterStorageType;
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

  getBerthDetails = (berth: BerthType | WinterStorageType) => {
    const maximumWidth = berth.maximumWidth && berth.maximumWidth / 100;
    const maximumLength = berth.maximumLength && berth.maximumLength / 100;

    switch (berth.__typename) {
      case 'HarborType':
        return [
          <BerthDetails
            key="numberOfPlaces"
            available
            value={berth.numberOfPlaces}
            titleId="page.berths.number_of_places"
          />,
          <BerthDetails
            key="maximumWidth"
            available
            value={maximumWidth}
            titleId="page.berths.maximum_width"
          />,
          <BerthDetails
            key="wasteCollection"
            available={berth.wasteCollection}
            iconName="trash"
            titleId="page.berths.waste_collection"
          />,
          <BerthDetails
            key="electricity"
            available={berth.electricity}
            iconName="plug"
            titleId="page.berths.electricity"
          />,

          <BerthDetails
            key="gate"
            available={berth.gate}
            iconName="fence"
            titleId="page.berths.fence"
          />,
          <BerthDetails
            key="water"
            available={berth.water}
            iconName="waterTap"
            titleId="page.berths.water_tap"
          />,
          <BerthDetails
            key="lighting"
            available={berth.lighting}
            iconName="streetLight"
            titleId="page.berths.lighting"
          />
        ];
      default:
        return [
          <BerthDetails
            key="maximumWidth"
            available
            value={maximumWidth}
            titleId="page.berths.maximum_length"
          />,
          <BerthDetails
            key="maximumLength"
            available
            value={maximumLength}
            titleId="page.berths.maximum_width"
          />,
          <BerthDetails
            key="appointed"
            available={!!berth.numberOfMarkedPlaces}
            iconName="divided"
            titleId="page.berths.appointed"
          />,
          <BerthDetails
            key="gate"
            available={berth.gate}
            iconName="fence"
            titleId="page.berths.fence"
          />,
          <BerthDetails
            key="electricity"
            available={berth.electricity}
            iconName="plug"
            titleId="page.berths.electricity"
          />,
          <BerthDetails
            key="summerStorageForDockingEquipment"
            available={berth.summerStorageForDockingEquipment}
            iconName="trestle"
            titleId="page.berths.storage_for_docking_equip"
          />,
          <BerthDetails
            key="water"
            available={berth.water}
            iconName="waterTap"
            titleId="page.berths.water_tap"
          />,
          <BerthDetails
            key="summerStorageForTrailers"
            available={berth.summerStorageForTrailers}
            iconName="dollyEmpty"
            titleId="page.berths.storage_for_docking_equip"
          />
        ];
    }
  };

  render() {
    const { berth, excluded = false, onClick, selected, disabled, className } = this.props;
    const tooltipId = genValidSelector(`availability_${berth.id}`);

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
              {/* TODO: add placeholder image */}
              {<Image src={berth.imageFile || ''} alt={berth.name || `berth's name`} />}
            </div>
          </Col>

          <Col md={4}>
            <div className="vene-berth__summary-wrapper">
              <strong>{berth.name}</strong>

              <div className="vene-berth__address">
                {berth.streetAddress}, {berth.zipCode} {berth.municipality}
              </div>

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
              {berth.availabilityLevel && (
                <div className="vene-berth__availability-level">
                  <Button
                    className="vene-berth__availability-level__button"
                    id={tooltipId}
                    color="link"
                    onMouseEnter={() => this.togglePopover(true)}
                    onMouseLeave={() => this.togglePopover(false)}
                  >
                    <Fragment>
                      <span
                        className={classNames(
                          'vene-berth__availability-level__marker',
                          `vene-berth__availability-level__marker--${berth.availabilityLevel.id}`
                        )}
                      />
                      {berth.availabilityLevel.title}
                    </Fragment>
                  </Button>

                  <Popover placement="right" target={tooltipId} isOpen={this.state.popoverOpen}>
                    <PopoverBody>
                      {berth.availabilityLevel.description || berth.availabilityLevel.title}
                    </PopoverBody>
                  </Popover>
                </div>
              )}
              {berth.wwwUrl && (
                <a
                  className="vene-berth__website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={berth.wwwUrl}
                >
                  <FormattedMessage tagName="span" id="page.berths.website" />
                  <Icon name="arrowRight" />
                </a>
              )}
            </div>
          </Col>

          <Col md={5}>
            <div className="vene-berth__details-wrapper">{this.getBerthDetails(berth)}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(Berth);
