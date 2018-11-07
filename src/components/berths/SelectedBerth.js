import React from 'react';

export default ({ berth, moveUp, moveDown }) => (
  <h3 key={berth.identifier}>
    {berth.name.fi}
    <button type="button" onClick={() => moveUp(berth.identifier)}>
      ^
    </button>
    <button type="button" onClick={() => moveDown(berth.identifier)}>
      v
    </button>
  </h3>
);
