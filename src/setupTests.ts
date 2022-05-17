import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './locales/i18n';

configure({ adapter: new Adapter() });

window.scrollTo = () => null;
