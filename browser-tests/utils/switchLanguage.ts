import navbar from '../selectors/navbar';

export const switchToFinnish = async (t: TestController) => {
  await t
    .click(navbar.languageSelect.button)
    .expect(navbar.languageSelect.Finnish.visible)
    .ok()

    .click(navbar.languageSelect.Finnish)
    .expect(navbar.languageSelect.button.innerText)
    .eql('FI');
};

export const switchToSwedish = async (t: TestController) => {
  await t
    .click(navbar.languageSelect.button)
    .expect(navbar.languageSelect.Swedish.visible)
    .ok()

    .click(navbar.languageSelect.Swedish)
    .expect(navbar.languageSelect.button.innerText)
    .eql('SV');
};

export const switchToEnglish = async (t: TestController) => {
  await t
    .click(navbar.languageSelect.button)
    .expect(navbar.languageSelect.English.visible)
    .ok()

    .click(navbar.languageSelect.English)
    .expect(navbar.languageSelect.button.innerText)
    .eql('EN');
};
