import React from 'react';
import { Card } from 'bm-kit';
import './_pillar.schedule.source.scss';

const friday = [
  {
    start: '6:00 PM',
    name: '📋 Check in begins'
  },
  {
    start: '8:00 PM',
    name: '🎤 Opening Ceremonies'
  },
  {
    start: '9:00 PM',
    name: '🤝 Team assembly'
  },
  {
    start: '9:30 PM',
    name: '🌮 Dinner'
  },
  {
    start: '10:00 PM',
    name: '💻 Hacking Begins'
  },
  {
    start: '11:00 PM',
    name: '⛷ Activity'
  }
];

let saturday = [
  {
    start: '3:00 AM',
    name: '🍿 Late Night Snack'
  },
  {
    start: '8:00 AM',
    name: '🥓 Breakfast'
  },
  {
    start: '9:00 AM',
    name: '🏗 Workshop'
  },
  {
    start: '12:30 PM',
    name: '🍝 Lunch'
  },
  {
    start: '3:00 PM',
    name: '🍿 Snack'
  },
  {
    start: '3:00 PM',
    name: '🚣🏽 Activity'
  },
  {
    start: '6:00 PM',
    name: '🍕 Dinner'
  },
  {
    start: '10:00 PM',
    name: '🍩 Donuts!'
  }
];

let sunday = [
  {
    start: '1:00 AM',
    name: '🍿 Late Night Snack'
  },
  {
    start: '8:00 AM',
    name: '🍳 Breakfast'
  },
  {
    start: '9:30 AM',
    name: '🛑 Hacking Ends'
  },
  {
    start: '10:00 AM',
    name: '📔 Expo Begins'
  },
  {
    start: '11:30 AM',
    name: '🍞 Lunch'
  },
  {
    start: '1:00 PM',
    name: '🎭 Closing Ceremonies'
  },
  {
    start: '2:30 PM',
    name: '🚌 Buses Depart'
  }
];

const ScheduleDay = ({ dayData, title }) => (
  <Card className="p-schedule__day">
    <h3 className="text-center">{title}</h3>
    {dayData.map(item => (
      <div className="p-schedule__item" key={item.name + item.start}>
        <div className="p-schedule__item_about">
          <span className="p-schedule__item_time">{item.start}</span>
          <span className="p-schedule__item_title">{item.name}</span>
        </div>
        <div className="p-schedule__item_info">{item.info}</div>
      </div>
    ))}
  </Card>
);

const Schedule = () => (
  <div className="p-schedule">
    <h1>Schedule</h1>
    <div className="p-schedule__days">
      <ScheduleDay dayData={friday} title="Friday (10/19)" />
      <ScheduleDay dayData={saturday} title="Saturday (10/20)" />
      <ScheduleDay dayData={sunday} title="Sunday (10/21)" />
    </div>
  </div>
);

export default Schedule;
