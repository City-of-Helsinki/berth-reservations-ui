import React from 'react';
import { ImageProps } from './types';

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return (
    <div className="vene-image">
      <img src={src} alt={alt} {...rest} />
    </div>
  );
};

export default Image;
