import { berth } from './selectors/berth';
import { navbar } from './selectors/navbar';
import { isBerthsPage } from './utils/page';
import { envUrl } from './utils/settings';

const testData = {
  boatType: 'Soutuvene',
  boatTypeIndex: '2',
  boatWidth: '1.75',
  boatLength: '4.4',
  harbor1: 'Lähteelä retkisatama',
  harbor2: 'Strömsinlahden venesatama',
  boatRegistrationNumber: 'P12345',
  boatDraught: '0.21',
  boatWeight: '150',
  boatName: 'Testivene',
  boatModel: 'Terhi 440',
  firstName: 'Matti',
  lastName: 'Meikäläinen',
  address: 'Testiosoite 1',
  postalCode: '02100',
  municipality: 'Espoo',
  phoneNumber: '+358 50 123 4567',
  emailAddress: 'test@example.com',
};

fixture('Berth').page(envUrl());

test('New berth application, registered boat, private customer', async (t) => {
  await t.click(navbar.berths);
  await isBerthsPage();

  await selectHarbors(t);
  await yourSelection(t);
  await boatInformation(t);
  await applicantInformation(t);
  await overview(t);
});

const selectHarbors = async (t: TestController) => {
  const {
    boatTypeSelect,
    boatWidth,
    boatLength,
    wasteCollection,
    harborListTab,
    nextButton,
    getSelectButtonForHarbor,
  } = berth.selectHarbors;

  await t
    .click(boatTypeSelect)
    .click(boatTypeSelect.find('option').withText(testData.boatType))
    .expect(boatTypeSelect.value)
    .eql(testData.boatTypeIndex);

  await t
    .typeText(boatWidth, testData.boatWidth)
    .typeText(boatLength, testData.boatLength)
    .click(wasteCollection);

  await t
    .click(harborListTab)
    .click(getSelectButtonForHarbor(testData.harbor1))
    .click(getSelectButtonForHarbor(testData.harbor2));

  await t.click(nextButton);
};

const yourSelection = async (t: TestController) => {
  const { heading, getHarborHeading, getUpButtonForHeading, nextButton } = berth.yourSelection;

  await t.expect(heading.exists).ok();

  await t.click(getUpButtonForHeading(getHarborHeading(`2. ${testData.harbor2}`))).wait(500);

  await t
    .expect(getHarborHeading(`1. ${testData.harbor2}`).exists)
    .ok()
    .expect(getHarborHeading(`2. ${testData.harbor1}`).exists)
    .ok();

  await t.click(nextButton);
};

const boatInformation = async (t: TestController) => {
  const {
    heading,
    boatRegistrationNumber,
    boatDraught,
    boatWeight,
    boatName,
    boatModel,
    nextButton,
  } = berth.boatInformation;

  await t.expect(heading.exists).ok();

  await t
    .typeText(boatRegistrationNumber, testData.boatRegistrationNumber)
    .typeText(boatDraught, testData.boatDraught)
    .typeText(boatWeight, testData.boatWeight)
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
  } = berth.applicantInformation;

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
  const { heading, textInOverview, getLabelValuePairs } = berth.overview;

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
    `Syväys: ${testData.boatDraught}m`,
    `Paino: ${testData.boatWeight}`,
  ].join('\n');
  await t.expect(labelValuePairs).eql(expectedContent);

  // Chosen harbors
  await t
    .expect(textInOverview(`1. ${testData.harbor2}`).exists)
    .ok()
    .expect(textInOverview(`2. ${testData.harbor1}`).exists)
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
