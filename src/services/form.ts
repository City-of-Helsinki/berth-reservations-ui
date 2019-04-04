import { SelectedBerths } from '../components/berths/types';
import { post } from '../utils/api';

export default {
  submit: async (data: { selectedBerths: SelectedBerths }): Promise<boolean> => {
    const { selectedBerths, ...rest } = data;

    await post('reservations/', {
      ...rest,
      chosen_harbors: selectedBerths.map((harbor, priority) => ({ harbor, priority: priority + 1 }))
    });

    return true;
  }
};
