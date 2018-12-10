import React, { Component } from 'react';
import apiFetch from '../../actions';
import ApplicationTimeSeries from './ApplicationTimeSeries';
import ExecCreateAnnouncement from './ExecCreateAnnouncement';
import moment from 'moment';
import { Grid, Header, Segment, Statistic } from 'semantic-ui-react';
//now the redux integration layer
import { fetchApplications } from '../../actions/exec';
import { createAnnouncement, fetchAnnouncements } from '../../actions/dayof';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        interest_count: 0,
        reasons_map: {}
      }
    };
  }

  componentDidMount() {
    this.fetchData();
    this.props.fetchApplications();
    this.props.fetchAnnouncements();
  }
  fetchData() {
    return apiFetch('exec/dashboard')
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          this.setState({ data: json.data });
        }
      });
  }

  render() {
    return (
      <div>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" dividing>
                Some Numbers
              </Header>
              <Segment inverted>
                <Statistic.Group horizontal size="large">
                  <Statistic
                    inverted
                    label="Interest Signups"
                    value={this.state.data.interest_count}
                    color="grey"
                  />
                  <Statistic
                    inverted
                    label="Total Applications"
                    value={this.props.exec.application_list.length}
                    color="orange"
                  />
                  <Statistic
                    inverted
                    label="Completed Applications"
                    value={
                      this.props.exec.application_list.filter(
                        app => app.completed
                      ).length
                    }
                    color="green"
                  />
                  <Statistic
                    inverted
                    label="RSVP Applications"
                    value={
                      this.props.exec.application_list.filter(app => app.rsvp)
                        .length
                    }
                    color="green"
                  />
                  <Statistic
                    inverted
                    label="Checked IN"
                    value={
                      this.props.exec.application_list.filter(
                        app => app.checked_in_at !== null
                      ).length
                    }
                    color="green"
                  />
                </Statistic.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" dividing>
                # Of Applications Created Per Day
              </Header>
              <ApplicationTimeSeries
                data={this.props.exec.application_list}
                timekey="created_at"
              />
              <Header as="h3" dividing>
                Check In rate
              </Header>
              <ApplicationTimeSeries
                data={this.props.exec.application_list}
                timekey="checked_in_at"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" dividing>
                Invalidation Reason Counts
              </Header>
              <Segment inverted>
                <Statistic.Group horizontal size="large">
                  {Object.keys(this.state.data.reasons_map).map(x => (
                    <Statistic
                      inverted
                      label={x}
                      value={this.state.data.reasons_map[x]}
                      color="red"
                    />
                  ))}
                </Statistic.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" dividing>
                Create an Announcement
              </Header>
              <ExecCreateAnnouncement
                createAnnouncement={this.props.createAnnouncement}
              />
              <Header as="h3" dividing>
                Announcements
              </Header>
              {this.props.dayof.announcements.map(a => {
                let when = moment.utc(a.created_at);
                return (
                  <div key={a.id}>
                    {when.fromNow()} <i>({when.format()})</i>
                    <br />
                    <b>{a.body}</b>
                    <hr />
                  </div>
                );
              })}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exec: state.exec,
    dayof: state.dayof
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchApplications,
      createAnnouncement,
      fetchAnnouncements
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecDashboard);
