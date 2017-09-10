import React, { Component } from 'react';
import ApplicationRSVPToggle from "./ApplicationRSVPToggle";
import {dietOptions, skillOptions} from "./ApplicationConsts";

class ApplicationForm extends Component {
    render () {
        // let decisionMap = {
        //     4: 'EXPIRED',
        //     3: 'ACCEPT',
        //     2: 'WAITLIST',
        //     1: 'REJECT',
        //     0: 'UNDECIDED'
        // };
        const { applicationForm }  = this.props.application;
        const isLoading = this.props.application.loading;

        let transitMessage;
        switch(applicationForm.school.transit_method) {
            case "bus":
                transitMessage = <div>
                    <p>We'll be sending a bus to {applicationForm.school.name}!</p>
                    <p>Join the Facebook event <a href={`https://www.facebook.com/events/${applicationForm.school.facebook_event_id}`}>here</a> to stay up to date!</p>
                </div>;
                break;
            case "car":
                transitMessage = <div>
                    <p>Sadly we won't be able to send a bus to <b>{applicationForm.school.name}.</b></p>
                    <p>However, if you're willing to get here by your own means, we'd love to have you!.</p>
                    <p><i>Note that we will not be providing any form of travel reimbursements.</i></p>
                </div>;
                break;
            case "walk":
                transitMessage = <div>Well, you have it easy! BoilerMake will be happening in the Black & Gold Gyms of the CoRec on campus.</div>;
                break;
            default:
              break;
        }

        let rsvpYes =
            <div>
                <h2>neat! a few last things.</h2>
                <p>Providing us with a phone number (optional) will allow us to send you important event updates!
                    We will be providing everyone with lanyard nametags, you can pick up to 3 skills to be displayed on them.
                    Lastly, if you have any special dietary requests, please <a href="mailto:team@boilermake.org">email us!</a></p>
                <div className="row">
                    <div className="col-6">
                        <label>Phone #</label>
                        <ApplicationTextField field="phone"/>
                    </div>
                    <div className="col-6">
                        <label>Pick up to 3 Skills</label>
                        <ApplicationSelectField field="skills" multi searchable options={skillOptions}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label>idk what to put here</label>
                        <ApplicationTextField field="phone"/>
                    </div>
                    <div className="col-6">
                        <label>Dietary Restrictions</label>
                        <ApplicationSelectField field="diet" multi searchable options={dietOptions}/>
                    </div>
                </div>
                <br/>
                <button disabled={isLoading} onClick={()=>{this.props.saveApplication(false, true)}} className="submit">Save RSVP</button>
            </div>;

        let rsvpNo = <div>aw sad :( please come back and apply next year though! </div>;

        let decisionForm;
        switch(applicationForm.decision) {
            case 3://ACCEPT
                decisionForm = (<div>
                    <h1>You're in! yay.</h1>
                    <p>We'd love to have you come to BoilerMake V this fall.</p>
                    <h2>Getting to BoilerMake</h2>
                    {transitMessage}
                    Can you come? you must RSVP by {applicationForm.rsvp_deadline} or else we will offer your spot to someone else.
                    <ApplicationRSVPToggle/>
                    {
                        applicationForm.rsvp !== null
                        ? applicationForm.rsvp === 1
                            ? rsvpYes
                            : rsvpNo
                        : null//don't show rest of form if they haven't clicked yes or no yet
                    }
                </div>);
                break;
            case 2://WAITLIST
                decisionForm = (<div>
                    <h1>You're waitlisted :(</h1>
                    <p>[message]</p>
                </div>);
                break;
            case 4://EXPIRED
                decisionForm = (<div>
                    <h1>Your offer has expired expired :(</h1>
                    <p>[message]</p>
                </div>);
                break;
            default:
              break;
        }
        return (<div>
                {decisionForm}
            </div>
        );
    }
}

//now the redux integration layer
import {
    saveApplication,
    toggleApplicationFieldValue
} from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ApplicationTextField from "./ApplicationTextField";
import ApplicationSelectField from "./ApplicationSelectField";
function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveApplication,
        toggleApplicationFieldValue
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
