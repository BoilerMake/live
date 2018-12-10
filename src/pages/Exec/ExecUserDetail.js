import React, { Component } from 'react';
import { Grid, Header, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExecAuditLogView from './ExecAuditLogView';
import { fetchUserDetail } from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecUserDetail extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchUserDetail(this.props.match.params.userId);
  }

  render() {
    let { userId } = this.props.match.params;
    let userDetail = this.props.exec.user_detail[userId];
    if (!userDetail || this.props.exec.user_detail_loading) {
      return <h1>loading...</h1>;
    }

    return (
      <div>
        <Header as="h1">
          <Icon name="user" />
          <Header.Content>
            User #{userId}: {userDetail.name}
          </Header.Content>
        </Header>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" dividing>
                Basic Info
              </Header>
              {userDetail.application_id ? (
                <Link to={'/exec/applications/' + userDetail.application_id}>
                  <Button>
                    View Application (#
                    {userDetail.application_id})
                  </Button>
                </Link>
              ) : (
                <Button disabled>User has no Application!</Button>
              )}
              <List>
                <List.Item>
                  <List.Header>First Name</List.Header>
                  {userDetail.first_name || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>Last Name</List.Header>
                  {userDetail.last_name || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>email</List.Header>
                  {userDetail.email || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>phone</List.Header>
                  {userDetail.phone || 'n/a'}
                </List.Item>
                <List.Item>
                  <List.Header>created at</List.Header>
                  {userDetail.created_at}
                </List.Item>
                <List.Item>
                  <List.Header>linked to github?</List.Header>
                  {userDetail.github_user_id ? 'yes' : 'no'}
                </List.Item>
                <List.Item>
                  <List.Header>roles</List.Header>
                  <List.Item as="ul">
                    {userDetail.roles.map(r => (
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
              <ExecAuditLogView audits={userDetail.audits} />
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
      fetchUserDetail
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecUserDetail);
