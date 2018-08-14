import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bm-kit';

import Hero from '../../assets/images/SVG/hero.svg';
import './_pillar.bm6_grabber.source.scss';

class BM6Grabber extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="p-bm6_grabber">
        <div className="p-bm6_grabber__content">
          <div className="col-8 p-bm6_grabber__content_words--wrapper">
            <div className="p-bm6_grabber__content_words">
              <h2>BoilerMake 6</h2>
              <h1>Forge The Future</h1>
              <h2>Oct 19th-21st, 2018</h2>
              <h2>Purdue University</h2>
              <Link to="/register">
                <Button>Apply</Button>
              </Link>
            </div>
          </div>
          <div className="col-4 p-bm6_grabber_illustration">
            <img src={Hero} width="100%" alt="BM6 Hero" />
          </div>
        </div>
        <div className="p-bm6_grabber__clouds" />
      </div>
    );
  }
}

export default BM6Grabber;
