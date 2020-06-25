import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state);

    return totalFeedback.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const arrayOfFeedbacks = Object.values(this.state);
    const totalFeedbacks = arrayOfFeedbacks.reduce((acc, value) => acc + value);

    return Math.round((this.state.good * 100) / totalFeedbacks);
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <div className={styles.buttonsContainer}>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.LeaveFeedback}
            />
          </div>
        </Section>
        <Section title={'Statistics'}>
          {!totalFeedbacks ? (
            <Notification />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
