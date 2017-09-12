import React, { Component } from 'react';
import ApplicationTextField from "./ApplicationTextField";
import ApplicationSelectField from "./ApplicationSelectField";
import ApplicationRSVPToggle from "./ApplicationRSVPToggle";
import {dietOptions, shirtOptions, skillOptions} from "./ApplicationConsts";

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
                transitMessage = <div className="section">
                    <p>We'll be sending a bus to {applicationForm.school.name}!</p>
                    <p>Join the Facebook event <a href={`https://www.facebook.com/events/${applicationForm.school.facebook_event_id}`}>here</a> to stay up to date!</p>
                </div>;
                break;
            case "car":
                transitMessage = <div className="section">
                    <p>Sadly we won't be able to send a bus to <b>{applicationForm.school.name}.</b></p>
                    <p>However, if you're willing to get here by your own means, we'd love to have you!.</p>
                    <p><i>Note that we will not be providing any form of travel reimbursements.</i></p>
                </div>;
                break;
            default:
            case "walk":
                transitMessage = <p>Well, you have it easy! BoilerMake will be happening in the Black & Gold Gyms of the CoRec on campus.</p>;
                break;
        }

        let rsvpYes =
            <div className="section">
                <h2>Neat! Just a few more steps.</h2>
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
                        <label>T-shirt size</label>
                        <ApplicationSelectField field="tshirt" options={shirtOptions}/>
                    </div>
                    <div className="col-6">
                        <label>Dietary Restrictions</label>
                        <ApplicationSelectField field="diet" multi searchable options={dietOptions}/>
                    </div>
                </div>
                <br/>
                <button disabled={isLoading} onClick={()=>{this.props.saveApplication(false, true)}} className="submit">Save RSVP</button>
            </div>;

        let rsvpNo = <p className="section">Aw sad :( Please come back and apply next year though! </p>;

        let decisionForm;
        switch(applicationForm.decision) {
            case 3://ACCEPT
                decisionForm = (<div className="section">
                    <h1>Yay, You're in!</h1>
                    <p>We'd love to see you at BoilerMake V this fall 💜</p>
                    <h2>Getting to BoilerMake</h2>
                    {transitMessage}
                    <p>Can you make it? You must RSVP {applicationForm.rsvp_deadline ? <span>by {applicationForm.rsvp_deadline}</span> : <span>soon</span>} or else we will offer your spot to someone else.</p>
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
                decisionForm = (<div className="section">
                    <h1>You're waitlisted :(</h1>
                    <p>[message]</p>
                </div>);
                break;
            case 4://EXPIRED
                decisionForm = (<div className="section">
                    <h1>Your offer has expired expired :(</h1>
                    <p>[message]</p>
                </div>);
                break;
            default:
                decisionForm = <div className="section"><h1>There was an error!</h1><p>Sorry for the inconvenience. Please email us at <a href="mailto:team@boilermake.org">team@boilermake.org</a></p></div>
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
