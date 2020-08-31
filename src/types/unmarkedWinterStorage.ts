import { WinterStorageApplicationInput } from '../__generated__/globalTypes';

export type WinterStorageArea = {
  id: string;
  name: string;
};

interface ValuesToOverride {
  boatLength: string;
  boatWidth: string;
  chosenAreas: string | undefined;
}

export type UnmarkedWinterFormValues = Pick<
  WinterStorageApplicationInput,
  Exclude<keyof WinterStorageApplicationInput, keyof ValuesToOverride>
> &
  ValuesToOverride;
