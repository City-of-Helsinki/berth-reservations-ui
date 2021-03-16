import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Boat, { BoatType } from './boat/Boat';

export interface CustomerBoatsProps {
  placeholder?: null;
}

const CustomerBoats = (props: CustomerBoatsProps) => {
  const { t } = useTranslation();
  const boats: BoatType[] = [
    {
      boatType: 'Perämoottorivene',
      draught: 1,
      id: 'MOCK-BOAT',
      length: 4,
      model: 'Uppo',
      name: 'Tukki',
      registrationNumber: 'sss',
      weight: 700,
      width: 2,
    },
  ];

  return (
    <div className="vene-customer-boats">
      {boats.map((boat) => (
        <Boat {...boat} editBoat={() => undefined} deleteBoat={() => undefined} />
      ))}
      <Button size="small">＋&emsp;Lisää uusi vene</Button>
    </div>
  );
};

export default CustomerBoats;
