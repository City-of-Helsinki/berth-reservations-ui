import React from 'react';

import './properties.scss';
import Property from './Property';

export interface PropertiesProps {
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  water: boolean;
}

const Properties = ({ electricity, gate, lighting, wasteCollection, water }: PropertiesProps) => {
  return (
    <div className="vene-properties">
      {electricity && <Property icon="plug" labelKey="page.profile.berths.berthOffer.electricity" />}
      {gate && <Property icon="fence" labelKey="page.profile.berths.berthOffer.gate" />}
      {lighting && <Property icon="streetLight" labelKey="page.profile.berths.berthOffer.lighting" />}
      {wasteCollection && <Property icon="trash" labelKey="page.profile.berths.berthOffer.wasteCollection" />}
      {water && <Property icon="waterTap" labelKey="page.profile.berths.berthOffer.water" />}
    </div>
  );
};

export default Properties;
