import { selectHarborsSelectors } from './selectors/berth';
import { navbarSelectors } from './selectors/navbar';
import { boatInformationSelectors, loadingSpinner } from './selectors/shared';
import { ApplicantInformation, BerthBoatInformation, Choices } from './types/types';
import { isBerthsPage } from './utils/page';
import { envUrl } from './utils/settings';
import { fillApplicantInformation, assertOverview, swapSelections } from './sharedTests/sharedTests';
import { login } from './utils/login';

const testData: Choices & BerthBoatInformation & ApplicantInformation = {
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
  await login(t);

  await t.click(navbarSelectors.berths);
  await isBerthsPage();

  await selectHarbors(t);

  // Wait for the data to be loaded
  await t.wait(5000).expect(loadingSpinner.exists).notOk();

  await swapSelections(t, testData);
  await fillBoatInformation(t);
  await fillApplicantInformation(t, testData);

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
  await assertOverview(t, testData, expectedBoatInfo);
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

  // Wait for the data to be loaded
  await t.wait(5000).expect(loadingSpinner.exists).notOk();

  await t
    .click(boatTypeSelect)
    .click(boatTypeSelect.find('option').withText(testData.boatType))
    .expect(boatTypeSelect.value)
    .eql(testData.boatTypeIndex);

  await t.typeText(boatWidth, testData.boatWidth).typeText(boatLength, testData.boatLength).click(wasteCollection);

  await t.click(harborListTab);

  await t.click(getSelectButtonForHarbor(testData.choice1)).click(getSelectButtonForHarbor(testData.choice2));

  await t.click(nextButton);
};

const fillBoatInformation = async (t: TestController) => {
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
