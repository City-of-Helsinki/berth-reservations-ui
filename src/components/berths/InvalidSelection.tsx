import React, { PureComponent } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import styled from 'styled-components';

import Icon from '../common/Icon';
import IntlComponent from '../common/IntlComponent';

const Invalid = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0.25em;
`;

class InvalidSelection extends PureComponent<any, any> {
  state = {
    show: false
  };

  toggle = (visibility: boolean) => this.setState(() => ({ show: visibility }));

  render() {
    const { show } = this.state;
    const { id = 'default' } = this.props;
    const errorMessageId =
      id === 'default' ? 'error.message.invalid_berth_selection' : 'error.message.invalid_berth';
    return (
      <Invalid
        id={id}
        onMouseEnter={() => this.toggle(true)}
        onMouseLeave={() => this.toggle(false)}
      >
        <Icon color="red" name="exclamationCircle" width="1em" height="1em" />
        <Popover placement="bottom" isOpen={show} target={id} toggle={() => this.toggle(false)}>
          <IntlComponent Component={PopoverBody} id={errorMessageId} />
        </Popover>
      </Invalid>
    );
  }
}

export default InvalidSelection;
