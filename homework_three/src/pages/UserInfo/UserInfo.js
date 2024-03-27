import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserInfoAction} from "../../redux/actions";
import {Link, useParams} from "react-router-dom";
import classes from "./UserInfo.module.css";
const UserInfo = () => {

    const dispatch = useDispatch()

    const {user_info} = useSelector(state => state.usersReducer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getUserInfoAction(id))
    }, []);

    return (
        <div className={classes.user_info}>
            <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt=""/>
            <div className={classes.user_information}>
                <p>Name: {user_info?.name}</p>
                <p>Email: {user_info?.email}</p>
                <p>Street: {user_info?.address?.street}</p>
                <p>City: {user_info?.address?.city}</p>
                <p>Suite: {user_info?.address?.suite}</p>
                <p>Phone: {user_info?.phone}</p>
                <p>Website: {user_info?.website}</p>
            </div>
            <Link to={'/'} className={classes.btn_back}>Назад</Link>
        </div>
    );
};

export default UserInfo;