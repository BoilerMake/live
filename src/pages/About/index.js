import React from 'react';
import Organizers from '../../assets/images/organizers.jpg';

const About = () => (
  <div className="max-width about">
    <h1 className="text-center">About BoilerMake</h1>
    <p className="paragraph">
      BoilerMake is a hackathon that brings over 500 hackers from across the
      country under one roof for one incredible weekend. As a team, our mission
      is to empower each and every hacker to build anything that they can
      imagine, and we’ll pull out all the stops to make sure that dream becomes
      a reality. We find happiness in knowing that every hacker will walk out of
      our doors with memories that will last a lifetime.
    </p>
    <a href="http://www.nicky.photos/Events/BoilerMake-4/i-dGvGsSB/A">
      <img width="100%" src={Organizers} alt="Boilermake 4 Team" />
    </a>
    <p className="paragraph" style={{ marginTop: '20px' }}>
      This year, 24 students from Purdue University have come together to host
      an unforgettable hackathon. All the work that has gone into planning this
      event—everything from setting up the venue to the annoying emails that we
      berate your inboxes with—was accomplished by somebody just like you.
    </p>
    <p className="paragraph">
      If this sort of stuff sounds like your thing, stay tuned for more updates!
      We’ll be looking for new people to help us throw another successful
      hackathon in 2018! As always - if you have any questions, feel free to hit
      us up at team@boilermake.org!
    </p>
    <h1 className="text-center">History</h1>

    <div className="flex v-center">
      <div className="col-6">
        <img
          src="https://photos.smugmug.com/Events/BoilerMake-4/i-NjCgM8d/0/f8c4cdcb/XL/NDS_2643-XL.jpg"
          width="100%"
          alt="BoilerMake"
        />
      </div>
      <div className="col-6 padding">
        <p className="paragraph">
          <h2 style={{ fontWeight: 'bold' }}>
            BoilerMake I: February 8-10th, 2014
          </h2>
          The first BoilerMake started as a group of students involved with
          Purdue Hackers created BoilerMake as an organization under the
          Undergraduate Student Board. The goal was to get students involved and
          throw a hackathon where everyone could come together and create. It
          was created to be a great way for students to interact informally with
          companies and proving their technical skills through development.
          There were around 400 attendees from 18 schools and about 30 companies
          all within the same space of Purdue’s gym.
        </p>
      </div>
    </div>
    <div className="flex v-center">
      <div className="col-6 padding">
        <p className="paragraph">
          <h2 style={{ fontWeight: 'bold' }}>
            BoilerMake II: Oct 17-19th, 2014
          </h2>
          BM II was the year of the BoilerMake Badges - custom Arduino boards
          for hackers to have fun with. Our venue changed to the Lambert
          Fieldhouse to accommodate the 500 hackers. We kept this number as the
          maximum to ensure that all the hackers and sponsors could fit into the
          same large room to interact and develop in.
        </p>
      </div>
      <div className="col-6">
        <img
          src="https://photos.smugmug.com/Events/BoilerMake-3/i-6ksGHmK/0/ae391f27/XL/DSC_4496-XL.jpg"
          width="100%"
          alt="BoilerMake"
        />
      </div>
    </div>
    <div className="flex v-center">
      <div className="col-6">
        <img
          src="https://photos.smugmug.com/Events/BoilerMake-3/i-H9wdx5v/0/b259e601/XL/DSC_4371-XL.jpg"
          width="100%"
          alt="BoilerMake"
        />
      </div>
      <div className="col-6 padding">
        <p className="paragraph">
          <h2 style={{ fontWeight: 'bold' }}>
            BoilerMake III: Oct 16-18th, 2015
          </h2>
          BM III was once again located in Lambert Fieldhouse. This year, we
          provided arcade games, bean bags, and opportunities for hackers to
          enjoy their full hackathon experience. We also provided a diverse
          hardware lab for students to experiment and build with a variety of
          technologies.
        </p>
      </div>
    </div>
    <div className="flex v-center">
      <div className="col-6 padding">
        <p className="paragraph">
          <h2 style={{ fontWeight: 'bold' }}>
            BoilerMake IV: January 20-22nd, 2017
          </h2>
          BM IV followed a space adventure theme as hackers became astronauts
          traveling through the stars. This event was once again held in the
          Cordova Recreational Sports Center among the basketball courts. 500
          students came together once again to create under space themed
          decorations, arcade games, interactive lego boards.
        </p>
      </div>
      <div className="col-6">
        <img
          src="https://photos.smugmug.com/Events/BoilerMake-4/i-gcjc9gt/0/51700a7f/XL/NDS_2288-XL.jpg"
          width="100%"
          alt="BoilerMake"
        />
      </div>
    </div>
    <div className="flex v-center marginb">
      <div className="col-6">
        <img
          src="https://photos.smugmug.com/Events/BoilerMake-V/i-ndtJJJ7/0/0bbcc13a/XL/_NDS0554-XL.jpg"
          width="100%"
          alt="BoilerMake"
        />
      </div>
      <div className="col-6 padding">
        <p className="paragraph">
          <h2 style={{ fontWeight: 'bold' }}>
            BoilerMake V: September 20-22nd, 2017
          </h2>
          BM V came back to the Cordova Recreational Sports Center for another
          36 hours of unadulterated hacking. With more yoga, coffee, and neon
          light than ever before, students put together projects with the help
          of mentors and friends alike to exhibit to everyone at BoilerMake.
        </p>
      </div>
    </div>
  </div>
);

export default About;
