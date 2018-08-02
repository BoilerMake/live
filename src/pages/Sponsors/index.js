import React from 'react';
import Header from '../../components/Header';
import Images from './images';

const Sponsors = () => (
  <div>
    <Header img={Images.HeaderImg} startColor="#F78CA0" endColor="#FE998B">
      <h1>Sponsor a weekend of ideas</h1>
      <h2>sponsorship@boilermake.org</h2>
    </Header>
    <div className="max-width home flex">
      <div className="col-8 paddingr" style={{ margin: '0 auto' }}>
        <h2>Foster a community of ideas</h2>
        <p>
          We would like to extend the opportunity for your company to be an
          essential part of the BoilerMake experience. Sponsors get access to a
          driven community of 500 highly motivated university students with new
          ideas that could be a beneficial part of your workplace. You’ll be
          able to tap this pool of talent to find qualified job and internship
          candidates and see them work as a team in a real-world setting.
          Interacting with students during the hackathon also allows you to
          promote your company’s new technologies to be used and explored.
        </p>
      </div>
    </div>
    <div className="middleBreak light">
      <div className="max-width home">
        <h2 style={{ textAlign: 'center' }}>
          Put your name on the BoilerMake Legacy
        </h2>
        <div className="flex v-center h-center">
          <div className="col-3-no-break padding">
            <img src={Images.BB} width="100%" alt="Bloomberg" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.G} width="100%" alt="Google" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.C1} width="100%" alt="Capital One" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.MDB} width="100%" alt="MongoDB" />
          </div>
          <div className="col-1-no-break padding">
            <img src={Images.MM} width="100%" alt="Mixmax" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.MS} width="100%" alt="Microsoft" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.SG} width="100%" alt="sendgrid" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.QC} width="100%" alt="Qualcomm" />
          </div>
          <div className="col-1-no-break padding">
            <img src={Images.GE} width="100%" alt="GE" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.TO} width="100%" alt="Twilio" />
          </div>
          <div className="col-3-no-break padding">
            <img src={Images.WM} width="100%" alt="Walmart" />
          </div>
        </div>
      </div>
    </div>
    <div className="max-width home flex" style={{ marginBottom: '50px' }}>
      <div className="col-8 paddingr" style={{ margin: '0 auto' }}>
        <h2>Additional Benefits</h2>
        <ul>
          <li>
            Gaining access to hackers’ resumes, emails, GitHubs, and LinkedIn
            profiles
          </li>
          <li>Awarding custom prizes based your criteria</li>
          <li>Promotion through giveaways and advertising</li>
          <li>Demonstrating your APIs and new technologies</li>
          <li>
            Reserving space for private events with hackers (tech talks,
            mentorship sessions, etc.)
          </li>
        </ul>
        <br />
        <button>sponsorship@boilermake.org</button>
      </div>
    </div>
  </div>
);

export default Sponsors;
