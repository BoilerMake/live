import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import CheckinCard from './CheckinCard';
import { Card, Grid, Form, Icon } from 'semantic-ui-react';
import { fetchUsers, checkInUser, searchUsers } from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', hashid: '' };
    this.checkInClicked = this.checkInClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // don't prefetch this because it's slooow for 1500+ users
    // this.props.fetchUsers();
  }
  checkInClicked(userId) {
    console.log('clicked for', userId);
    this.props.checkInUser(userId);
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  handleSubmit(type) {
    let { name, hashid } = this.state;
    this.props.searchUsers({ name, hashid });
    this.setState({ name: '', hashid: '' });
  }
  render() {
    let a = this.props.exec.user_list.map(user => (
      <CheckinCard
        key={user.id}
        user={user}
        checkInClicked={this.checkInClicked}
      />
    ));
    let { name, hashid } = this.state;
    return (
      <div>
        <Header as="h1" dividing>
          Hacker Check In
        </Header>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Header as="h3">By first OR last name</Header>
                <Form.Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <Form.Button type="submit" onClick={this.handleSubmit}>
                  Submit
                </Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Header as="h3">By hashid / shortcode</Header>
                <Form.Input
                  placeholder="Shortcode"
                  name="hashid"
                  value={hashid}
                  onChange={this.handleChange}
                />
                <Form.Button type="submit" onClick={this.handleSubmit}>
                  Submit
                </Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.props.exec.user_list_loading ? (
          <div>
            Data Loading!! <Icon loading name="spinner" size="large" />
          </div>
        ) : null}
        {this.props.exec.user_list.length === 0 &&
        !this.props.exec.user_list_loading ? (
          <div> no results :(</div>
        ) : null}
        <Card.Group>{a}</Card.Group>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exec: state.exec
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUsers,
      checkInUser,
      searchUsers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecCheckin);
