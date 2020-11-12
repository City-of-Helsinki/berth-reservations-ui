import {
  applicantInformationSelectors,
  boatInformationSelectors,
  overviewSelectors,
  yourSelectionSelectors,
} from '../selectors/shared';

export const yourSelection = async (
  t: TestController,
  testData: { choice2: string; choice1: string }
) => {
  const { heading, getHarborHeading, getUpButtonForHeading, nextButton } = yourSelectionSelectors;

  await t.expect(heading.exists).ok();

  await t.click(getUpButtonForHeading(getHarborHeading(`2. ${testData.choice2}`))).wait(500);

  await t
    .expect(getHarborHeading(`1. ${testData.choice2}`).exists)
    .ok()
    .expect(getHarborHeading(`2. ${testData.choice1}`).exists)
    .ok();

  await t.click(nextButton);
};

export const wsBoatInformation = async (
  t: TestController,
  testData: {
    boatLength: string;
    boatModel: string;
    boatName: string;
    boatRegistrationNumber: string;
    boatType: string;
    boatTypeIndex: string | undefined;
    boatWidth: string;
    trailerRegistrationNumber: string;
  }
) => {
  const {
    boatLength,
    boatModel,
    boatName,
    boatRegistrationNumber,
    boatStoredOnTrailer,
    boatTypeSelect,
    boatWidth,
    heading,
    nextButton,
    trailerRegistrationNumber,
  } = boatInformationSelectors;

  await t.expect(heading.exists).ok();

  await t
    .click(boatStoredOnTrailer)
    .typeText(trailerRegistrationNumber, testData.trailerRegistrationNumber)
    .typeText(boatRegistrationNumber, testData.boatRegistrationNumber)
    .click(boatTypeSelect)
    .click(boatTypeSelect.find('option').withText(testData.boatType))
    .expect(boatTypeSelect.value)
    .eql(testData.boatTypeIndex)
    .click(boatWidth)
    .pressKey('ctrl+a delete') // Clear width coming from first page of winter storage application
    .typeText(boatWidth, testData.boatWidth)
    .click(boatLength)
    .pressKey('ctrl+a delete') // ditto for length
    .typeText(boatLength, testData.boatLength)
    .typeText(boatName, testData.boatName)
    .typeText(boatModel, testData.boatModel);

  await t.click(nextButton);
};

export const applicantInformation = async (
  t: TestController,
  testData: {
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    municipality: string;
    phoneNumber: string;
    emailAddress: string;
  },
  skipHeadingCheck = false
) => {
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
  } = applicantInformationSelectors;

  if (!skipHeadingCheck) {
    await t.expect(heading.exists).ok();
  }

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

export const overview = async (
  t: TestController,
  testData: {
    address: string;
    choice1: any;
    choice2: any;
    emailAddress: string;
    firstName: string;
    lastName: string;
    municipality: string;
    phoneNumber: string;
    postalCode: string;
  },
  expectedBoatInfo: string
) => {
  const { heading, textInOverview, getLabelValuePairs } = overviewSelectors;

  await t.expect(heading.exists).ok();

  // Boat information
  const labelValuePairs = await getLabelValuePairs();
  await t.expect(labelValuePairs).eql(expectedBoatInfo);

  // Chosen harbors/areas
  await t
    .expect(textInOverview(`1. ${testData.choice2}`).exists)
    .ok()
    .expect(textInOverview(`2. ${testData.choice1}`).exists)
    .ok();

  // Applicant
  await applicantOverview(t, testData);
};

export const applicantOverview = (
  t: TestController,
  testData: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    postalCode: string;
    municipality: string;
  }
) => {
  const { textInOverview } = overviewSelectors;

  return t
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
