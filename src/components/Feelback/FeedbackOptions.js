import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ul className="FeedbackOptions">
        {Object.keys(options).map(key => (
            <li key={key} className="FeedbackOptions__item">
                <button onClick={() => onLeaveFeedback}>{key}</button>
            </li>
        ))}
    </ul>
);

export default FeedbackOptions;
