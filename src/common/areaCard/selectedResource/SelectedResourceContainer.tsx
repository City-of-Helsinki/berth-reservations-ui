import React, { useState } from 'react';
import Transition from 'react-transition-group/Transition';

import { genValidSelector } from '../../utils/urls';
import { IconNames } from '../../icon/Icon';
import Modal from '../../modal/Modal';
import SelectedResource from './SelectedResource';
import './selectedResource.scss';
import useTransitionLogic from './useTransitionLogic';

export type Props = {
  availabilityLevel?: { id: string; title: string | null; description: string | null } | null;
  className?: string;
  id: string;
  services: [IconNames, boolean][];
  title: React.ReactNode;
  validationErrMsg?: string;
  handleRemove(id: string): void;
  moveDown?(id: string): void;
  moveUp?(id: string): void;
};

const SelectedResourceContainer = ({
  availabilityLevel,
  className,
  handleRemove,
  id,
  moveDown,
  moveUp,
  services,
  title,
  validationErrMsg,
}: Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { hasChanged, toggleEnterState, doMoveUp, doMoveDown, doDelete } = useTransitionLogic({
    moveDown,
    moveUp,
    handleRemove,
    id,
  });
  const toggleModal = () => setModalOpen(!isModalOpen);

  const validDomId = genValidSelector(`popover_${id}`);

  return (
    <Transition in={hasChanged} timeout={300} onEntered={toggleEnterState}>
      {(state) => (
        <>
          <SelectedResource
            availabilityLevel={availabilityLevel}
            className={className}
            services={services}
            state={state}
            title={title}
            validDomId={validDomId}
            validationErrMsg={validationErrMsg}
            doMoveUp={doMoveUp}
            doMoveDown={doMoveDown}
            toggleModal={toggleModal}
          />
          <Modal
            body="page.berth.selected.confirmation_body"
            handleAccept={doDelete}
            handleToggle={toggleModal}
            isOpen={isModalOpen}
          />
        </>
      )}
    </Transition>
  );
};

export default SelectedResourceContainer;
