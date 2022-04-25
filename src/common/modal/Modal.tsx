import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Button, DialogVariant } from 'hds-react';

type Props = {
  actionDisabled?: boolean;
  id: string;
  title: string;
  className?: string;
  isOpen: boolean;
  scrollable?: boolean;
  submitButtonLabel?: string;
  variant?: DialogVariant;
  handleToggle: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
};

const Modal = ({
  actionDisabled,
  id,
  title,
  className,
  isOpen,
  scrollable,
  submitButtonLabel,
  variant,
  handleToggle,
  handleSubmit,
  children,
}: Props) => {
  const { t } = useTranslation();
  const onAccept = (e: React.SyntheticEvent) => {
    handleSubmit(e);
    handleToggle();
  };
  const titleId = `${id}-dialog-title`;

  return (
    <Dialog
      id={id}
      aria-labelledby={titleId}
      isOpen={isOpen}
      className={className}
      close={handleToggle}
      closeButtonLabelText={t('site.buttons.close')}
      scrollable={scrollable}
      variant={variant}
    >
      <Dialog.Header title={title} id={titleId} />
      {children && <Dialog.Content>{children}</Dialog.Content>}
      <Dialog.ActionButtons>
        <Button theme="coat" variant="secondary" onClick={handleToggle}>
          {t('site.buttons.cancel')}
        </Button>
        <Button theme="coat" variant={variant} onClick={onAccept} disabled={actionDisabled}>
          {submitButtonLabel ?? t('site.buttons.save')}
        </Button>
      </Dialog.ActionButtons>
    </Dialog>
  );
};

export default Modal;
