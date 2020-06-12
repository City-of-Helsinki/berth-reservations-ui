/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { mount, MountRendererProps, shallow, ShallowRendererProps } from 'enzyme';
import React, { ReactElement } from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { LocaleOpts } from '../types/intl';

import en from '../translations/en.json';
import fi from '../translations/fi.json';
import sv from '../translations/sv.json';

// Create the IntlProvider to retrieve context for wrapping around.
const getIntlProvider = (locale: LocaleOpts = LocaleOpts.EN) => {
  let messages;
  switch (locale) {
    case 'fi':
      messages = fi;
      break;
    case 'sv':
      messages = sv;
      break;
    default:
      messages = en;
      break;
  }
  return new IntlProvider({ locale, messages }, {});
};
const getIntl = (locale: LocaleOpts = LocaleOpts.EN) => {
  const { intl } = getIntlProvider(locale).getChildContext();
  return intl;
};

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node: ReactElement) {
  return React.cloneElement(node, { intl: getIntl() });
}

export function shallowWithIntl<P, S>(
  node: ReactElement<P>,
  { context, ...additionalOptions }: ShallowRendererProps = {},
  locale?: LocaleOpts
) {
  return shallow<P, S>(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl: getIntl(locale) }),
    ...additionalOptions,
  })
    .first()
    .shallow(); // TODO: Improve when https://github.com/formatjs/react-intl/issues/929#issuecomment-296391428 gets fixed
}

export function mountWithIntl<P, S>(
  node: ReactElement<P>,
  { context, childContextTypes, ...additionalOptions }: MountRendererProps = {},
  locale?: LocaleOpts
) {
  return mount<P, S>(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl: getIntl(locale) }),
    childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
    ...additionalOptions,
  });
}
