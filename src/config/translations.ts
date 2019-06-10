import { addLocaleData } from 'react-intl';

import englishLocaleData from 'react-intl/locale-data/en';
import finnishLocaleData from 'react-intl/locale-data/fi';
import swedishLocaleData from 'react-intl/locale-data/sv';

import en from '../translations/en.json';
import fi from '../translations/fi.json';
import sv from '../translations/sv.json';

addLocaleData([...finnishLocaleData, ...englishLocaleData, ...swedishLocaleData]);

export default { fi, en, sv };
