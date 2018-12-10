import React, { Component } from 'react';
import { Grid, Header, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExecAuditLogView from './ExecAuditLogView';
import { fetchApplicationDetail } from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecApplicationDetail extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchApplicationDetail(this.props.match.params.applicationId);
  }

  render() {
    let { applicationId } = this.props.match.params;
    let applicationDetail = this.props.exec.application_detail[applicationId];
    if (!applicationDetail || this.props.exec.application_detail_loading) {
      return <h1>loading...</h1>;
    }

    return (
      <div>
        <Header as="h1">
          <Icon name="user" />
          <Header.Content>
            Application #{applicationId}: {applicationDetail.first_name}{' '}
            {applicationDetail.last_name}
          </Header.Content>
        </Header>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" dividing>
                Basic Info
              </Header>
              <Link to={'/exec/users/' + applicationDetail.user_id}>
                <Button>
                  View User (#
                  {applicationDetail.user_id})
                </Button>
              </Link>
              <List>
                <List.Item>
                  <List.Header>First Name</List.Header>
                  {applicationDetail.first_name || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>Last Name</List.Header>
                  {applicationDetail.last_name || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>gender</List.Header>
                  {applicationDetail.gender || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>major</List.Header>
                  {applicationDetail.major || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>grad_year</List.Header>
                  {applicationDetail.grad_year || 'n/a'}
                </List.Item>

                <List.Item>
                  <List.Header>linkedin</List.Header>
                  {applicationDetail.linkedin || 'n/a'}
                  <i>
                    {applicationDetail.has_no_linkedin
                      ? '(marked that they have no linkedin)'
                      : null}
                  </i>
                </List.Item>

                <List.Item>
                  <List.Header>github</List.Header>
                  {applicationDetail.github || 'n/a'}
                  <i>
                    {applicationDetail.has_no_github
                      ? '(marked that they have no github)'
                      : null}
                  </i>
                </List.Item>

                <List.Item>
                  <List.Header>is first hackathon?</List.Header>
                  {applicationDetail.isFirstHackathon ? 'yes' : 'no'}
                </List.Item>
                <List.Item>
                  <List.Header>school</List.Header>
                  {applicationDetail.school
                    ? `${applicationDetail.school.name} (#${
                        applicationDetail.school.id
                      })`
                    : 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>resume</List.Header>
                  {applicationDetail.resume_uploaded ? (
                    <a
                      href={applicationDetail.resumeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  ) : (
                    'n/a'
                  )}
                </List.Item>

                <List.Item>
                  <List.Header>Valid aka. completed?</List.Header>
                  {applicationDetail.validationDetails.valid ? 'yes' : 'no'}
                  <List.Item as="ul">
                    {applicationDetail.validationDetails.reason_label.map(r => (
                      <List.Item key={r} as="li" value="-">
                        {r}
                      </List.Item>
                    ))}
                  </List.Item>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" dividing>
                Audit Log
              </Header>
              <ExecAuditLogView audits={applicationDetail.audits} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

//now the redux integration layer
function mapStateToProps(state) {
  return {
    exec: state.exec
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchApplicationDetail
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecApplicationDetail);
