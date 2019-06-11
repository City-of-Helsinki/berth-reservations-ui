import { version } from '../../package.json';
/**
 * Force to clear localStorage if version is not matched.
 *
 */

export const purgeLocalStorage = () => {
  const localVersion = localStorage.getItem('venepaikka_version');

  if (!localVersion) {
    localStorage.setItem('venepaikka_version', version);
  } else if (localVersion !== version) {
    localStorage.clear();
    localStorage.setItem('venepaikka_version', version);
  }
};
