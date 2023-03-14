import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class Feelback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    addingState = () => {
        this.setState();
    };

    countTotalFeedback() {}

    countPositiveFeedbackPercentage() {}

    render() {
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
                </div>
            </>
        );
    }
}

export default Feelback;
