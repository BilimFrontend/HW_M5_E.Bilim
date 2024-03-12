import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../component/button/Button";
import classes from "./CountPage.module.css";

const CountPage = () => {

    const count = useSelector(state => state.count)

    const dispatch = useDispatch()

    const increment = () => {
        dispatch({
            type: 'INCREMENT',
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
        })
    }

    const reset = () => {
        dispatch({
            type: "RESET"
        })
    }

    const plusTen = () => {
        dispatch({
            type: "PLUS_TEN"
        })
    }

    return (
        <div className={classes.count_card}>
            <h1>{count}</h1>
            <Button onClick={() => increment()} text={"Increment"}></Button>
            <Button onClick={() => count > 0 ? decrement() : ""} text={"Decrement"}></Button>
            <Button onClick={() => reset()} text={"Reset"}></Button>
            <Button onClick={() => plusTen()} text={"Plus Ten"}></Button>
        </div>
    );
};

export default CountPage;