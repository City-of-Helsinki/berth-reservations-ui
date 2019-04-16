/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { mount, MountRendererProps, shallow, ShallowRendererProps } from 'enzyme';
import React, { ReactElement } from 'react';
import { IntlProvider, intlShape } from 'react-intl';

import en from '../translations/en.json';

const messages = { en }; // en.json

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ messages, locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node: ReactElement) {
  return React.cloneElement(node, { intl });
}

export function shallowWithIntl<P, S>(
  node: ReactElement<P>,
  { context, ...additionalOptions }: ShallowRendererProps = {}
) {
  return shallow<P, S>(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    ...additionalOptions
  });
}

export function mountWithIntl(
  node: ReactElement,
  { context, childContextTypes, ...additionalOptions }: MountRendererProps = {}
) {
  return mount(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
    ...additionalOptions
  });
}
