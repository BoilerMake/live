import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Card, Button } from 'bm-kit';
import ApplicationTextField from './ApplicationTextField';
import ApplicationToggle from './ApplicationToggle';
import ApplicationSelectField from './ApplicationSelectField';
import ApplicationCompletedCard from './ApplicationCompletedCard';
import ValidationError from './ValidationError';
// import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';

import {
  raceOptions,
  genderOptions,
  gradYearOptions,
  isFirstHackathonOptions
} from './ApplicationConsts';

import './_pillar.application.source.scss';

class ApplicationForm extends Component {
  fieldHasError(field) {
    const { validation } = this.props.application;
    return validation.reason_field.indexOf(field) > -1;
  }

  fieldErrorText(field) {
    const { validation } = this.props.application;
    const fieldIndex = validation.reason_field.indexOf(field);
    if (fieldIndex <= -1) return null;

    return validation.reason_label[fieldIndex];
  }

  render() {
    const { applicationForm } = this.props.application;
    const isLoading = this.props.application.loading;
    const isGithubLinked =
      this.props.user.me && this.props.user.me.github_user_id !== null;
    let dropzoneRef;

    return (
      <Dropzone
        ref={node => {
          dropzoneRef = node;
        }}
        disableClick
        multiple={false}
        accept="application/pdf"
        onDrop={this.props.onResumeDrop.bind(this)}
        style={{ border: 'none', height: '100%' }}
      >
        <ApplicationCompletedCard show={applicationForm.completed} />
        <Card className="p-application__form">
          <h1 className="p-application_title">Application</h1>

          <h2 className="p-application_label">Personal</h2>
          <ApplicationTextField
            field="first_name"
            label="First Name"
            hasError={this.fieldHasError('first_name')}
            errorText={this.fieldErrorText('first_name')}
          />
          <ApplicationTextField
            field="last_name"
            label="Last Name"
            hasError={this.fieldHasError('last_name')}
            errorText={this.fieldErrorText('last_name')}
          />
          <ApplicationTextField
            field="phone"
            label="Phone Number"
            hasError={this.fieldHasError('phone')}
            errorText={this.fieldErrorText('phone')}
          />
          <div className="p-application__form_label">
            Is this your first hackathon?
          </div>
          <ApplicationSelectField
            field="isFirstHackathon"
            options={isFirstHackathonOptions}
          />
          <ValidationError
            field="isFirstHackathon"
            validation={this.props.application.validation}
          />

          <h2 className="p-application_label">School</h2>
          <div className="p-application__form_label">School</div>
          <ApplicationSelectField
            field="school_id"
            searchable
            options={this.props.schools}
          />
          <ValidationError
            field="school_id"
            validation={this.props.application.validation}
          />

          <ApplicationTextField
            field="major"
            label="Major"
            hasError={this.fieldHasError('major')}
            errorText={this.fieldErrorText('major')}
          />
          <div className="p-application__form_label">
            Expected Graduation Year
          </div>
          <ApplicationSelectField
            field="grad_year"
            searchable
            options={gradYearOptions}
          />
          <ValidationError
            field="grad_year"
            validation={this.props.application.validation}
          />

          <h2 className="p-application_label">Social</h2>
          <ApplicationTextField
            field="linkedin"
            label="LinkedIn Username"
            disabled={!applicationForm.has_no_linkedin}
            hasError={this.fieldHasError('linkedin')}
            errorText={this.fieldErrorText('linkedin')}
          />
          <ApplicationTextField
            field="github"
            label="GitHub"
            disabled={!applicationForm.has_no_github || isGithubLinked}
            hasError={this.fieldHasError('github')}
            errorText={this.fieldErrorText('github')}
          />
          {isGithubLinked ? (
            <div className="c-application__field_note">
              You signed up with github, so you can't change the username
            </div>
          ) : null}

          <h2 className="p-application_label">Other Suff</h2>
          <div className="p-application__form_label">Gender</div>
          <ApplicationSelectField field="gender" options={genderOptions} />
          <ValidationError
            field="gender"
            validation={this.props.application.validation}
          />
          <div className="p-application__form_label">Race</div>
          <ApplicationSelectField field="race" options={raceOptions} />
          <ValidationError
            field="race"
            validation={this.props.application.validation}
          />
          <div className="p-application_resume_upload">
            <Button
              type="button"
              onClick={() => {
                dropzoneRef.open();
              }}
              full
            >
              Drop or click to upload Resume (PDF only)
            </Button>
            {/* <ResumeUploadProgressIndicator/> */}
            {applicationForm.resume_uploaded ? (
              <p className="c-application__field_note">
                You've uploaded{' '}
                <a
                  href={applicationForm.resume_get_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {applicationForm.resume_filename}
                </a>
              </p>
            ) : null}
            <ValidationError
              field="resume_filename"
              validation={this.props.application.validation}
            />
          </div>

          <div className="p-application__form_tanc flex v-center">
            <ApplicationToggle field="tandc_1" />
            <label className="marginl last-check-s">
              I will be 18 or older by October 19, 2018.
            </label>
          </div>
          <div className="p-application__form_tanc flex v-center">
            <ApplicationToggle field="tandc_2" />
            <label className="marginl last-check-s">
              I agree to the{' '}
              <a
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH code of conduct
              </a>
            </label>
          </div>
          <div
            className="p-application__form_tanc flex v-center"
            style={{ flexWrap: 'nowrap' }}
          >
            <div>
              <ApplicationToggle field="tandc_3" />
            </div>
            <div className="marginl last-check" style={{ maxWidth: '700px' }}>
              I agree to the terms of both the&nbsp;
              <a
                href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Contest Terms and Conditions
              </a>
              &nbsp;and the&nbsp;
              <a
                href="https://mlh.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Privacy Policy.&nbsp;
              </a>
              Please note that you may receive pre and post-event informational
              e-mails and occasional messages about hackathons from MLH as per
              the MLH Privacy Policy.
            </div>
          </div>
          <div className="c-text_center">
            <p>You can edit your application until October 10th.</p>
          </div>
          <div className="row">
            <Button
              disabled={isLoading}
              onClick={() => {
                this.props.saveApplication();
              }}
              full
            >
              Save Application
            </Button>
          </div>
        </Card>
      </Dropzone>
    );
  }
}

//now the redux integration layer
import {
  saveApplication,
  onResumeDrop,
  toggleApplicationFieldValue
} from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user,
    application: state.application,
    schools: state.application.schools.map(school => ({
      value: school.id,
      label: school.name
    }))
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveApplication,
      onResumeDrop,
      toggleApplicationFieldValue
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationForm);
