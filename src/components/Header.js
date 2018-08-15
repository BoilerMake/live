import React from 'react';

const Header = ({ startColor, endColor, img, children }) => {
  return (
    <div
      className="header"
      style={{
        background: `url(${img}) no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div
        className="gradient"
        style={{
          background: startColor
        }}
      />
      <div className="headerContent">{children}</div>
    </div>
  );
};

export default Header;
