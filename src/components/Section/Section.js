import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <p className={css.title}>{title}</p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};