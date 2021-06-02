import React from 'react';
import { Button, IconFaceSad } from 'hds-react';

import { LocalePush, withMatchParamsHandlers } from '../../../../common/utils/container';
import './noPlaces.scss';

interface NoPlacesProps {
  message: string;
  buttonLabel: string;
  linkTo: string;
  localePush: LocalePush;
}

const NoPlaces = ({ message, buttonLabel, linkTo, localePush }: NoPlacesProps) => {
  return (
    <div>
      <IconFaceSad size="m" aria-hidden="true" /> <strong>{message}</strong>
      <br />
      <Button className="vene-no-places__action-btn" onClick={() => localePush(linkTo)}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default withMatchParamsHandlers(NoPlaces);
