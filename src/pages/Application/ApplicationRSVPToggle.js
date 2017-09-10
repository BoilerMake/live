import React from 'react';
import { changeApplicationFieldValue, saveApplication } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ApplicationRSVPToggle = ({changeApplicationFieldValue, saveApplication, field, applicationForm, disabled, isLoading, styles}) =>
        <div>
            <button
                disabled={applicationForm.rsvp === 1 || isLoading}
                className={applicationForm.rsvp !== null && applicationForm.rsvp === 1 ? 'rsvp-button-selected' : 'rsvp-button'}
                onClick={()=>{changeApplicationFieldValue('rsvp', 1); saveApplication(true)}}>
                I'll be there!
            </button>
            <button
                disabled={applicationForm.rsvp === 0 || isLoading}
                className={applicationForm.rsvp !== null && applicationForm.rsvp === 0 ? 'rsvp-button-selected' : 'rsvp-button'}
                onClick={()=>{changeApplicationFieldValue('rsvp', 0); saveApplication(true)}}>
                I can't make it
            </button>
        </div>;

function mapStateToProps (state) {
    return {
        applicationForm: state.application.applicationForm,
        isLoading: state.application.isLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeApplicationFieldValue, saveApplication}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRSVPToggle);
