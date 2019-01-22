// @flow
import { post } from '../utils/api';

export default {
  submit: async (data: Object): Promise<boolean> => {
    const { selectedBerths, ...rest } = data;

    await post('reservations/', {
      ...rest,
      chosen_harbors: selectedBerths.map((harbor, priority) => ({ priority: priority + 1, harbor }))
    });

    return true;
  }
};
