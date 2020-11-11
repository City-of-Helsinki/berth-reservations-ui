import footer from './selectors/footer';
import frontPage from './selectors/frontPage';
import navbar from './selectors/navbar';
import { navigateToFrontPage } from './utils/navigation';
import { envUrl } from './utils/settings';
import { switchToEnglish, switchToFinnish, switchToSwedish } from './utils/switchLanguage';
import {
  isBerthsPage,
  isFrontPage,
  isUnmarkedWinterStoragePage,
  isWinterStoragePage,
} from './utils/page';

fixture('Front page').page(envUrl());

test('Navigation', async (t) => {
  // Main link
  await t.click(navbar.mainLink);
  await isFrontPage();

  // Berths
  await t.click(navbar.berths);
  await isBerthsPage();

  // Winter storage
  await t.click(navbar.winterStorage);
  await isWinterStoragePage();

  // Unmarked winter storage
  await t.click(navbar.unmarkedWinterStorage);
  await isUnmarkedWinterStoragePage();
});

test('Switching language', async (t) => {
  // Switch to Swedish
  await t.expect(navbar.languageSelect.Swedish.visible).notOk();
  await switchToSwedish(t);
  await t.expect(frontPage.title.innerText).eql('Båtplatser');

  // Switch to English
  await t.expect(navbar.languageSelect.English.visible).notOk();
  await switchToEnglish(t);
  await t.expect(frontPage.title.innerText).eql('Boat berths');

  // Switch to Finnish
  await t.expect(navbar.languageSelect.Finnish.visible).notOk();
  await switchToFinnish(t);
  await t.expect(frontPage.title.innerText).eql('Venepaikat');
});

test('Front page links', async (t) => {
  // Berths
  await t.click(frontPage.berths);
  await isBerthsPage();
  await navigateToFrontPage();

  // Winter storage
  await t.click(frontPage.winterStorage);
  await isWinterStoragePage();
  await navigateToFrontPage();

  // Unmarked winter storage
  await t.click(frontPage.unmarkedWinterStorage);
  await isUnmarkedWinterStoragePage();
  await navigateToFrontPage();
});

test('Footer', async (t) => {
  // 'Venepaikat' Link
  await t.expect(footer.serviceLink.visible).ok();

  // Link list
  await t
    .expect(footer.browseBerths.visible)
    .ok()
    .expect(footer.boatingInformation.visible)
    .ok()
    .expect(footer.recent.visible)
    .ok()
    .expect(footer.privacyPolicy.visible)
    .ok()
    .expect(footer.accessibilityPolicy.visible)
    .ok();

  // Bottom links
  await t.expect(footer.sendFeedback.visible).ok().expect(footer.contact.visible).ok();
});
