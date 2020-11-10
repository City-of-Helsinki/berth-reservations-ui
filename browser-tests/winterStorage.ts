import { navbar } from './selectors/navbar';
import { winterStorage } from './selectors/winterStorage';
import { isWinterStoragePage } from './utils/page';
import { envUrl } from './utils/settings';

const testData = {
  address: 'Testiosoite 1',
  area1: 'Laivalahti',
  area2: 'Porslahti',
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
  await yourSelection(t);
  await boatInformation(t);
  await applicantInformation(t);
  await overview(t);
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
    .click(getSelectButtonForArea(testData.area1))
    .click(getSelectButtonForArea(testData.area2));

  await t.click(nextButton);
};

const yourSelection = async (t: TestController) => {
  const {
    heading,
    getHarborHeading,
    getUpButtonForHeading,
    nextButton,
  } = winterStorage.yourSelection;

  await t.expect(heading.exists).ok();

  await t.click(getUpButtonForHeading(getHarborHeading(`2. ${testData.area2}`))).wait(500);

  await t
    .expect(getHarborHeading(`1. ${testData.area2}`).exists)
    .ok()
    .expect(getHarborHeading(`2. ${testData.area1}`).exists)
    .ok();

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

const applicantInformation = async (t: TestController) => {
  const {
    heading,
    firstName,
    lastName,
    address,
    postalCode,
    municipalitySelect,
    phoneNumber,
    emailAddress,
    nextButton,
  } = winterStorage.applicantInformation;

  await t.expect(heading.exists).ok();

  await t
    .typeText(firstName, testData.firstName)
    .typeText(lastName, testData.lastName)
    .typeText(address, testData.address)
    .typeText(postalCode, testData.postalCode)
    .click(municipalitySelect)
    .click(municipalitySelect.find('option').withText(testData.municipality))
    .typeText(phoneNumber, testData.phoneNumber)
    .typeText(emailAddress, testData.emailAddress);

  await t.click(nextButton);
};

const overview = async (t: TestController) => {
  const { heading, textInOverview, getLabelValuePairs } = winterStorage.overview;

  await t.expect(heading.exists).ok();

  // Boat information
  const labelValuePairs = await getLabelValuePairs();
  const expectedContent = [
    `Nimi: ${testData.boatName}`,
    `Rekisterinumero: ${testData.boatRegistrationNumber}`,
    `Tyyppi: ${testData.boatType}`,
    `Malli: ${testData.boatModel}`,
    `Leveys: ${testData.boatWidth}m`,
    `Pituus: ${testData.boatLength}m`,
  ].join('\n');
  await t.expect(labelValuePairs).eql(expectedContent);

  // Chosen harbors
  await t
    .expect(textInOverview(`1. ${testData.area2}`).exists)
    .ok()
    .expect(textInOverview(`2. ${testData.area1}`).exists)
    .ok();

  // Applicant
  await t
    .expect(textInOverview(testData.firstName).exists)
    .ok()
    .expect(textInOverview(testData.lastName).exists)
    .ok()
    .expect(textInOverview(testData.emailAddress).exists)
    .ok()
    .expect(textInOverview(testData.phoneNumber).exists)
    .ok()
    .expect(textInOverview(testData.address).exists)
    .ok()
    .expect(textInOverview(testData.postalCode).exists)
    .ok()
    .expect(textInOverview(testData.municipality).exists)
    .ok();
};
