import { addLocaleData } from 'react-intl';

import englishLocaleData from 'react-intl/locale-data/en';
import finnishLocaleData from 'react-intl/locale-data/fi';
import swedishLocaleData from 'react-intl/locale-data/sv';

import fi from '../translations/fi.json';
import en from '../translations/en.json';
import sv from '../translations/sv.json';

addLocaleData([...finnishLocaleData, ...englishLocaleData, ...swedishLocaleData]);

export default { fi, en, sv };
