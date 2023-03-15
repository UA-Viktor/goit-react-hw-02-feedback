import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class Feelback extends Component {
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
        const total = this.countTotalFeedback();
        const percent = this.countPositiveFeedbackPercentage(
            total,
            this.state.good
        );

        return (
            <>
                <h1>Please leave feedback</h1>

                <FeedbackOptions
                    options={this.state}
                    onLeaveFeedback={this.addingState}
                />

                <h1>Statistics</h1>

                <div>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {percent} %</p>
                </div>
            </>
        );
    }
}

export default Feelback;
