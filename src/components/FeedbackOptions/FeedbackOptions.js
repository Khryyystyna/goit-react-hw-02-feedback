import PropTypes from 'prop-types';
import  css  from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return ( 
    <>
    <button type="button" className={css.btn} onClick={onLeaveFeedback.good}>{options.good}</button>
    <button type="button" className={css.btn} onClick={onLeaveFeedback.neutral}>{options.neutral}</button>
    <button type="button" className={css.btn} onClick={onLeaveFeedback.bad}>{options.bad}</button>
    </>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.shape({
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
  }),
};