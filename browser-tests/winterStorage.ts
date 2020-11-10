import { navbar } from './selectors/navbar';
import { winterStorage } from './selectors/winterStorage';
import { isWinterStoragePage } from './utils/page';
import { envUrl } from './utils/settings';
import { applicantInformation, overview, yourSelection } from './utils/sharedTests';

const testData = {
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
  await t.click(navbar.winterStorage);
  await isWinterStoragePage();

  await selectAreas(t);
  await yourSelection(t, testData);
  await boatInformation(t);
  await applicantInformation(t, testData);

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
  await overview(t, testData, expectedBoatInfo);
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
  } = winterStorage.selectAreas;

  await t
    .typeText(boatWidth, testData.boatWidth)
    .typeText(boatLength, testData.boatLength)
    .click(boatStoredOnTrailer)
    .click(electricity);

  await t
    .click(harborListTab)
    .click(getSelectButtonForArea(testData.choice1))
    .click(getSelectButtonForArea(testData.choice2));

  await t.click(nextButton);
};

const boatInformation = async (t: TestController) => {
  const {
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatStoredOnTrailer,
    boatTypeSelect,
    heading,
    nextButton,
    trailerRegistrationNumber,
  } = winterStorage.boatInformation;

  await t.expect(heading.exists).ok();

  await t
    .click(boatStoredOnTrailer)
    .typeText(trailerRegistrationNumber, testData.trailerRegistrationNumber)
    .typeText(boatRegistrationNumber, testData.boatRegistrationNumber)
    .click(boatTypeSelect)
    .click(boatTypeSelect.find('option').withText(testData.boatType))
    .expect(boatTypeSelect.value)
    .eql(testData.boatTypeIndex)
    .typeText(boatName, testData.boatName)
    .typeText(boatModel, testData.boatModel);

  await t.click(nextButton);
};
