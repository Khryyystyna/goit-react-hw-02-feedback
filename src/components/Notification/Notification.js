import PropTypes from 'prop-types';
import  css  from './Notification.module.css';

export const Notification = ({ message, good, neutral, bad }) => {
    return (
        <>
         {good === 0 && neutral === 0 && bad === 0 && (
        <p className={css.title}>{message}</p>)}
        </>
    )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
