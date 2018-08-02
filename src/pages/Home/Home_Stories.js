import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/images/hacker.jpg';

const Stories = () => (
  <div className="stories">
    <div className="max-width home" style={{ marginBottom: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Hacker Stories</h2>
      <div className="flex">
        <div className="col-4 padding">
          <div className="card hover">
            <img src={HeaderImg} width="100%" alt="favorite hack" />
            <div className="padding">
              Bla bla bla is a person who came to BoilerMake 5 and made a cool
              thing.
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="col-4 padding">
          <div className="card hover">
            <img src={HeaderImg} width="100%" alt="favorite hack" />
            <div className="padding">
              Bla bla bla is a person who came to BoilerMake 5 and made a cool
              thing.
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="col-4 padding">
          <div className="card hover">
            <img src={HeaderImg} width="100%" alt="favorite hack" />
            <div className="padding">
              Bla bla bla is a person who came to BoilerMake 5 and made a cool
              thing.
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stories;
