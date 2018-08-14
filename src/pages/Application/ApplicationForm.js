import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Card, Button } from 'bm-kit';
import ApplicationTextField from './ApplicationTextField';
import ApplicationToggle from './ApplicationToggle';
import ApplicationSelectField from './ApplicationSelectField';
// import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';
import {
  raceOptions,
  genderOptions,
  gradYearOptions,
  isFirstHackathonOptions
} from './ApplicationConsts';

import './_pillar.application.source.scss';

class ApplicationForm extends Component {
  render() {
    const { applicationForm, validation } = this.props.application;
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
        <Card className="p-application__form">
          <h1>Application</h1>
          {applicationForm.completed ? (
            <div className="appInfoBanner">
              Hey there - just a heads up: Your application is complete and is
              under review. Expect to hear back by Sept 22 at the latest.
            </div>
          ) : null}
          <ApplicationTextField field="first_name" label="First Name" />
          <ApplicationTextField
            field="last_name"
            label="Last Name"
            hasError
            errorText="Last Name is required"
          />
          <div className="p-application__form_label">School</div>
          <ApplicationSelectField
            field="school_id"
            searchable
            options={this.props.schools}
          />
          <ApplicationTextField field="major" label="Major" />
          <div className="p-application__form_label">
            Expected Graduation Year
          </div>
          <ApplicationSelectField
            field="grad_year"
            searchable
            options={gradYearOptions}
          />
          <ApplicationTextField
            field="linkedin"
            label="LinkedIn"
            disabled={!applicationForm.has_no_linkedin}
          />
          <ApplicationTextField
            field="github"
            label="GitHub"
            disabled={!applicationForm.has_no_github}
          />
          {isGithubLinked ? (
            <div>
              You signed up with github, so you can't change the username
            </div>
          ) : null}
          <div className="p-application__form_label">Gender</div>
          <ApplicationSelectField field="gender" options={genderOptions} />
          <div className="p-application__form_label">Race</div>
          <ApplicationSelectField field="race" options={raceOptions} />
          <div className="p-application_resume_upload">
            <label>Upload Resume (PDF only)</label>
            <Button
              type="button"
              onClick={() => {
                dropzoneRef.open();
              }}
              full
            >
              Drop or click to upload
            </Button>
            {/* <ResumeUploadProgressIndicator/> */}
            {applicationForm.resume_uploaded ? (
              <p>
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
          </div>
          <div className="p-application__form_label">
            Is this your first hackathon?
          </div>
          <ApplicationSelectField
            field="isFirstHackathon"
            options={isFirstHackathonOptions}
          />
          <div className="p-application__form_tanc flex v-center">
            <ApplicationToggle field="tandc_1" />
            <label className="marginl last-check-s">
              I will be 18 or older by Sept 29, 2017.
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
          <div className="p-application__form_tanc flex v-center">
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
          <div className="row">
            <p>You can edit your application until September 22.</p>
            {!applicationForm.completed ? (
              <div>
                <p>Your application is not complete:</p>
                <ul>
                  {validation.reason_label.map(x => (
                    <li>{x}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>
                <b>Your application is complete! stay tuned.</b>
              </p>
            )}
          </div>
          <div className="row">
            <Button
              disabled={isLoading}
              onClick={() => {
                this.props.saveApplication();
              }}
              full
            >
              {applicationForm.completed ? 'Submit' : 'Save & Come Back'}
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
