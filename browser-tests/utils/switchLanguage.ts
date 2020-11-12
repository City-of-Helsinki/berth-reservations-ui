import { navbarSelectors } from '../selectors/navbar';

const { languageSelect } = navbarSelectors;

export const switchToFinnish = async (t: TestController) => {
  await t
    .click(languageSelect.button)
    .expect(languageSelect.Finnish.visible)
    .ok()

    .click(languageSelect.Finnish)
    .expect(languageSelect.button.innerText)
    .eql('FI');
};

export const switchToSwedish = async (t: TestController) => {
  await t
    .click(languageSelect.button)
    .expect(languageSelect.Swedish.visible)
    .ok()

    .click(languageSelect.Swedish)
    .expect(languageSelect.button.innerText)
    .eql('SV');
};

export const switchToEnglish = async (t: TestController) => {
  await t
    .click(languageSelect.button)
    .expect(languageSelect.English.visible)
    .ok()

    .click(languageSelect.English)
    .expect(languageSelect.button.innerText)
    .eql('EN');
};
