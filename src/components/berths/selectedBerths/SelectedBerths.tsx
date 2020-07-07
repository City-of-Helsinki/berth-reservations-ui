import React from 'react';

import './selectedBerths.scss';

interface Props {
  children: React.ReactNodeArray;
}

const SelectedBerths = ({ children }: Props) => {
  return <div className="vene-selected-berths">{children}</div>;
};

export default SelectedBerths;
