import React from 'react';
import MLHBadge from '../components/MLHBadge';
import FAQ from './Info/FAQ';
import Animation from './Animation';
import Sponsors from '../components/Sponsors';

const Landing = () => (
  <div>
    <div className="landing-page">
      <MLHBadge className="mlh" />
      <Animation />
    </div>
    <FAQ />
    <Sponsors />
  </div>
);

export default Landing;
