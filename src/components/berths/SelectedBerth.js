import React from 'react';

const SelectedBerth = ({ berth, moveUp, moveDown, first, last }) => (
  <h3 key={berth.identifier}>
    {berth.name.fi}
    <button type="button" onClick={() => moveUp(berth.identifier)} disabled={first}>
      ^
    </button>
    <button type="button" onClick={() => moveDown(berth.identifier)} disabled={last}>
      v
    </button>
  </h3>
);

export default SelectedBerth;
