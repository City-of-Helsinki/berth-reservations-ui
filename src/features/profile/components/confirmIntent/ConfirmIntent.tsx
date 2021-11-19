import { useRef, useState, ReactNode, useMemo } from 'react';
import { Dialog, IconQuestionCircle, Button } from 'hds-react';

type ControlProps = {
  ref: any;
  onClick: () => void;
};

interface Props {
  id: string;
  title: string;
  description: string;
  confirmIntentLabel: string;
  cancelIntentLabel: string;
  renderControl: (renderProps: ControlProps) => ReactNode;
  intent: () => void;
}

const ConfirmIntent = ({
  cancelIntentLabel,
  confirmIntentLabel,
  description,
  id,
  intent,
  renderControl,
  title,
}: Props) => {
  const dialogTargetRef = useRef<HTMLDivElement>(null);
  const controlButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const titleId = `${id}-confirm-dialog-title`;
  const descriptionId = `${id}-confirm-dialog-content`;
  const closeButtonLabelText = 'Close info dialog';
  const control = useMemo(() => renderControl({ ref: controlButtonRef, onClick: () => setIsOpen(true) }), [
    renderControl,
  ]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmIntent = () => {
    intent();
  };

  return (
    <>
      <div ref={dialogTargetRef} />
      {control}
      <Dialog
        id={id}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        isOpen={isOpen}
        close={handleClose}
        closeButtonLabelText={closeButtonLabelText}
        focusAfterCloseRef={controlButtonRef}
        // Sets default empty value to undefined instead of null in order
        // to resolve typing issue
        targetElement={dialogTargetRef.current || undefined}
      >
        <Dialog.Header id={titleId} title={title} iconLeft={<IconQuestionCircle aria-hidden="true" />} />
        <Dialog.Content>
          <p id={descriptionId} className="text-body">
            {description}
          </p>
        </Dialog.Content>
        <Dialog.ActionButtons>
          <Button onClick={handleConfirmIntent}>{confirmIntentLabel}</Button>
          <Button onClick={handleClose} variant="secondary">
            {cancelIntentLabel}
          </Button>
        </Dialog.ActionButtons>
      </Dialog>
    </>
  );
};

export default ConfirmIntent;
