import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleFeedbackClick }) => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <div
        className="btn "
        aria-label="Basic outlined example"
      >
        <button
          name="good"
          onClick={handleFeedbackClick}
          type="button"
          className="btn btn-success fw-semibold "
        >
          Good
        </button>
        <button
          name="neutral"
          onClick={handleFeedbackClick}
          type="button"
          className="btn btn-warning fw-semibold"
        >
          Neutral
        </button>
        <button
          name="bad"
          onClick={handleFeedbackClick}
          type="button"
          className="btn btn-danger fw-semibold "
        >
          Bad
        </button>
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedbackClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;