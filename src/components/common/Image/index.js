import React from 'react';

function Image({ src, alt, ...rest }) {
  return (
    <div className="app-image">
      <img src={src} alt={alt} {...rest} />
    </div>
  );
}

export default Image;
