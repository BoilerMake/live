import React from 'react';

import './_common.Hr.source.scss';

const Hr = ({ children }) => {
  return (
    <div className="c-hr">
      <span className="c-hr__text">{children}</span>
    </div>
  );
};

export default Hr;
