import React from 'react';
import classes from "./Input.module.css";

const Input = ({type, placeholder, onChange, name}) => {
    return (
        <input className={classes.input}
               type={type}
               name={name}
               placeholder={placeholder}
               onChange={onChange}/>
    );
};

export default Input;