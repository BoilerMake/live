import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import { decisionMap } from '../Application/ApplicationConsts';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { fetchApplications } from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecApplications extends Component {
  componentDidMount() {
    this.props.fetchApplications();
  }
  render() {
    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        Cell: props => (
          <span>
            <Link to={`/exec/applications/${props.value}`}>{props.value}</Link>
          </span>
        ),
        width: 100
      },
      {
        Header: 'Name',
        accessor: 'user.name'
      },
      {
        Header: 'email',
        accessor: 'user.email'
      },
      {
        Header: 'school',
        id: 'schoolName',
        accessor: d => (d.school ? d.school.name : '')
      },
      {
        Header: 'Completed?',
        id: 'completed',
        accessor: d => (d.completed ? 'yes' : 'no')
      },
      {
        Header: 'Decision',
        id: 'decision',
        accessor: d => `${decisionMap[d.decision]} (${d.decision})`
      },
      {
        Header: 'RSVP?',
        id: 'rsvp',
        accessor: d => (d.rsvp === null ? 'n/a' : d.rsvp ? 'yes' : 'no')
      }
    ];

    return (
      <div>
        <Header as="h3" dividing>
          All Applications
        </Header>
        <ReactTable
          filterable
          defaultFilterMethod={(filter, row) =>
            row[filter.id].toLowerCase().includes(filter.value.toLowerCase())
          } //fuzzy
          data={this.props.exec.application_list}
          columns={columns}
        />
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
      fetchApplications
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecApplications);
