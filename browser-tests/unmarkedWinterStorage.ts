import { navbarSelectors } from './selectors/navbar';
import { loadingSpinner, overviewSelectors } from './selectors/shared';
import { areaSelectionSelectors, unmarkedWinterStorageSelectors } from './selectors/unmarkedWinterStorage';
import { ApplicantInformation, UnmarkedWinterStorageChoice, WsBoatInformation } from './types/types';
import { isUnmarkedWinterStoragePage } from './utils/page';
import { envUrl } from './utils/settings';
import { fillApplicantInformation, assertApplicantOverview, fillWsBoatInformation } from './sharedTests/sharedTests';

const testData: UnmarkedWinterStorageChoice & WsBoatInformation & ApplicantInformation = {
  address: 'Testiosoite 1',
  boatLength: '4.4',
  boatModel: 'Terhi 440',
  boatName: 'Testivene',
  boatRegistrationNumber: 'P12345',
  boatType: 'Soutuvene',
  boatTypeIndex: '2',
  boatWidth: '1.75',
  emailAddress: 'test@example.com',
  firstName: 'Matti',
  lastName: 'Meikäläinen',
  municipality: 'Espoo',
  phoneNumber: '+358 50 123 4567',
  postalCode: '02100',
  trailerRegistrationNumber: 'DEF-123',
  winterStorageArea: 'Puotila',
  winterStorageAreaIndex: 2,
};

fixture('Unmarked winter storage').page(envUrl());

test('Unmarked winter storage notice, registered boat on trailer, private customer', async (t) => {
  await t.click(navbarSelectors.unmarkedWinterStorage);
  await isUnmarkedWinterStoragePage();

  // Wait for the data to be loaded
  await t.wait(5000).expect(loadingSpinner.exists).notOk();

  await selectArea(t);
  await fillWsBoatInformation(t, testData);

  await t.expect(unmarkedWinterStorageSelectors.ownerInformationHeading.exists).ok();
  await fillApplicantInformation(t, testData, true);

  const expectedBoatInfo = [
    `Nimi: ${testData.boatName}`,
    `Rekisterinumero: ${testData.boatRegistrationNumber}`,
    `Tyyppi: ${testData.boatType}`,
    `Malli: ${testData.boatModel}`,
    `Leveys: ${testData.boatWidth}m`,
    `Pituus: ${testData.boatLength}m`,
    `Säilytystapa: Säilytän veneen trailerilla`,
    `Trailerin rekisterinumero: ${testData.trailerRegistrationNumber}`,
  ].join('\n');
  await assertConfirmation(t, expectedBoatInfo);
});

const selectArea = async (t: TestController) => {
  const { winterStorageAreaSelect, continueButton } = areaSelectionSelectors;

  await t
    .click(winterStorageAreaSelect)
    .click(winterStorageAreaSelect.find('option').withText(testData.winterStorageArea));

  await t.click(continueButton);
};

const assertConfirmation = async (t: TestController, expectedBoatInfo: string) => {
  const { textInOverview, getLabelValuePairs } = overviewSelectors;

  await t.expect(unmarkedWinterStorageSelectors.confirmationHeading.exists).ok();

  // Boat information
  const labelValuePairs = await getLabelValuePairs();
  await t.expect(labelValuePairs).eql(expectedBoatInfo);

  // Chosen area
  await t.expect(textInOverview(`${testData.winterStorageArea}`).exists).ok();

  // Applicant
  await assertApplicantOverview(t, testData);
};
