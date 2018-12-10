import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { fetchUsers } from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ExecUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        Cell: props => (
          <span>
            <Link to={`/exec/users/${props.value}`}>{props.value}</Link>
          </span>
        ),
        width: 100
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'email',
        accessor: 'email'
      },
      {
        Header: 'roles',
        accessor: 'roles',
        Cell: props => <span>{props.value.join(', ')}</span>
      },
      {
        Header: "Github Auth'd?",
        id: 'ghauth',
        accessor: d => (d.github_user_id ? 'yes' : 'no')
      }
    ];

    return (
      <div>
        <Header as="h3" dividing>
          All Users
        </Header>
        <ReactTable
          filterable
          defaultFilterMethod={(filter, row) =>
            row[filter.id].toLowerCase().includes(filter.value.toLowerCase())
          } //fuzzy
          data={this.props.exec.user_list}
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
      fetchUsers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecUsers);
