export const stripLeadingSlash = (value: string) =>
  value.charAt(0) === '/' ? value.substr(1) : value;
