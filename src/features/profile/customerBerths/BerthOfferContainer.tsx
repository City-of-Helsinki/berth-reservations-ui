import React from 'react';

import BerthOffer from './berthOffer/BerthOffer';
import { mockProps } from './mockData';

const BerthOfferContainer = () => {
  return <BerthOffer {...mockProps} />;
};

export default BerthOfferContainer;
