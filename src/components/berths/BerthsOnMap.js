import React from 'react';
import styled from 'styled-components';
import Map from '../Map';

export default ({ onClick, selected, filtered, filteredNot }) => (
  <div>
    <Map onClick={onClick} selected={selected} filtered={filtered} filteredNot={filteredNot} />
  </div>
);
