import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import './Styles.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addingState = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    let sum = 0;
    for (const key in this.state) {
      sum += this.state[key];
    }
    return sum;
  };

  countPositiveFeedbackPercentage(total, good) {
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );

    return (
      <>
        <div className="container">
          <Section
            text={'Please leave feedback'}
            childComponent={
              <FeedbackOptions
                options={this.state}
                onLeaveFeedback={this.addingState}
              />
            }
          />

          <Section
            text={'Statistics'}
            childComponent={
              total > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              ) : (
                <Notification text={'There is no feedback'} />
              )
            }
          />
        </div>
      </>
    );
  }
}

export default App;
