import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Boat } from './types';
import BoatInfo from './boatInfo/BoatInfo';

const CustomerBoats = () => {
  const { t } = useTranslation();
  const boats: Boat[] = [
    {
      boatType: 'Perämoottorivene',
      draught: 1,
      id: 'MOCK-BOAT',
      length: 4,
      model: 'Tukki',
      name: 'Uppo',
      registrationNumber: 'sss',
      weight: 700,
      width: 2,
    },
  ];

  return (
    <div className="vene-customer-boats">
      {boats.map((boat) => (
        <BoatInfo {...boat} editBoat={() => undefined} deleteBoat={() => undefined} />
      ))}
      <Button size="small">＋&emsp;{t('page.profile.boats.add_new_boat')}</Button>
    </div>
  );
};

export default CustomerBoats;
