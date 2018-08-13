import React, { Component } from 'react';
import ApplicationDecision from './ApplicationDecision';

import './_pillar.application.source.scss';

class Application extends Component {
  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchApplication();
    this.props.fetchSchoolList();
  }

  render() {
    let { me } = this.props.user;
    let { applicationForm, loading } = this.props.application;
    let doesUserHaveDecision =
      applicationForm.decision !== null &&
      applicationForm.decision !== undefined &&
      applicationForm.decision !== 0;

    let content;
    if (!me || !applicationForm || loading) {
      content = (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else if (doesUserHaveDecision) {
      content = <ApplicationDecision />;
    } else {
      content = <h1>Applications Closed.</h1>;
    }

    return <div className="p-application">{content}</div>;
  }
}

//now the redux integration layer
import { fetchApplication, fetchSchoolList } from '../../actions/application';
import { fetchMe } from '../../actions/users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      fetchSchoolList,
      fetchMe
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
