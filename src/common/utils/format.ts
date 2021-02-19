export const formatDimension = (value: number | null | undefined, locale: string) => {
  if (!value) return '-';

  const localizedValues = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 1,
  }).format(value);

  return `${localizedValues} m`;
};

export const formatDate = (date: string | null, locale: string, withTime = false) => {
  if (!date) return '-';

  const dateOpts = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const timeOpts = {
    hour: '2-digit',
    minute: '2-digit',
  };
  const options = withTime ? { ...dateOpts, ...timeOpts } : dateOpts;

  return new Date(date).toLocaleString(locale, options);
};
