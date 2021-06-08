import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

import { UpdateProfile, UpdateProfileVariables } from '../../__generated__/UpdateProfile';
import { UPDATE_PROFILE } from '../../queries';
import { ContactInfo as ContactInfoType } from '../types';
import ContactInfo from './ContactInfo';
import EditContactInfo from './EditContactInfo';

export interface ContactInfoContainerProps {
  contactInfo?: ContactInfoType;
  refetch(): void;
}

const ContactInfoContainer = ({ contactInfo, refetch }: ContactInfoContainerProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updateProfile] = useMutation<UpdateProfile, UpdateProfileVariables>(UPDATE_PROFILE);

  const handleUpdateProfile = (values: ContactInfoType) => {
    if (!contactInfo) return undefined;

    return updateProfile({
      variables: {
        input: {
          profile: {
            firstName: values.firstName,
            lastName: values.lastName,
            language: values.language,
            updateAddresses: [
              {
                id: contactInfo.primaryAddressId,
                address: values.address,
                postalCode: values.postalCode,
                city: values.municipality,
                primary: true,
              },
            ],
            updateEmails: [
              {
                id: contactInfo.primaryEmailId,
                primary: true,
                email: values.emailAddress,
              },
            ],
            updatePhones: [
              {
                id: contactInfo.primaryPhoneId,
                phone: values.phoneNumber,
                primary: true,
              },
            ],
          },
        },
      },
    }).then(() => {
      setIsEditing(false);
      refetch();
    });
  };

  if (!contactInfo) {
    // TODO: Create profile
    return <div>Debug: User does not have a profile</div>;
  }

  if (isEditing) {
    return (
      <EditContactInfo
        initialValues={contactInfo}
        handleCancel={() => setIsEditing(false)}
        handleSave={(values: ContactInfoType) => handleUpdateProfile(values)}
      />
    );
  }

  return <ContactInfo contactInfo={contactInfo} handleEdit={() => setIsEditing(true)} />;
};

export default ContactInfoContainer;
