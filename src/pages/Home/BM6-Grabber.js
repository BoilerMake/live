import React, { PureComponent } from 'react';
import { Button } from 'bm-kit';

import Hero from '../../assets/images/SVG/hero.svg';
import './_pillar.bm6_grabber.source.scss';

class BM6Grabber extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-bm6_grabber">
        <div className="p-bm6_grabber__content">
          <div className="col-6 p-bm6_grabber__content_words--wrapper">
            <div className="p-bm6_grabber__content_words">
              <h1>Forge The Future</h1>
              <h2>BoilerMake 6</h2>
              <h2>October 19th - 21st, 2018</h2>
              <h2>Purdue University</h2>
              <Button>Apply</Button>
            </div>
          </div>
          <div className="col-6">
            <img src={Hero} width="100%" />
          </div>
        </div>
        <div className="p-bm6_grabber__clouds" />
      </div>
    );
  }
}

export default BM6Grabber;
