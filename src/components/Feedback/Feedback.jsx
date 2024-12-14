import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;