import css from './App.module.css';
import Description from './components/Descriptions/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }

  function resetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.mainDiv}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
}

export default App;
