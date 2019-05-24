export interface DefaultFieldProps {
  id: string;
  name: string;
  value?: string | number;
  validate?: Function;
  label?: string;
  required?: boolean;
  text?: string;
  children?: any;
}

export enum FormMode {
  Berth = 'berth',
  WinterStorage = 'winter_storage'
}
