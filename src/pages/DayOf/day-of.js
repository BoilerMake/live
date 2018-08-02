import React, { PureComponent } from 'react';
import title from '../../assets/images/DayOf/title.svg';
import schedule from '../../assets/images/DayOf/schedule.svg';
import resources from '../../assets/images/DayOf/resources.svg';
import squiggle1 from '../../assets/images/DayOf/squiggle1.svg';
import squiggle2 from '../../assets/images/DayOf/squiggle2.svg';
import { Card } from 'bm-kit';
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
      <div>
        <div style={{ backgroundColor: '#14CAFE' }}>
          <div className="max-width flex text-center">
            <div className="col-2" />
            <div className="col-8">
              <img src={title} alt="logo" />
            </div>

            <div className="col-6 countdown">
              <h1>Hacking ends in</h1>
              <div className="flex h-center">
                <div className="padding">
                  <h1>{this.state.days}</h1>
                  <p>Days</p>
                </div>
                <div className="padding">
                  <h1>{this.state.hours}</h1>
                  <p>Hours</p>
                </div>
                <div className="padding">
                  <h1>{this.state.minutes}</h1>
                  <p>Minutes</p>
                </div>
              </div>
            </div>
            <div className="col-6 messages">
              <Card>
                <div className="messages-inner text-reset">
                  <Card>
                    <p>
                      One hour left to submit your projects! Make sure you get
                      them in!
                    </p>
                    <i>Posted 11 mins ago</i>
                  </Card>
                  <Card>
                    <p>
                      Lunch will be available in Gyms 4, 5, and 6 in 10 minutes!
                      But this one's a bit longer so watch out for that
                    </p>
                    <i>Posted 56 mins ago</i>
                  </Card>
                  <Card>
                    <p>
                      One hour left to submit your projects! Make sure you get
                      them in!
                    </p>
                    <i>Posted 11 mins ago</i>
                  </Card>
                  <Card>
                    <p>
                      Lunch will be available in Gyms 4, 5, and 6 in 10 minutes!
                    </p>
                    <i>Posted 56 mins ago</i>
                  </Card>
                  <Card>
                    <p>
                      One hour left to submit your projects! Make sure you get
                      them in!
                    </p>
                    <i>Posted 11 mins ago</i>
                  </Card>
                  <Card>
                    <p>
                      Lunch will be available in Gyms 4, 5, and 6 in 10 minutes!
                    </p>
                    <i>Posted 56 mins ago</i>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#F8E001' }}>
          <img src={squiggle1} alt="squiggle1" />
          <div className="max-width flex text-center">
            <div className="col-6">
              <img src={schedule} alt="squiggle1" />
            </div>
          </div>
          <div className="col-6" />
          <div className="max-width flex">
            <div className="col-4">
              <h1>Friday</h1>
              <div className="schedule-item">
                <i className="schedule-time">8:00 pm</i>
                <p>Opening Ceremonies</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">9:00 pm</i>
                <p>Hacking Begins</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:00 pm</i>
                <p>Tech talk w the lads</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:15 - 10:45 pm</i>
                <p>Yoga pt. 1</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">11:00 pm</i>
                <p>Something, probably</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">12:00 am</i>
                <p>Midnight Snack</p>
              </div>
            </div>
            <div className="col-4">
              <h1>Saturday</h1>
              <div className="schedule-item">
                <i className="schedule-time">8:00 pm</i>
                <p>Opening Ceremonies</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">9:00 pm</i>
                <p>Hacking Begins</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:00 pm</i>
                <p>Tech talk w the lads</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:15 - 10:45 pm</i>
                <p>Yoga pt. 1</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">11:00 pm</i>
                <p>Something, probably</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">12:00 am</i>
                <p>Midnight Snack</p>
              </div>
            </div>
            <div className="col-4">
              <h1>Sunday</h1>
              <div className="schedule-item">
                <i className="schedule-time">8:00 pm</i>
                <p>Opening Ceremonies</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">9:00 pm</i>
                <p>Hacking Begins</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:00 pm</i>
                <p>Tech talk w the lads</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">10:15 - 10:45 pm</i>
                <p>Yoga pt. 1</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">11:00 pm</i>
                <p>Something, probably</p>
              </div>
              <div className="schedule-item">
                <i className="schedule-time">12:00 am</i>
                <p>Midnight Snack</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#26C99C' }}>
          <img src={squiggle2} alt="squiggle1" />
          <div className="max-width flex text-center">
            <div className="col-6">
              <img src={resources} alt="squiggle1" />
            </div>
          </div>
          <div className="max-width flex text-center" />
        </div>
      </div>
    );
  }
}

export default DayOf;
