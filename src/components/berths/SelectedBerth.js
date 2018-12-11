import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import Icon from '../common/Icon';
import responsive from '../../utils/responsive';

const StyledRow = styled(Row)`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

const BerthName = styled(Col)`
  background-color: #2d72c0;
  color: #fff;
  font-size: 0.875em;
  padding: 0.3em;
  padding-left: 0.8em;
  ${responsive.sm`
    font-size: 1.5em;
  `}
`;

const BerthOptions = styled(Col)`
  display: flex;
  align-content: center;
`;

const StyledButton = styled.button`
  background: none;
  height: 100%;
  margin-left: 1em;
  border: 2px solid ${props => (props.disabled ? 'lightgray' : 'black')};
`;
const DeselectButton = styled.button`
  background: none;
  height: 100%;
  margin-left: 1em;
  border: none;
  float: right;
  color: white;
`;

const Invalid = styled.div`
  position: relative;
  display: inline-block;
`;

const ToolTip = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: red;
  border: 1px solid black;
  z-index: 1;
`;

class SelectedBerth extends Component {
  state = {
    show: false
  };

  toggle = visibility => this.setState(() => ({ show: visibility }));

  render() {
    const { show } = this.state;

    const {
      berth,
      index,
      moveUp,
      moveDown,
      first,
      last,
      deselectBerth,
      requiredServices,
      selectedBoatType
    } = this.props;

    const missingServices = requiredServices.reduce((acc, service) => {
      if (!berth[service]) {
        acc.push(service);
      }
      return acc;
    }, []);

    const notSuitable = !berth.suitable_boat_types.includes(selectedBoatType);

    const isInvalid = notSuitable || missingServices.length > 0;

    return (
      <Container fluid>
        <StyledRow>
          <BerthName xs={9} md={10}>
            <DeselectButton type="button" onClick={() => deselectBerth(berth.identifier)}>
              <Icon name="times" width="30px" />
            </DeselectButton>
            <span key={berth.identifier}>
              {index + 1}. {berth.name.fi}
            </span>
            {isInvalid && (
              <Invalid
                onMouseEnter={() => this.toggle(true)}
                onMouseLeave={() => this.toggle(false)}
              >
                <Icon color="red" name="commenting" width="1em" height="1em" />
                <ToolTip show={show}>
                  {notSuitable && <span>DOES NOT MATCH WITH BOAT TYPE</span>}
                  <ul>
                    {missingServices.map(service => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </ToolTip>
              </Invalid>
            )}
          </BerthName>
          <BerthOptions xs={3} md={2}>
            <Container fluid>
              <Row>
                <Col xs={12} sm={6}>
                  <StyledButton
                    type="button"
                    onClick={() => moveUp(berth.identifier)}
                    disabled={first}
                  >
                    <Icon name="angleUp" width="30px" color={first ? 'lightgray' : 'black'} />
                  </StyledButton>
                </Col>
                <Col xs={12} sm={6}>
                  <StyledButton
                    type="button"
                    onClick={() => moveDown(berth.identifier)}
                    disabled={last}
                  >
                    <Icon name="angleDown" width="30px" color={last ? 'lightgray' : 'black'} />
                  </StyledButton>
                </Col>
              </Row>
            </Container>
          </BerthOptions>
        </StyledRow>
      </Container>
    );
  }
}

export default SelectedBerth;
