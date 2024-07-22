import css from './App.module.css';
import Description from './components/Descriptions/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useEffect, useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localStorageData = JSON.parse(
      window.localStorage.getItem('feedbacks')
    );

    if (localStorageData === null) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }

    return localStorageData;
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedback));
    window.localStorage.setItem('positiveFeedback', positiveFeedback);
  }, [feedback, positiveFeedback]);

  function updateFeedback(feedbackType) {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }

  function resetFeedback() {
    window.localStorage.removeItem('feedbacks');
    window.localStorage.removeItem('positiveFeedback');

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
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
}

export default App;
