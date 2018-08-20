import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bm-kit';

import Background from '../../assets/images/hero/background.svg';
import RightTower from '../../assets/images/hero/right_tower.svg';
import BackCloud from '../../assets/images/hero/back_cloud.svg';
import LeftTower from '../../assets/images/hero/left_tower.svg';
import BackCar from '../../assets/images/hero/back_car.svg';
import MiddleCloud from '../../assets/images/hero/middle_cloud.svg';
import MiddleTower from '../../assets/images/hero/middle_tower.svg';
import FrontCloud from '../../assets/images/hero/front_cloud.svg';
import FrontCar from '../../assets/images/hero/front_car.svg';

import './_pillar.bm6_grabber.source.scss';

class BM6Grabber extends PureComponent {
  render() {
    return (
      <div className="p-bm6_grabber">
        <div className="p-bm6_grabber__content--flex_wrapper">
          <div className="p-bm6_grabber__content">
            <div className="p-bm6_grabber__content_topic">Forge the Future</div>
            <div className="p-bm6_grabber__content_boilermake">
              at BoilerMake VI
            </div>
            <div className="p-bm6_grabber__content_location">
              Purdue University • October 19-21, 2018
            </div>
            <Link to="/register">
              <Button>Apply</Button>
            </Link>
          </div>
        </div>
        <img src={Background} className="p-bm6_grabber__background" alt="bg" />
        <img src={RightTower} className="p-bm6_grabber__right_tower" alt="bg" />
        <img src={BackCloud} className="p-bm6_grabber__back_cloud" alt="bg" />
        <img src={LeftTower} className="p-bm6_grabber__left_tower" alt="bg" />
        <img src={BackCar} className="p-bm6_grabber__back_car" alt="bg" />
        <img
          src={MiddleCloud}
          className="p-bm6_grabber__middle_cloud"
          alt="bg"
        />
        <img
          src={MiddleTower}
          className="p-bm6_grabber__middle_tower"
          alt="bg"
        />
        <img src={FrontCloud} className="p-bm6_grabber__front_cloud" alt="bg" />
        <img src={FrontCar} className="p-bm6_grabber__front_car" alt="bg" />
      </div>
    );
  }
}

export default BM6Grabber;
