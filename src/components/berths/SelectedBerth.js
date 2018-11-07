import React from 'react';

export default ({ berth, moveUp, moveDown }) => (
  <h3 key={berth.id}>
    {berth.name.fi}
    <button type="button" onClick={() => moveUp(berth.id)}>
      ^
    </button>
    <button type="button" onClick={() => moveDown(berth.id)}>
      v
    </button>
  </h3>
);
