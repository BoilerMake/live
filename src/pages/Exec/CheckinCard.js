import React from 'react';
import { decisionMap, rsvpMap } from '../Application/ApplicationConsts';
import { Card, Button, Icon } from 'semantic-ui-react';

const CheckinCard = ({ user, checkInClicked }) => {
  let goodIcon = <Icon name="check" color="green" size="large" />;
  let warningIcon = <Icon name="warning circle" color="orange" size="large" />;
  let badIcon = <Icon name="minus circle" color="red" size="large" />;

  let isCompleted = user.application && user.application.completed === true;
  let isAccepted = user.application && user.application.decision === 3;
  let isRSVPd = user.application && user.application.rsvp === 1;
  let checkInTime = user.application && user.application.checked_in_at;
  let isAccessCardPrinted =
    user.application && user.application.is_card_printed;
  let isNotCheckedIn = checkInTime === null;

  let isGoodToCheckin = isCompleted && isAccepted && isRSVPd && isNotCheckedIn;
  return (
    <Card fluid={true}>
      <Card.Content>
        <Card.Header>
          {user.name} | user:
          {user.id} | app:
          {user.application && user.application.id}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {user.application && user.application.school
              ? user.application.school.name
              : 'no school!'}
          </span>
        </Card.Meta>
        <Card.Description>
          {/*<pre>{JSON.stringify(user,null,2)}</pre>*/}
          <b>email:</b> {user.email}
          <br />
          {isCompleted ? goodIcon : badIcon} <b>Completed:</b>{' '}
          {user.application && user.application.completed ? 'yes' : 'NO'}
          <br />
          {isAccepted ? goodIcon : badIcon} <b>Decision:</b>{' '}
          {user.application && decisionMap[user.application.decision]}
          <br />
          {isRSVPd ? goodIcon : badIcon} <b>RSVP:</b>{' '}
          {user.application && rsvpMap[user.application.rsvp]}
          <br />
          {isNotCheckedIn ? goodIcon : badIcon} <b>Checked in yet:</b>{' '}
          {isNotCheckedIn ? 'not yet!' : checkInTime}
          <br />
          {isAccessCardPrinted ? goodIcon : warningIcon} <b>Card printed:</b>{' '}
          {isAccessCardPrinted ? 'yes' : 'NO!'}
          <br />
          <Button
            basic
            color={isGoodToCheckin ? 'green' : 'red'}
            onClick={() => {
              checkInClicked(user.id);
            }}
          >
            Check In
          </Button>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button>
          <Icon name="user" />
          {user.hashid}
        </Button>
      </Card.Content>
    </Card>
  );
};
export default CheckinCard;
