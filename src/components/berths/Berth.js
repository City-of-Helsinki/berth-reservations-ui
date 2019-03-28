// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Alert, Popover, PopoverBody } from 'reactstrap';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
import Icon from '../common/Icon';
import type { Berth as BerthType } from '../../types/berths';
import responsive from '../../utils/responsive';
import { getLocalizedText } from '../../utils/berths';
import Details from './BerthDetails';
import IntlComponent from '../common/IntlComponent';

const BerthImage = styled.img`
  object-fit: cover;
  height: 12em;
  width: 100%;
  display: none;

  ${responsive.md`
    height: 100%;
    display: block;
  `}
`;

const SummaryWrapper = styled.div`
  padding: 1em;

  ${responsive.md`
    padding: 1em 0;
  `}
  > * {
    display: block;
  }
  strong {
    line-height: 1em;
  }
  small {
    font-size: 14px;
  }
  a {
    color: black;
  }
`;

const ButtonIcon = styled(Icon)`
  display: none;
  ${responsive.md`
    display: inline-block;
  `}
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
`;

const BerthAddress = styled.div`
  margin: 0.5em 0;
`;

const WebsiteLink = styled.a`
  margin-top: 0.5em;
  font-weight: 700;
`;

const StyledDiv = styled.div`
  background-color: ${props => props.theme.helLight};
`;

type Props = {
  berth: BerthType,
  className?: string,
  onClick: Function,
  selected: boolean,
  disabled?: boolean,
  excluded?: boolean,
  intl: IntlShape
};

const Heading = styled.strong`
  font-size: 22px;
  ${responsive.md`
    font-size: 24px;
  `}
  ${responsive.lg`
    font-size: 28px;
  `}
`;

const ErrorAlert = styled(Alert).attrs({
  color: 'danger'
})`
  display: ${props => (props.visible === 'true' ? 'block' : 'none')};
  margin: 10px 25px 0px 10px;
  padding: 8px;
  font-size: 12px;

  ${responsive.md`
    position: absolute;
  `}
`;

const AvailabilityLevel = styled.div`
  margin-top: 0.5em;
`;

const AvailabilityButton = styled(Button)`
  padding: 0;
  &.btn-link.btn-link:hover {
    background-color: transparent !important;
  }
`;

const AvailabilityLevelMarker = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 0.3em;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.level) {
      case 'red':
        return props.theme.helBrick;
      case 'yellow':
        return props.theme.helSummer;
      case 'green':
        return props.theme.helTram;
      default:
        return '#ffffff';
    }
  }};
`;

const TypeIcon = styled(Icon).attrs({
  height: '1em',
  width: '1em'
})`
  display: inline-block;
`;

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
    const { berth, className, onClick, selected, disabled, excluded, intl } = this.props;

    return (
      <Row className={className}>
        <Col xs={12}>
          <StyledDiv>
            <Row>
              <Col md={3}>
                <IntlComponent
                  Component={ErrorAlert}
                  id="error.message.invalid_berth"
                  // $FlowFixMe
                  visible={selected && excluded ? 'true' : 'false'}
                />
                <BerthImage src={berth.image} alt={getLocalizedText(berth.name, intl.locale)} />
              </Col>
              <Col md={4}>
                <SummaryWrapper>
                  <Heading>{getLocalizedText(berth.name, intl.locale)}</Heading>

                  <BerthAddress>
                    {getLocalizedText(berth.street_address, intl.locale)}, {berth.zip_code}{' '}
                    {getLocalizedText(berth.municipality, intl.locale)}
                  </BerthAddress>
                  {selected ? (
                    <Button color={excluded ? 'danger' : 'secondary'} onClick={onClick}>
                      <ButtonIcon name="check" width="1em" height="1em" />
                      <FormattedMessage tagName="span" id="page.berths.selected" />
                    </Button>
                  ) : (
                    <Button outline primary="true" onClick={onClick} disabled={disabled}>
                      + <FormattedMessage tagName="span" id="page.berths.select" />
                    </Button>
                  )}
                  <AvailabilityLevel>
                    <AvailabilityButton
                      id={`availability_${berth.identifier}`}
                      color="link"
                      onMouseEnter={() => this.togglePopover(true)}
                      onMouseLeave={() => this.togglePopover(false)}
                    >
                      <AvailabilityLevelMarker level={berth.availability_level} />
                      <FormattedMessage
                        tagName="span"
                        id={`page.berths.status.${berth.availability_level}.title`}
                      />
                    </AvailabilityButton>
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
                  </AvailabilityLevel>
                  <WebsiteLink rel="noopener" target="_blank" href={berth.www_url}>
                    <FormattedMessage tagName="span" id="page.berths.website" />
                    <TypeIcon name="arrowRight" />
                  </WebsiteLink>
                </SummaryWrapper>
              </Col>
              <Col md={5}>
                <div className="app-berth__details-wrapper">
                  <Details
                    available
                    value={berth.number_of_places}
                    titleId="page.berths.number_of_places"
                  />
                  <Details
                    available
                    value={berth.maximum_width}
                    titleId="page.berths.maximum_width"
                  />

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

                  <Details
                    available={!!berth.water}
                    icon="waterTap"
                    titleId="page.berths.water_tap"
                  />

                  <Details
                    available={!!berth.lighting}
                    icon="streetLight"
                    titleId="page.berths.lighting"
                  />
                </div>
              </Col>
            </Row>
          </StyledDiv>
        </Col>
      </Row>
    );
  }
}

export default injectIntl(Berth);
