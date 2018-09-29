import React, { PureComponent } from 'react';
import { Card, Button } from 'bm-kit';
import Announcements from './Announcements';
import Schedule from '../../components/Schedule';

import logo from '../../assets/images/bm6_hammers.svg';
import './_pillar.day_of.source.scss';

class DayOf extends PureComponent {
  constructor(props) {
    super(props);

    const end = new Date().getTime() + 1000 * 60 * 60 * 24 * 2 - 2000;
    const distance = end - new Date().getTime();

    this.state = {
      end: end,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    };
  }

  componentDidMount() {
    setInterval(() => {
      var dist = this.state.end - new Date().getTime();

      var days = Math.floor(dist / (1000 * 60 * 60 * 24));
      var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));

      this.setState({
        days: days,
        hours: hours,
        minutes: minutes
      });
    }, 1000 * 60);
  }

  render() {
    return (
      <div className="p-day_of">
        <div className="p-day_of--info">
          <div className="col-9 p-day_of--announcements">
            <Announcements />
          </div>

          <div className="col-3 p-day_of--links">
            <Card>
              <h2>Links</h2>
              <a href="https://help.boilermake.org/">
                <Button full>Get Help</Button>
              </a>
              <a href="http://invite.boilermake.org/">
                <Button full>Socialize</Button>
              </a>
              <a href="https://boilermake-v.devpost.com/">
                <Button full>Prize Info</Button>
              </a>
              <a href="https://help.boilermake.org/">
                <Button full>Photos</Button>
              </a>
              <div className="flex h-center">
                <div className="">
                  <h3>{this.state.days}</h3>
                  <p>Days</p>
                </div>
                <div className="paddingx">
                  <h3>{this.state.hours}</h3>
                  <p>Hours</p>
                </div>
                <div className="">
                  <h3>{this.state.minutes}</h3>
                  <p>Minutes</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Schedule />
        <img src={logo} alt="BoilerMake logo" className="p-day_of--hammers" />
      </div>
    );
  }
}

export default DayOf;
