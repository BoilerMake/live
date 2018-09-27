import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Card, Button, TextInput } from 'bm-kit';

import ApplicationDecision from '../Application/ApplicationDecision';

import { fetchApplication } from '../../actions/application';
import { fetchMe, updateMe } from '../../actions/users';

import './_pillar.dashboard.source.scss';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectIdea: '',
      teamMembers: ['', '', '']
    };

    this.handleTeamMemberChange = this.handleTeamMemberChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.submitProjectTeamInfo = this.submitProjectTeamInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchApplication();
  }

  handleTeamMemberChange(e, i) {
    const teamMembers = this.state.teamMembers;
    teamMembers[i] = e.target.value;

    this.setState({ teamMembers });
  }

  handleProjectChange(e) {
    this.setState({ projectIdea: e.target.value });
  }

  submitProjectTeamInfo() {
    const me = this.props.user.me;
    me.project_idea = this.state.projectIdea;
    me.team_names = this.state.teamMembers;
    console.log(me);
    this.props.updateMe(me);
  }

  render() {
    let { me } = this.props.user;
    const teamMembers =
      me && me.team_names !== null ? me.team_names : this.state.teamMembers;
    const projectIdea = me ? me.project_idea : this.state.projectIdea;
    let { applicationForm } = this.props.application;
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
              <TextInput
                value={projectIdea || ''}
                onChange={e => this.handleProjectChange(e)}
              />
              <Button>Save</Button>
            </Card>
          </div>
          <Card className="p-dashboard__team_members">
            <h2>Add Team Members</h2>
            <p>
              You can add up to three team members. Let us know their name, or
              email they used to sign up.
            </p>

            {teamMembers.map((teamMember, i) => {
              return (
                <TextInput
                  value={teamMember || ''}
                  label={`Team Member ${i + 1}`}
                  onChange={e => this.handleTeamMemberChange(e, i)}
                  key={i}
                />
              );
            })}
            <Button onClick={this.submitProjectTeamInfo}>Save</Button>
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
