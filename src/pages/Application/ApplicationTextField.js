import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextInput } from 'bm-kit';

const ApplicationTextField = ({
  changeApplicationFieldValue,
  field,
  applicationForm,
  disabled,
  isLoading,
  styles,
  flattenBottomCorners = false,
  label,
  hasError,
  errorText
}) => (
  <TextInput
    disabled={disabled || false || isLoading} //disable the input if: disabled (default false) OR isLoading
    value={applicationForm[field] || ''} //react is unhappy with value being null
    onChange={e => changeApplicationFieldValue(field, e.target.value)}
    label={label}
    hasError={hasError}
    errorText={errorText}
  />
);
function mapStateToProps(state) {
  return {
    applicationForm: state.application.applicationForm,
    isLoading: state.application.isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeApplicationFieldValue }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationTextField);
