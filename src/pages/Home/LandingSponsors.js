import React, { PureComponent } from 'react';
import { Card } from 'bm-kit';

import Hr from '../../components/Hr';

import RC from '../../assets/images/sponsors/Rockwell_Collins.svg';
import Qualcomm from '../../assets/images/sponsors/Qualcomm.svg';
import MongoDB from '../../assets/images/sponsors/MongoDB.png';
import Bloomberg from '../../assets/images/sponsors/bloomberg.svg';
// import SEP from '../../assets/images/sponsors/sep.png';
import LibertyMutual from '../../assets/images/sponsors/Liberty_Mutual.svg';
import FB from '../../assets/images/sponsors/facebook.svg';

import SFAB from '../../assets/images/sponsors/sfab.jpg';

import './_pillar.home.sponsors.source.scss';

export default class LandingSponsors extends PureComponent {
  render() {
    return (
      <div className="p-landing_sponsors">
        <h1>Sponsors</h1>
        <Card className="p-landing_sponsors__sponsors">
          <div className="p-landing_sponsors__top">
            <img alt="sponsor" src={RC} />
          </div>
          <div className="p-landing_sponsors__medium">
            <img alt="Qualcomm" src={Qualcomm} />
            <img
              alt="MongoDB"
              src={MongoDB}
              className="p-landing_sponsors__medium--mongo"
            />
            <img alt="Bloomberg" src={Bloomberg} />
            {/* <img alt="sponsor" src={SEP} /> */}
            <img alt="Facebook" src={FB} />
            <img alt="Liberty Mutual" src={LibertyMutual} />
          </div>
          <div className="p-landing_sponsors__partners">
            <Hr>Partners</Hr>
            <img alt="sponsor" src={SFAB} />
          </div>
        </Card>
      </div>
    );
  }
}
