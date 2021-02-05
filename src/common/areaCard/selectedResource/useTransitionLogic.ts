import { useState } from 'react';

export type UseTransitionLogicProps = {
  id: string;
  handleRemove(id: string): void;
  moveDown?(id: string): void;
  moveUp?(id: string): void;
};

const useTransitionLogic = ({ id, handleRemove, moveDown, moveUp }: UseTransitionLogicProps) => {
  const [changed, setChanged] = useState<string>('nothing');

  const toggleEnterState = () => {
    if (changed === 'down') {
      if (moveDown) moveDown(id);
    }
    if (changed === 'up') {
      if (moveUp) moveUp(id);
    }
    if (changed === 'delete') {
      handleRemove(id);
    }

    setChanged('nothing');
  };

  const doMoveUp = () => {
    setChanged('up');
  };

  const doMoveDown = () => {
    setChanged('down');
  };

  const doDelete = () => {
    setChanged('delete');
  };

  const hasChanged = changed !== 'nothing';

  return {
    changed,
    hasChanged,
    toggleEnterState,
    doMoveUp,
    doMoveDown,
    doDelete,
  };
};

export default useTransitionLogic;
