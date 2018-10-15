import React, { Component } from 'react';
import { Card } from 'bm-kit';
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
      <Card className="p-day_of--announcements">
        <h3>Announcements</h3>
        <div className="p-day_of--announcements_holder">
          {this.props.dayof.announcements.map(a => {
            let when = moment.utc(a.created_at);
            return (
              <Card key={a.id} className="p-day_of--announcement">
                <p>{a.body}</p>
                <i>{when.fromNow()}</i>
              </Card>
            );
          })}
        </div>
      </Card>
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
