import React, { Component } from 'react';
import moment from 'moment';

class Announcements extends Component {
  componentDidMount() {
    this.props.fetchAnnouncements();

    setInterval(() => {
      this.props.fetchAnnouncements();
    }, 5 * 60 * 1000);
  }

  render() {
    return (
      <div className="col-9">
        <div className="p-day_of--section_header">
          <h3 style={{ margin: 0 }}>Announcements</h3>
        </div>
        <div className="c-day_of_card p-day_of--announcements">
          <div className="p-day_of--announcements_holder">
            {this.props.dayof.announcements.map(a => {
              let when = moment.utc(a.created_at);
              return (
                <div
                  key={a.id}
                  className="c-day_of_card p-day_of--announcement"
                >
                  <p>{a.body}</p>
                  <i>{when.fromNow()}</i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import { fetchAnnouncements } from '../../actions/dayof';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    dayof: state.dayof
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchAnnouncements
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Announcements);
