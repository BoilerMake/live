import React from 'react';
import { Button } from 'bm-kit';
import Header from '../../components/Header';
import Images from './images';

import './_pillar.hackers.source.scss';

const Hackers = () => (
  <div>
    <Header img={Images.HeaderImg} startColor="#f25f89" endColor="#9a96f2">
      <h1>A Weekend Full of Hacking</h1>
      <h2>Come and make cool stuff</h2>
    </Header>
    <div className="p-hackers">
      <div className="home flex text-center">
        <div className="col-3" />
        <div className="col-6">
          <h2>
            We want to give the best experience to the creative minds of the
            tech community.
          </h2>
        </div>
      </div>
      <div className="max-width home flex text-center">
        <iframe
          style={{ margin: '20px auto', border: 'none' }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Wgs1nLJKqNY?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          title="boilermake"
          allowfullscreen
        />
      </div>
      <div className="max-width home flex" style={{ margin: '50px auto' }}>
        <div className="col-8 paddingl">
          <h2>Create amazing things.</h2>
          <p>
            Here at BoilerMake, we provide you with the resources (and snacks)
            to build that dream project you’ve been dying to create. You can
            share your work with hundreds of other hackers and corporate
            sponsors, while potentially getting a share of our $10,000 prize
            pool at the end of a wild 36 hours. Give yourself a chance to add to
            the legacy of great projects made at BoilerMake, including VR DDR,
            Skittles Launcher, and more.
          </p>
          <a href="https://boilermake-v.devpost.com/">
            <Button>Past Hacks</Button>
          </a>
        </div>
      </div>
      <div className="max-width home flex" style={{ margin: '50px auto' }}>
        <div className="col-4">
          <img
            className="hacker-image"
            src={Images.Friends}
            width="100%"
            alt="friends"
          />
        </div>
        <div className="col-8 padding" style={{ paddingLeft: '20px' }}>
          <h2>Meet new friends.</h2>
          <p>
            BoilerMake is a great place to meet a group of people with a diverse
            set of skills and backgrounds. Every year, over 500 hackers from
            schools across the nation come together to hack and have fun. Don’t
            have a team? No worries, BoilerMake’s team building activities will
            help you come together to form the perfect group of people to build
            that dank idea.
          </p>
        </div>
      </div>
      <div
        className="max-width home flex v-center"
        style={{ margin: '50px auto' }}
      >
        <div className="col-8 paddingr">
          <h2>Connect with sponsors.</h2>
          <p>
            Come talk to the people who inspire us to hack harder. Come talk to
            the people who make it all possible. BoilerMake may be the place
            where you find your dream company. Sponsor booths are a great place
            to learn about new technologies and real-world applications of your
            skills. Some sponsors may even provide fun activities or free swag!
          </p>
          <Button>View Past Sponsors</Button>
        </div>
        <div className="col-4">
          <img
            src={Images.Connecting}
            className="hacker-image"
            width="100%"
            alt="connecting"
          />
        </div>
      </div>
      <div className="max-width home flex" style={{ margin: '50px auto' }}>
        <div className="col-4" />
        <div className="col-8 paddingr">
          <h2>Participate in activities.</h2>
          <p>
            Need a break from hacking? We’ve got that covered. At several points
            throughout the day, we will have activities open to any hacker.
            These include tech talks, workshops, yoga, MLH cup stacking, and
            more!
          </p>
        </div>
      </div>
      <div style={{ height: '50px' }} />
    </div>
  </div>
);

export default Hackers;
