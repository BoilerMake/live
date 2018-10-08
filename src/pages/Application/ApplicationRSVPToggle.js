import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'bm-kit';
import Hr from '../../components/Hr';
import {
  changeApplicationFieldValue,
  saveApplication
} from '../../actions/application';

import './_pillar.application.source.scss';

const ApplicationRSVPToggle = ({
  changeApplicationFieldValue,
  saveApplication,
  field,
  applicationForm,
  disabled,
  isLoading,
  styles
}) => (
  <div className="p-rsvp_toggle">
    <Hr>Can you make it BoilerMake?</Hr>
    <div className="text-center">
      <Button
        className="c_button p-application-toggle__button"
        type="button"
        disabled={applicationForm.rsvp === 1 || isLoading}
        onClick={() => {
          changeApplicationFieldValue('rsvp', 1);
          saveApplication(true);
        }}
      >
        I'll be there!
      </Button>
      <Button
        className="c_button p-application-toggle__button"
        type="button"
        disabled={applicationForm.rsvp === 0 || isLoading}
        onClick={() => {
          changeApplicationFieldValue('rsvp', 0);
          saveApplication(true);
        }}
      >
        I can't make it
      </Button>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    applicationForm: state.application.applicationForm,
    isLoading: state.application.isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { changeApplicationFieldValue, saveApplication },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationRSVPToggle);
