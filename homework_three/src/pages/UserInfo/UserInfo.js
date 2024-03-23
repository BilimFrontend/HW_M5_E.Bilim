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
            <p>Name: {user_info?.name}</p>
            <p>Email: {user_info?.email}</p>
            <div className={classes.user_address}>
                <p>Street: {user_info?.address?.street}</p>
                <p>City: {user_info?.address?.city}</p>
                <p>Suite: {user_info?.address?.suite}</p>
            </div>
            <Link to={'/'} className={classes.btn_back}>Назад</Link>
        </div>
    );
};

export default UserInfo;