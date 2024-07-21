import css from './Options..module.css';
function Options({ onUpdate, onReset, totalFeedback }) {
  return (
    <div className={css.mainDiv}>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={() => onUpdate('good')}
      >
        Good
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={() => onUpdate('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={() => onUpdate('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default Options;
