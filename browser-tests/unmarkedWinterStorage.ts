import navbar from './selectors/navbar';
import shared from './selectors/shared';
import unmarkedWinterStorage from './selectors/unmarkedWinterStorage';
import { isUnmarkedWinterStoragePage } from './utils/page';
import { envUrl } from './utils/settings';
import { applicantInformation, applicantOverview, wsBoatInformation } from './utils/sharedTests';

const testData = {
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
  winterStorageArea: 'Lähteelä',
  winterStorageAreaIndex: 2,
};

fixture('Unmarked winter storage').page(envUrl());

test('Unmarked winter storage notice, registered boat on trailer, private customer', async (t) => {
  await t.click(navbar.unmarkedWinterStorage);
  await isUnmarkedWinterStoragePage();

  await areaSelection(t);
  await wsBoatInformation(t, testData);

  await t.expect(unmarkedWinterStorage.ownerInformationHeading.exists).ok();
  await applicantInformation(t, testData, true);

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
  await confirmation(t, expectedBoatInfo);
});

const areaSelection = async (t: TestController) => {
  const { winterStorageAreaSelect, continueButton } = unmarkedWinterStorage.areaSelection;

  await t
    .click(winterStorageAreaSelect)
    .click(winterStorageAreaSelect.find('option').withText(testData.winterStorageArea));

  await t.wait(500).click(continueButton);
};

const confirmation = async (t: TestController, expectedBoatInfo: string) => {
  const { textInOverview, getLabelValuePairs } = shared.overview;

  await t.expect(unmarkedWinterStorage.confirmationHeading.exists).ok();

  // Boat information
  const labelValuePairs = await getLabelValuePairs();
  await t.expect(labelValuePairs).eql(expectedBoatInfo);

  // Chosen area
  await t.expect(textInOverview(`${testData.winterStorageArea}`).exists).ok();

  // Applicant
  await applicantOverview(t, testData);
};
