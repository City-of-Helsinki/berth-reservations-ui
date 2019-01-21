// @flow
import { post } from '../utils/api';

export default {
  submit: async (data: Object): Promise<boolean> => {
    await post('reservations/', data);
    return true;
  }
};
