// @flow
import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Alert } from 'reactstrap';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
import Icon from '../common/Icon';
import type { Berth as BerthType } from '../../types/berths';
import responsive from '../../utils/responsive';
import { getLocalizedText } from '../../utils/berths';
import IntlComponent from '../common/IntlComponent';

const Details = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 33.33%;
  height: auto;

  opacity: ${props => (props.available ? 1 : 0.15)};

  &:last-child {
    flex-grow: 1;
  }

  ${responsive.md`
    justify-content: right;
    flex: 1 0 50%;
    flex-direction: column;
    height: 1px;
  `}
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  padding: 1em;
  padding-top: 0px;
  white-space: nowrap;
  ${responsive.md`
    flex-direction: column;
    padding: 1em 0;
  `}
`;

const DetailsIcon = styled(Icon).attrs({
  height: '42px',
  width: '42px'
})`
  margin: 4px;
  display: none;
  text-align: center;
  ${responsive.md`
    display: block;
  `}
`;

const DetailsValue = styled.span`
  margin-left: 1ch;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  order: 2;

  ${responsive.md`
    margin: 4px 0;
    line-height: 42px;
    height: 42px;
    font-size: 28px;
    order: -1;
  `}
`;

const DetailsTitle = styled.span`
  text-align: center;

  ${responsive.md`
    font-size: 14px;
  `}
  ${responsive.lg`
    font-size: inherit;
  `}
`;

const BerthImage = styled.img`
  object-fit: cover;
  height: 12em;
  width: 100%;

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
  position: absolute;
  margin: 10px 25px 0px 10px;
  padding: 8px;
  font-size: 12px;
`;

const AvailabilityLevel = styled.div`
  margin-top: 0.5em;
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

const Berth = ({ berth, className, onClick, selected, disabled, excluded, intl }: Props) => (
  <Row className={className}>
    <Col xs={12}>
      <StyledDiv>
        <Row>
          <Col md={3}>
            <IntlComponent
              Component={ErrorAlert}
              id="error.message.invalid_berth"
              // $FlowFixMe
              visible={excluded ? 'true' : 'false'}
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
              {/* TODO: Bring the actual value for availability level */}
              <AvailabilityLevel>
                <AvailabilityLevelMarker level={berth.availability_level} />
                <span>
                  <FormattedMessage
                    tagName="span"
                    id={`page.berths.status.${berth.availability_level}`}
                  />
                </span>
              </AvailabilityLevel>
              <WebsiteLink rel="noopener" target="_blank" href={berth.www_url}>
                <FormattedMessage tagName="span" id="page.berths.website" />
                <TypeIcon name="arrowRight" />
              </WebsiteLink>
            </SummaryWrapper>
          </Col>
          <Col md={5}>
            <DetailsWrapper>
              <Details available={true}>
                <DetailsValue>{berth.number_of_places}</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.number_of_places" />
                </DetailsTitle>
              </Details>
              <Details available={true}>
                <DetailsValue>{berth.maximum_width}&#8202;m</DetailsValue>
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.maximum_width" />
                </DetailsTitle>
              </Details>
              <Details available={berth.waste_collection}>
                <DetailsIcon name="trash" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.waste_collection" />
                </DetailsTitle>
              </Details>
              <Details available={berth.electricity}>
                <DetailsIcon name="plug" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.electricity" />
                </DetailsTitle>
              </Details>
              <Details available={berth.gate}>
                <DetailsIcon name="fence" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.fence" />
                </DetailsTitle>
              </Details>
              <Details available={berth.water}>
                <DetailsIcon name="waterTap" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.water_tap" />
                </DetailsTitle>
              </Details>
              <Details available={berth.lighting}>
                <DetailsIcon name="streetLight" />
                <DetailsTitle>
                  <FormattedMessage tagName="span" id="page.berths.lighting" />
                </DetailsTitle>
              </Details>
            </DetailsWrapper>
          </Col>
        </Row>
      </StyledDiv>
    </Col>
  </Row>
);

export default injectIntl(Berth);
