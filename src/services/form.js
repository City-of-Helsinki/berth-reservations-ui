// @flow
import { post } from '../utils/api';

export default {
  submit: async (formValues: Object): Promise<boolean> => {
    await post('reservations', formValues);
    return true;
  }
};
