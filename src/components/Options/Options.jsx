import React from "react";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bed')}>Bed</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        </div>
    );
};

export default Options;