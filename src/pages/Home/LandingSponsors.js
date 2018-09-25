import React, { PureComponent } from 'react';
import { Card } from 'bm-kit';

import Hr from '../../components/Hr';

import RC from '../../assets/images/sponsors/Rockwell_Collins.svg';
import Qualcomm from '../../assets/images/sponsors/Qualcomm.svg';
import MongoDB from '../../assets/images/sponsors/MongoDB.png';
import Bloomberg from '../../assets/images/sponsors/bloomberg.svg';
import USAA from '../../assets/images/sponsors/usaa.svg';
import LibertyMutual from '../../assets/images/sponsors/Liberty_Mutual.svg';
import FB from '../../assets/images/sponsors/facebook.svg';
import SEP from '../../assets/images/sponsors/sep.png';
import Intel from '../../assets/images/sponsors/intel.svg';
import SFAB from '../../assets/images/sponsors/sfab.jpg';
import PurdueEngineering from '../../assets/images/sponsors/purdue_engineering.png';
import GC from '../../assets/images/sponsors/google_cloud.png';

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
            <img
              alt="Intel"
              src={Intel}
              className="p-landing_sponsors__medium--intel"
            />
            <img alt="Facebook" src={FB} />
            <img alt="Liberty Mutual" src={LibertyMutual} />
            <img
              alt="USAA"
              className="p-landing_sponsors__medium--usaa"
              src={USAA}
            />
            <img alt="SEP" src={SEP} />
            <img alt="Google Cloud Platform" src={GC} />
          </div>
          <div className="p-landing_sponsors__partners">
            <Hr>Partners</Hr>
            <img alt="SFAB" src={SFAB} />
            <img alt="Purdue Engineering" src={PurdueEngineering} />
          </div>
        </Card>
      </div>
    );
  }
}
