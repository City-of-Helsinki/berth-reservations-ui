// @flow
import { get } from 'lodash';
import { post } from '../utils/api';

export default {
  submit: async (data: Object): Promise<boolean> => {
    const firstName = get(data, 'applicant.name.first_name');
    const lastName = get(data, 'applicant.name.last_name');
    const email = get(data, 'applicant.contact.email');
    await post('reservations', {
      first_name: firstName,
      last_name: lastName,
      email,
      data
    });
    return true;
  }
};
