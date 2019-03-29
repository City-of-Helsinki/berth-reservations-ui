import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, ...rest }) {
  return (
    <div className="app-image">
      <img src={src} alt={alt} {...rest} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Image;
