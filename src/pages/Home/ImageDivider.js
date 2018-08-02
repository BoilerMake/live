import React from 'react';

const ImageDivider = ({ images, style }) => {
  return (
    <div style={style}>
      <div className="flex images mobile-hide" style={{ marginTop: '20px' }}>
        <div className="col-3-no-break">
          <img src={images[0]} width="100%" alt="gallery" />
        </div>
        <div className="col-3-no-break">
          <img src={images[1]} width="100%" alt="gallery" />
        </div>
        <div className="col-3-no-break">
          <img src={images[2]} width="100%" alt="gallery" />
        </div>
        <div className="col-3-no-break">
          <img src={images[3]} width="100%" alt="gallery" />
        </div>
      </div>
      <div className="mobile-show flex images" style={{ marginTop: '20px' }}>
        <div className="col-4-no-break">
          <img src={images[0]} width="100%" alt="gallery" />
        </div>
        <div className="col-4-no-break">
          <img src={images[1]} width="100%" alt="gallery" />
        </div>
        <div className="col-4-no-break">
          <img src={images[2]} width="100%" alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default ImageDivider;
