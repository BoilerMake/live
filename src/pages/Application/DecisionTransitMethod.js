import React, { PureComponent } from 'react';
import Hr from '../../components/Hr';

class DecisionTransitMethod extends PureComponent {
  renderHasBus() {
    return (
      <div className="p-transit_method__description">
        <p>
          We'll be sending a bus to {this.props.applicationForm.school.name}!
        </p>
        <p>
          Join the Facebook event{' '}
          <a
            href={`https://www.facebook.com/events/${
              this.props.applicationForm.school.facebook_event_id
            }`}
          >
            here
          </a>{' '}
          to stay up to date!
        </p>
      </div>
    );
  }

  renderHasCar() {
    return (
      <div className="p-transit_method__description">
        <p>
          Sadly we won't be able to send a bus to{' '}
          <b>{this.props.applicationForm.school.name}.</b>
        </p>
        <p>
          However, if you're willing to get here by your own means, we'd love to
          have you!.
        </p>
        <p>
          <i>
            Please note that we will not be providing any form of travel
            reimbursements.
          </i>
        </p>
      </div>
    );
  }

  renderHasFeet() {
    return (
      <p className="p-transit_method__description">
        Well, you have it easy! BoilerMake will be happening in the Black & Gold
        Gyms of the CoRec on campus.
      </p>
    );
  }

  render() {
    return (
      <div className="p-transit_method">
        <Hr>Getting to BoilerMake</Hr>
        {this.props.method === 'bus' ? this.renderHasBus() : null}
        {this.props.method === 'car' ? this.renderHasCar() : null}
        {this.props.method === 'walk' ? this.renderHasCarFeet() : null}
      </div>
    );
  }
}

export default DecisionTransitMethod;
