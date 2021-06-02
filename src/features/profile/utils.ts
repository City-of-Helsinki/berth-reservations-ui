import { ProfilePageQuery } from '../__generated__/ProfilePageQuery';

export const getContactInfo = (data: ProfilePageQuery | undefined) => ({
  address: data?.myProfile?.primaryAddress?.address ?? '',
  customerGroup: '',
  emailAddress: data?.myProfile?.primaryEmail?.email ?? '',
  language: data?.myProfile?.language ?? '',
  municipality: data?.myProfile?.primaryAddress?.city ?? '',
  name: `${data?.myProfile?.firstName ?? ''} ${data?.myProfile?.lastName ?? ''}`,
  phoneNumber: data?.myProfile?.primaryPhone?.phone ?? '',
  postalCode: data?.myProfile?.primaryAddress?.postalCode ?? '',
});
