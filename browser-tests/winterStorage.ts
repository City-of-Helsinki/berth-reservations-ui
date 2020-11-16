import { navbarSelectors } from './selectors/navbar';
import { selectAreasSelectors } from './selectors/winterStorage';
import { ApplicantInformation, Choices, WsBoatInformation } from './types/types';
import { isWinterStoragePage } from './utils/page';
import { envUrl } from './utils/settings';
import {
  fillApplicantInformation,
  assertOverview,
  fillWsBoatInformation,
  swapSelections,
} from './sharedTests/sharedTests';

const testData: Choices & WsBoatInformation & ApplicantInformation = {
  address: 'Testiosoite 1',
  choice1: 'Laivalahti',
  choice2: 'Porslahti',
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
};

fixture('Winter storage').page(envUrl());

test('Winter storage application, registered boat on trailer, private customer', async (t) => {
  await t.click(navbarSelectors.winterStorage);
  await isWinterStoragePage();

  await selectAreas(t);
  await swapSelections(t, testData);
  await fillWsBoatInformation(t, testData);
  await fillApplicantInformation(t, testData);

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
  await assertOverview(t, testData, expectedBoatInfo);
});

const selectAreas = async (t: TestController) => {
  const {
    boatWidth,
    boatLength,
    boatStoredOnTrailer,
    electricity,
    harborListTab,
    nextButton,
    getSelectButtonForArea,
  } = selectAreasSelectors;

  await t
    .typeText(boatWidth, testData.boatWidth)
    .typeText(boatLength, testData.boatLength)
    .click(boatStoredOnTrailer)
    .click(electricity);

  await t.click(harborListTab);

  await t
    .click(getSelectButtonForArea(testData.choice1))
    .click(getSelectButtonForArea(testData.choice2));

  await t.click(nextButton);
};
