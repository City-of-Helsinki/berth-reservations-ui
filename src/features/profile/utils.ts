import { BerthFormValues } from '../berth/types';
import { UnmarkedWinterFormValues } from '../unmarkedWinterStorage/types';
import { WinterFormValues } from '../winterStorage/types';
import { ProfilePageQuery } from '../__generated__/ProfilePageQuery';
import { ContactInfo } from './types';

export const getContactInfo = (data: ProfilePageQuery | undefined): ContactInfo | undefined => {
  if (!data?.myProfile) return undefined;

  const { primaryAddress, language, primaryEmail, primaryPhone, firstName, lastName } = data.myProfile;

  return {
    address: primaryAddress?.address ?? '',
    customerGroup: '',
    email: primaryEmail?.email ?? '',
    language: language ?? undefined,
    municipality: primaryAddress?.city ?? '',
    firstName: firstName ?? '',
    lastName: lastName ?? '',
    phoneNumber: primaryPhone?.phone ?? '',
    zipCode: primaryAddress?.postalCode ?? '',
    primaryAddressId: primaryAddress?.id ?? '',
    primaryEmailId: primaryEmail?.id ?? '',
    primaryPhoneId: primaryPhone?.id ?? '',
  };
};

export const getFormValuesFromProfile = (
  profileData: ProfilePageQuery | undefined
): Partial<BerthFormValues | WinterFormValues | UnmarkedWinterFormValues> => ({
  firstName: profileData?.myProfile?.firstName,
  lastName: profileData?.myProfile?.lastName,
  email: profileData?.myProfile?.primaryEmail?.email,
  phoneNumber: profileData?.myProfile?.primaryPhone?.phone,
  zipCode: profileData?.myProfile?.primaryAddress?.postalCode,
  address: profileData?.myProfile?.primaryAddress?.address,
  municipality: profileData?.myProfile?.primaryAddress?.city,
});
