import classNames from 'classnames';
import React, { useState } from 'react';
import { Popover as RsPopover, PopoverBody, PopoverProps } from 'reactstrap';

import './popover.scss';

type Props = {
  id: string;
  body: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Pick<PopoverProps, 'placement'>;

const Popover = ({ id, body, children, className, placement }: Props) => {
  const [popoverOpen, togglePopover] = useState(false);

  return (
    <>
      <div
        id={id}
        className={classNames('vene-popover', className)}
        onMouseEnter={() => togglePopover(true)}
        onMouseLeave={() => togglePopover(false)}
      >
        {children}
      </div>

      <RsPopover placement={placement} target={id} isOpen={popoverOpen}>
        <PopoverBody>{body}</PopoverBody>
      </RsPopover>
    </>
  );
};

export default Popover;
