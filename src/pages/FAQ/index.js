import React, { Component } from 'react';
import Question from '../../components/Question';
// import logo from '../../assets/images/faq.svg';

const questions = [
  {
    "title": "What is a hackathon?",
    "body": "A hackathon is not somewhere that you come to hack the NSA, but rather a great place for people to come together and work on incredible projects. You'll be surrounded by a group of incredibly intelligent and creative people, as well as brilliant mentors from some of the largest tech companies across the country. Hackathons can serve as a great place to learn, and you may end up surprising yourself on what you can accomplish by the end of the weekend."
  },
  {
    "title": "I'm under 18 years of age, can I come?",
    "body": "Due to Purdue University policy, we cannot allow students under the age of 18 to attend BoilerMake."
  },
  {
    "title": "Should I go?",
    "body": "We have <a href='https://medium.com/@BoilerMake/why-you-should-go-to-a-hackathon-2d4ede475c9' target='_blank'> this great article on Medium</a> to help you with this question."
  },
  {
    "title": "How do I apply?",
    "body": "You can start by filling out an application on this page. Don't worry, you don't have to fill out an essay or be part of an interview to be accepted. All you need to do is fill out a couple details about yourself on our application page."
  },
  {
    "title": "Do I have to pay?",
    "body": "No! BoilerMake is an all-expense paid experience.  You do not have to pay for anything once you are here at BoilerMake, which includes free food and swag! "
  },
  {
    "title": "How do I get there?",
    "body": "If your college has a large group of people and is within a reasonable distance of Purdue University, we may be able to provide a bus to transport you to Purdue. If transportation is going to be an issue, please contact us at <a href='mailto:team@boilermake.org'>team@boilermake.org</a> and we'll try to figure something out.  We're crossing our fingers Elon comes up with the hyperloop, so we can get a lot more of you here."
  },
  {
    "title": "Are there travel reimbursements?",
    "body": "Unfortunately, we are not offering any travel reimbursements at this time. If your college has large amount of applicants and is within a reasonable distance of Purdue University, we may be able to provide a bus to transport you to Purdue."
  },
  {
    "title": "What do I bring?",
    "body": "You should bring you student ID for verification as well as a laptop (don't forget your charger!). It's also a good idea to bring a blanket/sleeping bag and an extra change of clothes. "
  },
  {
    "title": "Am I allowed to sleep?",
    "body": "Of course - in fact we encourage it!  We will provide air mattresses and comforters for you to take a break from hacking. However, if you're too busy to partake in such activities, we'll make sure you have enough caffeine to keep going."
  },
  {
    "title": "What if I want to shower?",
    "body": "For your sake and the people around you, please shower! We will provide you with a place to shower as well as towels that you can use."
  },
  {
    "title": "Can I work with other people?",
    "body": "A maximum of 4 people can be on a team.  But you don't have to work with other people if you enjoy working solo."
  },
  {
    "title": "Can I use code that I have written before the event?",
    "body": "We ask that you do not use any code that was written before the start of BoilerMake to keep a fair and level playing field for all participants.  "
  },
  {
    "title": "Will there be any hardware?",
    "body": "We will have a bunch hardware available for hackers to borrow at the event with some help from our friends at Major League Hacking.  We'll be sure to let you guys know once we have the list of hardware finalized."

  },
  {
    "title": "What if I have any other questions?",
    "body": "Feel free to email us at <a href='mailto:team@boilermake.org'>team@boilermake.org</a>!"
  }
];

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandAll: false
    };
    this.expandAll = this.expandAll.bind(this);
  }
  expandAll() {
    this.setState({ expandAll: !this.state.expandAll });
  }
    render() {
      const { expandAll } = this.state;
      const questionList = questions.map((q,id) => <Question key={id} title={q.title} body={q.body} expandAll={this.state.expandAll}/>);
      return (
          <div className="max-width page pagePadded faq topSpacing" style={{margin: '20px auto'}}>
            {/* <img src={logo} className="logo" alt="logo" /> */}
            <h1 className="title pink right">FAQ</h1>
            <p className="right"><span>Frequently Asked Questions</span></p>
            { expandAll ? <p className="right link" onClick={this.expandAll}>Collapse All</p> : <p className="right link" onClick={this.expandAll}>Expand All</p> }
            <div className="topSpacing">{questionList}</div>
          </div>
      );
    }
}

export default FAQ;
