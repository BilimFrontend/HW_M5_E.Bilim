import React from 'react';
import classes from "./Button.module.css";

const Button = ({onClick, text}) => {
    return (
        <button className={classes.btn} onClick={onClick}>{text}</button>
    );
};

export default Button;