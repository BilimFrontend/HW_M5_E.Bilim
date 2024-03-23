import React, {useState} from 'react';
import Input from "../../components/input/Input";
import classes from "./CalculatorPage.module.css";
import Button from "../../components/button/Button";
import {type} from "../../redux/types";
import {useDispatch, useSelector} from "react-redux";
import {decrementCount, divisionCount, incrementCount, multiplicationCount} from "../../redux/action";

const CalculatorPage = () => {

    const count = useSelector(state => state.countReducer.count)
    const [input, setInput] = useState({
        num1: '',
        num2: ''
    })

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const calculator = (type) => {
        if (input.num1 === '' || input.num2 === ''){
            setText("Заполните оба поля")
        }else{
            switch (type) {
                case "INCREMENT": dispatch(incrementCount(Number(input.num1) + Number(input.num2)));
                    break;
                case "DECREMENT": dispatch(decrementCount(Number(input.num1) - Number(input.num2)));
                    break;
                case "DIVISION":  dispatch(divisionCount(Number(input.num1) / Number(input.num2)))
                    break;
                case "MULTIPLICATION": dispatch(multiplicationCount(Number(input.num1) * Number(input.num2)));
                    break;
            }
            setText('')
        }
    }

    const onChangeInput = (event) => {
        const numbers = {...input, [event.target.name]: event.target.value}
        setInput(numbers)
    }


    return (
        <div className={classes.card}>
            <div className={classes.input_card}>
                <Input name="num1"
                       type={"number"}
                       placeholder={"Enter a number"}
                       onChange={onChangeInput}/>
                <div className={classes.button_card}>
                    <p>{count}</p>
                    <p>{text}</p>
                    <Button text={type.INCREMENT} onClick={() => {
                        calculator(type.INCREMENT)}}/>
                    <Button text={type.DECREMENT} onClick={() => {
                        calculator(type.DECREMENT)}}/>
                    <Button text={type.DIVISION} onClick={() => {
                        calculator(type.DIVISION)}}/>
                    <Button text={type.MULTIPLICATION} onClick={() =>
                        calculator(type.MULTIPLICATION)}/>
                </div>
                <Input name="num2"
                       type={"number"}
                       placeholder={"Enter a number"}
                       onChange={onChangeInput}/>
            </div>
        </div>
    );
};

export default CalculatorPage;