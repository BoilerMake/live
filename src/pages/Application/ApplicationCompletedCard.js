import React from 'react';
import { Card } from 'bm-kit';

const ApplicationCompletedCard = ({ show }) => {
  return show ? (
    <Card className="p-application__status_card">
      <p>
        Hey there{' '}
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
        just a heads up! Your application is complete and is under review.
        Expect to hear back by October 10th at the latest.
      </p>
      <p>
        In the mean time, follow us on{' '}
        <a href="https://twitter.com/boilermake1">Twitter</a>
        ,&nbsp;
        <a href="https://facebook.com/boilermake">Facebook</a>, or&nbsp;
        <a href="https://instagram.com/boilermake">Instagram</a>
      </p>
    </Card>
  ) : null;
};

export default ApplicationCompletedCard;
