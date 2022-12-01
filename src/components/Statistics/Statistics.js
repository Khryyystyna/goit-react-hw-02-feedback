import React from "react";
import PropTypes from 'prop-types'
import  css  from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <>
            <p className={css.title}>Statistics</p>
            {(good > 0 || neutral > 0 || bad > 0) && (
                <ul className={css.list}>
            <li className={css.item}>Good:<span className={css.span}>{good}</span></li> 
            <li className={css.item}>Neutral:<span className={css.span}>{neutral}</span></li> 
            <li className={css.item}>Bad:<span className={css.span}>{bad}</span></li> 
            <li className={css.item}>Total:<span className={css.span}>{total}</span></li>
            <li className={css.item}>Positive feedback:<span className={css.span}>{percentage}%</span></li>
                </ul>)}
        </>
)
}
    
    
export default Statistics;


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}