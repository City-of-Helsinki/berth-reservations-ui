import classNames from 'classnames';
import BerthDetails from './BerthDetails';

import React, { Component, Fragment } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Alert, Button, Col, Popover, PopoverBody, Row } from 'reactstrap';
import { getLocalizedText } from '../../../utils/berths';
import Icon from '../../common/Icon';
import Image from '../../common/Image';
import IntlComponent from '../../common/IntlComponent';
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
    const { berth, onClick, selected, disabled, excluded, intl, className } = this.props;
    const isVisible = selected && excluded ? true : 'false';
    // TODO: Remove this h@ck

    return (
      <div className={classNames('app-Berth', className)}>
        <Row>
          <Col md={3}>
            <IntlComponent
              Component={Alert}
              color="danger"
              id="error.message.invalid_berth"
              visible={isVisible}
            />
            <Image
              className="app-Berth__image"
              src={berth.image}
              alt={getLocalizedText(berth.name, intl.locale)}
            />
          </Col>

          <Col md={4}>
            <div className="app-Berth__summary-wrapper">
              <strong>{getLocalizedText(berth.name, intl.locale)}</strong>

              <div className="app-Berth__address">
                {getLocalizedText(berth.street_address, intl.locale)}, {berth.zip_code}{' '}
                {getLocalizedText(berth.municipality, intl.locale)}
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
                <div className="app-Berth__availability-level">
                  <Button
                    className="app-Berth__availability-level__button"
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
                          'app-Berth__availability-level__marker',
                          berth.availability_level ? berth.availability_level : 'default'
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
                  className="app-Berth__website-link"
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
            <div className="app-Berth__details-wrapper">
              <BerthDetails
                available
                value={berth.number_of_places}
                titleId="page.berths.number_of_places"
              />
              <BerthDetails
                available
                value={berth.maximum_width}
                titleId="page.berths.maximum_width"
              />

              <BerthDetails
                available={!!berth.waste_collection}
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
