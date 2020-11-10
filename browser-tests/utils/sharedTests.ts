import {
  applicantInformation as applicantInformationSelectors,
  yourSelection as yourSelectionSelectors,
  overview as overviewSelectors,
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
  }
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

  // Chosen harbors
  await t
    .expect(textInOverview(`1. ${testData.choice2}`).exists)
    .ok()
    .expect(textInOverview(`2. ${testData.choice1}`).exists)
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
