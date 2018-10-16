import React, { PureComponent } from 'react';
import { Button } from 'bm-kit';
import Announcements from './Announcements';
import Schedule from '../../components/Schedule';

import logo from '../../assets/images/bm6_hammers.svg';
import './_pillar.day_of.source.scss';

class DayOf extends PureComponent {
  constructor(props) {
    super(props);

    const distance = this.getRef() - new Date().getTime();

    this.state = {
      ref: this.getRef(),
      days: this.getDays(distance),
      hours: this.getHours(distance),
      minutes: this.getMinutes(distance),
      seconds: this.getSeconds(distance)
    };

    this.getRef = this.getRef.bind(this);
  }

  getDays(distance) {
    return Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
  }

  getHours(distance) {
    return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, '0');
  }

  getMinutes(distance) {
    return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0');
  }

  getSeconds(distance) {
    return Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0');
  }

  /*
  Should we reference the start or end for the countdown?
  Useful for if we're counting down to the start of hackathon
  or the end
  */
  getRef() {
    const end = new Date('Oct 21, 2018 09:30:00').getTime();
    const start = new Date('Oct 19, 2018 22:00:00').getTime();

    const now = new Date();
    let ref;
    start > now ? (ref = start) : (ref = end);
    return ref;
  }

  componentDidMount() {
    setInterval(() => {
      const distance = this.getRef() - new Date().getTime();

      this.setState({
        days: this.getDays(distance),
        hours: this.getHours(distance),
        minutes: this.getMinutes(distance),
        seconds: this.getSeconds(distance)
      });
    }, 1000);
  }

  render() {
    const end = new Date('Oct 21, 2018 09:30:00').getTime();
    const countdownTag =
      this.getRef() === end ? 'Until Hacking Ends' : 'Until Hacking Begins';

    return (
      <div className="p-day_of--wrapper">
        <div className="p-day_of--header">
          <div className="p-day_of--logo">
            <img
              src={logo}
              alt="BoilerMake logo"
              className="p-day_of--hammers"
            />
          </div>
          <div className="p-day_of--countdown">
            <div>
              <div className="flex">
                <h3>{this.state.days}</h3>
                <div className="p-day_of--countdown_colon">:</div>
                <h3>{this.state.hours}</h3>
                <div className="p-day_of--countdown_colon">:</div>
                <h3>{this.state.minutes}</h3>
                <div className="p-day_of--countdown_colon">:</div>
                <h3>{this.state.seconds}</h3>
              </div>
              <div className="p-day_of--countdown_tag">{countdownTag}</div>
            </div>
          </div>
          <div className="p-day_of--empty" />
        </div>

        <div className="p-day_of">
          <div className="p-day_of--info">
            <Announcements />
            <div className="col-3 p-day_of--links">
              <h2 className="p-day_of--section_header">Links</h2>
              <div className="c-day_of_card">
                <a href="https://help.boilermake.org/">
                  <Button full>Get Help</Button>
                </a>
                <a href="https://join.slack.com/t/boilermake6/shared_invite/enQtNDU0NDg5MDI0NDAzLWY1OWE3N2FkODhjMmEwNjJkZWMxMmE4NDAzZmVlOTNmYjAzYzQ4ZTY1YjhjY2Q1YjVmYTMzZTgxOTFhMGYwNmU">
                  <Button full>Socialize</Button>
                </a>
                <a href="https://boilermake-v.devpost.com/">
                  <Button full>Prize Info</Button>
                </a>
                <a href="https://help.boilermake.org/">
                  <Button full>Photos</Button>
                </a>
                <div className="flex h-center" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-day_of--schedule">
          <Schedule small />
        </div>
        <div className="p-day_of--footer">Love, BoilerMake</div>
      </div>
    );
  }
}

export default DayOf;
