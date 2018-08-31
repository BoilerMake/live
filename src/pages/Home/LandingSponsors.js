import React, { PureComponent } from 'react';
import { Card } from 'bm-kit';

import RC from '../../assets/images/sponsors/Rockwell_Collins.svg';
import Qualcomm from '../../assets/images/sponsors/Qualcomm.svg';
import MongoDB from '../../assets/images/sponsors/MongoDB.png';
import Bloomberg from '../../assets/images/sponsors/bloomberg.svg';
import SEP from '../../assets/images/sponsors/sep.png';
import LibertyMutual from '../../assets/images/sponsors/Liberty_Mutual.svg';

import SFAB from '../../assets/images/sponsors/sfab.jpg';

import './_pillar.home.sponsors.source.scss';

export default class LandingSponsors extends PureComponent {
  render() {
    return (
      <div className="p-landing_sponsors">
        <h1>Sponsors</h1>
        <div className="p-landing_sponsors__top">
          <img alt="sponsor" src={RC} />
        </div>
        <div className="p-landing_sponsors__medium">
          <img alt="sponsor" src={Qualcomm} />
          <img alt="sponsor" src={MongoDB} />
          <img alt="sponsor" src={Bloomberg} />
          <img alt="sponsor" src={SEP} />
          <img alt="sponsor" src={LibertyMutual} />
        </div>
        <Card className="p-landing_sponsors__partners">
          <h3>Partners</h3>
          <img alt="sponsor" src={SFAB} />
        </Card>
      </div>
    );
  }
}
