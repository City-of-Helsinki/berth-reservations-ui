import { Button, Select } from 'hds-react';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import Divider from '../divider/Divider';
import Model from '../../../../common/modal/Modal';
import { Option } from '../../../berth/berthFormPage/switchApplication/types';
import { moveItemInArrayBackward, moveItemInArrayForward, removeItemFromArray } from './utils';
import { TContext } from '../../../../common/types/translation';
import './editApplicationModal.scss';

export interface EditApplicationModalProps<C extends { id: string }> {
  boat: {
    id: string;
    name: string;
    registrationNumber: string;
  } | null;
  translationContext: TContext;
  placesOptions: Option[];
  placesLoading: boolean;
  ownBoatsOptions: Option[];
  ownBoatsLoading?: boolean;
  isOpen: boolean;
  initialChoices: C[];
  submitButtonLabel?: string;
  getChoiceFromData(choiceId: string): C | undefined;
  renderChoices(
    choices: C[],
    onRemove: (choiceId: string) => void,
    onMoveUp: (choiceId: string) => void,
    onMoveDown: (choiceId: string) => void
  ): React.ReactNode;
  onClose(): void;
  onSubmit(newChoicesIds?: string[], selectedBoatId?: string | null): void;
}

const EditApplicationModal = <C extends { id: string }>({
  boat,
  translationContext,
  placesOptions,
  placesLoading,
  ownBoatsOptions,
  ownBoatsLoading,
  isOpen,
  initialChoices,
  getChoiceFromData,
  onClose,
  onSubmit,
  renderChoices,
}: EditApplicationModalProps<C>) => {
  const { t } = useTranslation();
  const [selectedBoat, setSelectedBoat] = useState<Option | null>(
    boat
      ? {
          label: boat.name,
          value: boat.id,
        }
      : null
  );
  const [choices, setChoices] = useState(initialChoices);
  const [newChoice, setNewChoice] = useState<Option | null>(null);

  const moveUp = (id: string) => {
    const newChoices = moveItemInArrayBackward(choices, id);
    setChoices(newChoices);
  };

  const moveDown = (id: string) => {
    const newChoices = moveItemInArrayForward(choices, id);
    setChoices(newChoices);
  };

  const removeChoice = (id: string) => {
    const newChoices = removeItemFromArray(choices, id);
    setChoices(newChoices);
  };

  const choicesElements = renderChoices(choices, removeChoice, moveUp, moveDown);
  const filteredPlacesOptions = placesOptions.filter((option) => !choices.find((choice) => choice.id === option.value));
  const isMaxNumSelected = choices.length === Number(process.env.REACT_APP_MAX_SELECTED_BERTHS || 10);

  return (
    <Model
      id="edit-application-modal"
      title={t('page.profile.application.edit_application')}
      handleToggle={onClose}
      isOpen={isOpen}
      actionDisabled={choices.length === 0}
      handleSubmit={() => {
        onSubmit(
          choices.map((choice) => choice.id),
          boat?.id !== selectedBoat?.value ? selectedBoat?.value : undefined
        );
      }}
      scrollable
    >
      <div className="vene-edit-application-modal">
        <p>
          {t('page.profile.application.edit.boat_desc', {
            context: translationContext,
          })}
        </p>
        <Select
          id={'edit_application_boats'}
          label={t('page.profile.application.edit.selected_boat')}
          value={selectedBoat}
          onChange={(boat: Option | null) => {
            setSelectedBoat(boat);
          }}
          options={ownBoatsOptions}
          disabled={ownBoatsLoading}
        />
        <Divider />
        <h3 className="vene-edit-application-modal__h3">
          {t('page.profile.application.edit.selected', {
            context: translationContext,
          })}
        </h3>
        <div className="vene-edit-application-modal__block">{choicesElements}</div>
        <Select
          id={'edit_application_harbors'}
          label={t('page.profile.application.edit.add_place', {
            context: translationContext,
          })}
          className="vene-edit-application-modal__block"
          value={newChoice}
          options={filteredPlacesOptions}
          onChange={(selected: Option | null) => {
            setNewChoice(selected);
          }}
          disabled={placesLoading}
        />
        <Button
          variant="secondary"
          theme="black"
          disabled={!newChoice || isMaxNumSelected}
          onClick={() => {
            if (!newChoice) return;
            const choice = getChoiceFromData(newChoice.value);

            if (!choice) return;
            setChoices([...choices, choice]);
            setNewChoice(null);
          }}
        >
          {t('site.buttons.add_to_selected')}
        </Button>
      </div>
    </Model>
  );
};

export default EditApplicationModal;
