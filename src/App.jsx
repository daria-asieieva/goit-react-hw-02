import React, { useState } from "react";
import Description from "./components/Description/Description";
import styles from "./App.module.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";



const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedabck');
        return savedFeedback ? JSON.parse(savedFeedback) : {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

     useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
     }, [feedback]);
    
    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };


    const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
    
    
    
    return (
       < div>
        <Description />;
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};


export default App;

