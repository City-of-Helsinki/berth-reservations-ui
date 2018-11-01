import React from 'react';

export default ({ berths, selected }) => (
  <div>
    <h1>Selected Berths</h1>
    <div>
      {berths.filter(b => selected.includes(b.id)).map(b => (
        <span>{b.name.fi}</span>
      ))}
    </div>
  </div>
);
