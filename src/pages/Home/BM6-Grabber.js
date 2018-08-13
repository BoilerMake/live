import React, { PureComponent } from 'react';

import Hero from '../../assets/images/SVG/hero.svg';
import './_pillar.bm6_grabber.source.scss';

class BM6Grabber extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-bm6_grabber">
        <img src={Hero} width="100%" />
      </div>
    );
  }
}

export default BM6Grabber;
