import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Boat } from './types';
import BoatInfo from './boatInfo/BoatInfo';

export interface BoatsProps {
  boats: Boat[];
}

const Boats = ({ boats }: BoatsProps) => {
  const { t } = useTranslation();

  return (
    <div className="vene-customer-boats">
      {boats.map((boat) => (
        <BoatInfo {...boat} editBoat={() => undefined} deleteBoat={() => undefined} />
      ))}
      <Button size="small">＋&emsp;{t('page.profile.boats.add_new_boat')}</Button>
    </div>
  );
};

export default Boats;
