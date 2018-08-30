import React from 'react';

import './_pillar.floating_images.source.scss';

const FloatingImages = ({ images, style }) => {
  return (
    <div className="p-floating_images">
      {images.map(image => {
        return (
          <div className="p-floating_images__image_wrapper" key={image}>
            <img
              src={image}
              className="p-floating_images__image"
              alt="gallery"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingImages;
