import React from 'react';

export default ({ berths }) => (
  <div>
    <h1>Selected Berths</h1>
    <div>
      {berths.map(b => (
        <h3 key={b.id}>{b.name.fi}</h3>
      ))}
    </div>
  </div>
);
