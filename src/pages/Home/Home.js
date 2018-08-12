import React from 'react';
import Header from '../../components/Header';
import MailChimpSignup from './MailChimpSignup';
import ImageDivider from './ImageDivider';
import PreFooter from './Home_PreFooter';
import Images from './images';

import './_pillar.home.source.scss';

const Home = () => (
  <div>
    <Header img={Images.header} startColor="#667EEA" endColor="#764BA2">
      <h1>Forge The Future</h1>
      <h2>BoilerMake VI | October 19 - 21, 2018</h2>
      <h2>Applications opening soon</h2>
    </Header>
    <MailChimpSignup />
    <div className="max-width home flex">
      <div className="col-8 paddingr" style={{ margin: '30px auto' }}>
        <h2>Create, Meet, Learn, & Build</h2>
        <p>
          For the past five years, we've brought in 500 students from across the
          the country to create and collaborate on amazing ideas. This is an
          event for people who live and love hacking. Everything we do at
          BoilerMake is for you.
        </p>
      </div>
    </div>
    <ImageDivider
      images={[Images.one, Images.two, Images.three, Images.four]}
    />
    <div className="middleBreak light home">
      <div className="max-width home">
        <h2 style={{ textAlign: 'center' }}>
          BoilerMake is here to help you grow
        </h2>
        <div
          className="flex padding"
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div>
            <h3>Create awesome projects</h3>
            <p>
              Be surrounded with hundreds of students and sponsors who are all
              incredibly passionate about building fun, new, or innovative
              projects.
            </p>
            <h3>Learn new things</h3>
            <p>
              Not only does BoilerMake encourage building awesome projects, we
              love being able to provide an atmosphere where you can learn new
              things.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ImageDivider
      images={[Images.five, Images.six, Images.seven, Images.eight]}
      style={{ marginTop: '-120px' }}
    />
    <div className="max-width home" style={{ margin: '80px auto' }}>
      <div className="col-8" style={{ margin: '0 auto' }}>
        <h2>So what else?</h2>
        <p>
          BoilerMake offers a number of perks to make an amazing weekend. To get
          the weekend started, we provide busses to a number of schools to make
          travelling a no-brainer. In the past, we’ve sent buses to UIUC, UMich,
          and others.
        </p>
        <p>
          When you arrive, you will be given a swag bag that usually includes a
          t-shirt, a watter bottle, and stickers. Each year we have some special
          swag. BoilerMake 5 saw a fidget spinner. BoilerMake 2 saw a custom
          designed dev board.
        </p>
        <p>
          Throughout the weekend, we provide amazing catered meals for
          breakfast, lunch, and dinner. We also have an all you can drink
          coffee, latte, etc. bar and snacks passed out during the event.
        </p>
        <p>
          At the end we have an awards ceremony where over $10,000 in prizes are
          given out. Last year winning teams received DJI Phantoms or Nintendo
          Switches. In addition to BoilerMake prizes, sponsors also usually have
          prizes for their categories.
        </p>
      </div>
    </div>
    <PreFooter />
  </div>
);

export default Home;
