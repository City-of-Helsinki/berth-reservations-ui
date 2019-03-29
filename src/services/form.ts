import { post } from '../utils/api';
import { SelectedBerths } from '../types/berths';

export default {
  submit: async (data: { selectedBerths: SelectedBerths }): Promise<boolean> => {
    const { selectedBerths, ...rest } = data;

    await post('reservations/', {
      ...rest,
      chosen_harbors: selectedBerths.map((harbor, priority) => ({ priority: priority + 1, harbor }))
    });

    return true;
  }
};
