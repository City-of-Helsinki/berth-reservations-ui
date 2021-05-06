import { selectedServices } from '../redux/reducers/berthReducers';
import { SelectedServices } from '../common/types/services';

export const createServices = (options?: object): SelectedServices => {
  const defaultServices = selectedServices();
  return defaultServices.merge({ ...options });
};

export const services = createServices();
