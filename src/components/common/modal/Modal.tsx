import classNames from 'classnames';
import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Button, Modal as RSModal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import './modal.scss';

type Props = {
  title?: string;
  body?: string;
  className?: string;
  isOpen: boolean;
  handleToggle: () => void;
  handleAccept?: (e: React.SyntheticEvent) => void;
} & InjectedIntlProps;

const Modal = ({
  title,
  body,
  className,
  isOpen,
  handleToggle,
  handleAccept,
  intl: { formatMessage }
}: Props) => {
  const onAccept = (e: React.SyntheticEvent) => {
    if (handleAccept) handleAccept(e);
    handleToggle();
  };

  return (
    <RSModal isOpen={isOpen} className={classNames('vene-modal', className)} toggle={handleToggle}>
      {title && <ModalHeader>{formatMessage({ id: title })}</ModalHeader>}
      {body && <ModalBody className="vene-modal__body">{formatMessage({ id: body })}</ModalBody>}
      <ModalFooter>
        {handleAccept && (
          <Button className="vene-modal__btn" color="danger" onClick={onAccept}>
            {formatMessage({ id: 'site.buttons.remove' })}
          </Button>
        )}
        <Button className="vene-modal__btn" color="primary" outline onClick={handleToggle}>
          {formatMessage({ id: 'site.buttons.cancel' })}
        </Button>
      </ModalFooter>
    </RSModal>
  );
};

export default injectIntl(Modal);
