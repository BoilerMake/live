import React, { PureComponent } from 'react';
import './_pillar.home.mail_chimp_signup.source.scss';
import { Button, TextInput } from 'bm-kit';

export default class MailChimpSignup extends PureComponent {
  render() {
    return (
      <div id="mc_embed_signup" className="p-mail_chimp_signup">
        <form
          action="https://boilermake.us18.list-manage.com/subscribe/post?u=c90b22dd57d3dc992bd4731ec&amp;id=fb94bf1d8d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <label htmlFor="mce-EMAIL" className="p-mail_chimp_signup__label">
            BoilerMake is returning for the 2019-2020 hackathon season!
            <br />
            Interested in updates?
          </label>
          <div
            id="mc_embed_signup_scroll"
            className="p-mail_chimp_signup__group"
          >
            <TextInput
              placeholder="you@school.edu"
              name="EMAIL"
              id="mce-EMAIL"
              className="p-mail_chimp_signup__input"
            />
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_c90b22dd57d3dc992bd4731ec_fb94bf1d8d"
                tabIndex="-1"
                value=""
              />
            </div>
            <Button bm6>Yup!</Button>
            {/* <input type="submit" value="Yup!" name="subscribe" id="mc-embedded-subscribe" className="button p-mail_chimp_signup__button" /> */}
          </div>
        </form>
      </div>
    );
  }
}
