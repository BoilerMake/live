import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ApplicationSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: props[this.props.field] || null };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps[this.props.field] !== this.props[this.props.field]) {
      this.setState({ selectValue: nextProps[this.props.field] });
    }
  }
  updateValue(newValue) {
    if (this.props.multi && newValue.split(',').length > 3) {
      //more than 3 things selected!
      return;
    }
    this.setState({ selectValue: newValue });
    this.props.changeApplicationFieldValue(this.props.field, newValue);
  }
  render() {
    let transFormedData = this.props.options;
    return (
      <div>
        <Select
          simpleValue
          className="p-application_select"
          multi={this.props.multi}
          joinValues={this.props.multi}
          options={transFormedData}
          clearable={false}
          name={'selected-' + this.props.field}
          value={this.state.selectValue}
          onChange={this.updateValue.bind(this)}
          searchable={this.props.searchable}
        />
      </div>
    );
  }
}
ApplicationSelectField.displayName = 'ApplicationSelectField';
ApplicationSelectField.defaultProps = {
  searchable: false,
  multi: false
};

function mapStateToProps(state, ownProps) {
  let form = state.application.applicationForm;
  let { field } = ownProps;
  return {
    [field]: form ? form[field] : null
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeApplicationFieldValue }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationSelectField);
