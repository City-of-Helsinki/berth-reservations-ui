export enum LocaleOpts {
  FI = 'fi',
  EN = 'en',
  SV = 'sv',
}

export type FormatMessage = (msg: { id: string }) => string;
