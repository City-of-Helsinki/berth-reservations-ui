import { selectHarborsSelectors } from './selectors/berth';
import { navbarSelectors } from './selectors/navbar';
import { boatInformationSelectors } from './selectors/shared';
import { isBerthsPage } from './utils/page';
import { envUrl } from './utils/settings';
import { applicantInformation, overview, yourSelection } from './utils/sharedTests';

const testData = {
  address: 'Testiosoite 1',
  boatDraught: '0.21',
  boatLength: '4.4',
  boatModel: 'Terhi 440',
  boatName: 'Testivene',
  boatRegistrationNumber: 'P12345',
  boatType: 'Soutuvene',
  boatTypeIndex: '2',
  boatWeight: '150',
  boatWidth: '1.75',
  choice1: 'Lähteelä retkisatama',
  choice2: 'Strömsinlahden venesatama',
  emailAddress: 'test@example.com',
  firstName: 'Matti',
  lastName: 'Meikäläinen',
  municipality: 'Espoo',
  phoneNumber: '+358 50 123 4567',
  postalCode: '02100',
};

fixture('Berth').page(envUrl());

test('New berth application, registered boat, private customer', async (t) => {
  await t.click(navbarSelectors.berths);
  await isBerthsPage();

  await selectHarbors(t);
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
    `Syväys: ${testData.boatDraught}m`,
    `Paino: ${testData.boatWeight}`,
  ].join('\n');
  await overview(t, testData, expectedBoatInfo);
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
  } = selectHarborsSelectors;

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
    .click(getSelectButtonForHarbor(testData.choice1))
    .click(getSelectButtonForHarbor(testData.choice2));

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
  } = boatInformationSelectors;

  await t.expect(heading.exists).ok();

  await t
    .typeText(boatRegistrationNumber, testData.boatRegistrationNumber)
    .typeText(boatDraught, testData.boatDraught)
    .typeText(boatWeight, testData.boatWeight)
    .typeText(boatName, testData.boatName)
    .typeText(boatModel, testData.boatModel);

  await t.click(nextButton);
};
