import React, { Component } from 'react';
import { Button, Card } from 'bm-kit';
import ApplicationTextField from './ApplicationTextField';
import ApplicationSelectField from './ApplicationSelectField';
import ApplicationRSVPToggle from './ApplicationRSVPToggle';
import { dietOptions, shirtOptions, skillOptions } from './ApplicationConsts';

class ApplicationDecision extends Component {
  renderHasBus() {
    const { applicationForm } = this.props.application;

    return (
      <div className="section">
        <p>We'll be sending a bus to {applicationForm.school.name}!</p>
        <p>
          Join the Facebook event{' '}
          <a
            href={`https://www.facebook.com/events/${
              applicationForm.school.facebook_event_id
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
    const { applicationForm } = this.props.application;

    return (
      <div className="section">
        <p>
          Sadly we won't be able to send a bus to{' '}
          <b>{applicationForm.school.name}.</b>
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
      <p>
        Well, you have it easy! BoilerMake will be happening in the Black & Gold
        Gyms of the CoRec on campus.
      </p>
    );
  }

  renderTransitMethod() {
    const { applicationForm } = this.props.application;
    const method = applicationForm.school.transit_method;

    if (method === 'bus') return this.renderHasBus();
    if (method === 'car') return this.renderHasCar();
    if (method === 'walk') return this.renderHasFeet();
  }

  renderRSVPYes() {
    // const { applicationForm } = this.props.application;
    const isLoading = this.props.application.loading;

    return (
      <div className="section">
        <h2>Neat! Just a few more steps.</h2>
        <p>
          Providing us with a phone number (optional) will allow us to send you
          important event updates! We will be providing everyone with lanyard
          nametags, you can pick up to 3 skills to be displayed on them. Lastly,
          if you have any special dietary requests, please{' '}
          <a href="mailto:team@boilermake.org">email us!</a>
        </p>
        <div className="row">
          <div className="col-6">
            <label>Phone #</label>
            <ApplicationTextField field="phone" />
          </div>
          <div className="col-6">
            <label>Pick up to 3 Skills</label>
            <ApplicationSelectField
              field="skills"
              multi
              searchable
              options={skillOptions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>T-shirt size</label>
            <ApplicationSelectField field="tshirt" options={shirtOptions} />
          </div>
          <div className="col-6">
            <label>Dietary Restrictions</label>
            <ApplicationSelectField
              field="diet"
              multi
              searchable
              options={dietOptions}
            />
          </div>
        </div>
        <br />
        <Button
          disabled={isLoading}
          onClick={() => {
            this.props.saveApplication(false, true);
          }}
          className="submit"
        >
          Submit RSVP
        </Button>
      </div>
    );
  }

  renderRSVPNo() {
    // const { applicationForm } = this.props.application;

    return (
      <p className="section">
        Aw{' '}
        <span role="img" aria-label="Sad">
          😢
        </span>{' '}
        Please come back and apply next year though!{' '}
      </p>
    );
  }

  renderAccepted() {
    const { applicationForm } = this.props.application;

    return (
      <div className="section">
        {applicationForm.is_rsvp_confirmed === 1 ? (
          <div>
            <div className="appInfoBanner">
              Your RSVP has been recorded - we will see you at BoilerMake!
              <h2>
                Your check in code is:{' '}
                <b>
                  <code>{applicationForm.user.hashid}</code>
                </b>
                <br /> Please have this + your photo ID ready to expedite check
                in.
              </h2>
            </div>
          </div>
        ) : (
          <p>
            Can you come? You must RSVP{' '}
            {applicationForm.rsvp_deadline ? (
              <span>by {applicationForm.rsvp_deadline}</span>
            ) : (
              <span>soon</span>
            )}{' '}
            or else we will offer your spot to someone else.
          </p>
        )}
        <h1>You're in!</h1>
        <p>
          Congratulations, we’re excited to invite you to this year’s retro
          twist on BoilerMake.{' '}
          <span role="img" aria-label="Heart">
            💜
          </span>
          <br />
          BoilerMake will last from around 6PM on Friday Sept 29 until
          approximately 2PM on Sunday October 1, and it will be held on Purdue's
          campus in West Lafayette.
          <br />
          All we need from you now is to RSVP so we know whether to expect you
          there or not!
        </p>
        <h2>Getting to BoilerMake</h2>
        {this.renderTransitMethod()}
        <ApplicationRSVPToggle />
        {applicationForm.rsvp !== null
          ? applicationForm.rsvp === 1
            ? this.renderRSVPYes()
            : this.renderRSVPNo()
          : null //don't show rest of form if they haven't clicked yes or no yet
        }
      </div>
    );
  }

  renderWaitlist() {
    return (
      <div className="section">
        <h1>Thanks for applying.</h1>
        <p>
          Unfortunately, we cannot accept you just yet. But don’t fret! We’ll
          let you know if space opens up so that you can hopefully attend
          BoilerMake this year.
        </p>
      </div>
    );
  }

  renderExpired() {
    return (
      <div className="section">
        <h1>Sorry about that.</h1>
        <p>
          Unfortunately, your acceptance offer has expired. We hope to see you
          at next year’s BoilerMake!
        </p>
      </div>
    );
  }

  renderError() {
    return (
      <div className="section">
        <h1>There was an error!</h1>
        <p>
          Sorry for the inconvenience. Please email us at{' '}
          <a href="mailto:team@boilermake.org">team@boilermake.org</a>
        </p>
      </div>
    );
  }

  render() {
    // let decisionMap = {
    //     4: 'EXPIRED',
    //     3: 'ACCEPT',
    //     2: 'WAITLIST',
    //     1: 'REJECT',
    //     0: 'UNDECIDED'
    // };
    const { applicationForm } = this.props.application;

    return (
      <Card className="p-decision">
        {applicationForm === 3 ? this.renderAccepted() : null}
        {applicationForm === 2 ? this.renderWaitlist() : null}
        {applicationForm === 4 ? this.renderExpired() : null}
      </Card>
    );
  }
}

//now the redux integration layer
import {
  saveApplication,
  toggleApplicationFieldValue
} from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user,
    application: state.application
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveApplication,
      toggleApplicationFieldValue
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationDecision);
