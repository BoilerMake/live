import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Card, Button, TextInput } from 'bm-kit';

import ApplicationDecision from '../Application/ApplicationDecision';

import { fetchApplication } from '../../actions/application';
import { fetchMe } from '../../actions/users';

import './_pillar.dashboard.source.scss';

class Application extends Component {
  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchApplication();
  }

  render() {
    let { me } = this.props.user;
    let { applicationForm, loading } = this.props.application;
    let doesUserHaveDecision =
      applicationForm.decision !== null &&
      applicationForm.decision !== undefined &&
      applicationForm.decision !== 0;

    return (
      <div className="p-dashboard">
        <h1>Dashboard</h1>
        <div className="p-dashboard__content_wrapper">
          <div className="p-dashboard__application">
            <Card className="p-dashboard__application_link">
              <h2>Application</h2>
              {applicationForm.completed ? (
                <p>
                  Your application is complete! You can make changes until
                  October 10th.
                </p>
              ) : (
                <p>
                  You can make changes to your application until October 10th.
                </p>
              )}
              <Link to="/application">
                <Button>View Application</Button>
              </Link>
            </Card>
            <Card className="">
              <h2>Project Idea</h2>
              <p>Breifly let us know what you plan to make!</p>
              <TextInput />
              <Button>Save</Button>
            </Card>
          </div>
          <Card className="p-dashboard__team_members">
            <h2>Add Team Members</h2>
            <p>
              You can add up to three team members. Let us know their name, or
              email they used to sign up.
            </p>
            <TextInput label="Team Member 1" />
            <TextInput label="Team Member 2" />
            <TextInput label="Team Member 3" />
            <Button>Save</Button>
          </Card>
        </div>

        {doesUserHaveDecision ? <ApplicationDecision /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    application: state.application
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchApplication,
      fetchMe
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
