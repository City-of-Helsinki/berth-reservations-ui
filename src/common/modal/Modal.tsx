import classNames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal as RSModal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { TContext } from '../types/translation';

import './modal.scss';

type Props = {
  title?: string;
  body?: string;
  tContext?: TContext;
  className?: string;
  isOpen: boolean;
  handleToggle: () => void;
  handleAccept?: (e: React.SyntheticEvent) => void;
};

const Modal = ({ title, tContext: context, body, className, isOpen, handleToggle, handleAccept }: Props) => {
  const { t } = useTranslation();
  const onAccept = (e: React.SyntheticEvent) => {
    if (handleAccept) handleAccept(e);
    handleToggle();
  };

  return (
    <RSModal isOpen={isOpen} className={classNames('vene-modal', className)} toggle={handleToggle}>
      {title && <ModalHeader>{t(title, { context })}</ModalHeader>}
      {body && <ModalBody className="vene-modal__body">{t(body, { context })}</ModalBody>}
      <ModalFooter>
        {handleAccept && (
          <Button className="vene-modal__btn" color="danger" onClick={onAccept}>
            {t('site.buttons.remove')}
          </Button>
        )}
        <Button className="vene-modal__btn" color="primary" outline onClick={handleToggle}>
          {t('site.buttons.cancel')}
        </Button>
      </ModalFooter>
    </RSModal>
  );
};

export default Modal;
