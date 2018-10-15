import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Card, Button, TextInput } from 'bm-kit';

import ApplicationDecision from '../Application/ApplicationDecision';

import { fetchApplication } from '../../actions/application';
import { fetchMe, updateMe } from '../../actions/users';
import apiFetch from '../../actions/';

import './_pillar.dashboard.source.scss';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectIdea: '',
      teamName1: '',
      teamName2: '',
      teamName3: ''
    };

    this.handleTeamMemberChange = this.handleTeamMemberChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.submitProjectTeamInfo = this.submitProjectTeamInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchApplication();
    apiFetch('users/me')
      .then(response => response.json())
      .then(json => {
        this.setState({
          projectIdea: json.data.project_idea,
          teamName1: json.data.team_name_1,
          teamName2: json.data.team_name_2,
          teamName3: json.data.team_name_3
        });
      });
  }

  handleTeamMemberChange(e, i) {
    const state = this.state;
    state[`teamName${i}`] = e.target.value;
    this.setState(state);
  }

  handleProjectChange(e) {
    this.setState({ projectIdea: e.target.value });
  }

  submitProjectTeamInfo() {
    const me = this.props.user.me;
    me.project_idea = this.state.projectIdea;
    me.team_name_1 = this.state.teamName1;
    me.team_name_2 = this.state.teamName2;
    me.team_name_3 = this.state.teamName3;
    this.props.updateMe(me);
  }

  render() {
    // let { me } = this.props.user;
    let { applicationForm } = this.props.application;
    let doesUserHaveDecision =
      applicationForm.decision !== null &&
      applicationForm.decision !== undefined &&
      applicationForm.decision !== 0;

    return (
      <div className="p-dashboard">
        <h1>Dashboard</h1>
        {doesUserHaveDecision ? <ApplicationDecision /> : null}

        {applicationForm.decision === 4 ||
        applicationForm.decision === 1 ? null : ( // if null or declined
          <div className="p-dashboard__content_wrapper">
            {doesUserHaveDecision ? null : (
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
            )}
            <Card className="">
              <h2>Project Idea</h2>
              <p>Briefly let us know what you plan to make!</p>
              <TextInput
                value={this.state.projectIdea}
                onChange={e => this.handleProjectChange(e)}
              />
              <Button onClick={this.submitProjectTeamInfo}>Save</Button>
            </Card>
            <Card className="p-dashboard__team_members">
              <h2>Add Team Members</h2>
              <p>
                You can add up to three team members. Let us know their name, or
                email they used to sign up.
              </p>
              <TextInput
                value={this.state.teamName1}
                label={`Team Member 1`}
                onChange={e => this.handleTeamMemberChange(e, 1)}
              />
              <TextInput
                value={this.state.teamName2}
                label={`Team Member 2`}
                onChange={e => this.handleTeamMemberChange(e, 2)}
              />
              <TextInput
                value={this.state.teamName3}
                label={`Team Member 3`}
                onChange={e => this.handleTeamMemberChange(e, 3)}
              />
              <Button onClick={this.submitProjectTeamInfo}>Save</Button>
            </Card>{' '}
          </div>
        )}
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
      fetchMe,
      updateMe
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
