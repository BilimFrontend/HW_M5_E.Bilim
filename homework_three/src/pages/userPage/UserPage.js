import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../../redux/actions";
import user from "../../components/User";
import User from "../../components/User";
import classes from "./UserPage.modulec.css";
import UserInfo from "../UserInfo/UserInfo";

const UserPage = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(fetchUserAction())
    }, []);

    console.log(users)

    return (
        <div className={classes.user}>
            {users.map((user)=> <User usersInfo={user}/>)}
        </div>
    );
};

export default UserPage;