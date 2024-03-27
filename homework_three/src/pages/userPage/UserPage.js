import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../../redux/actions";
import User from "../../components/User";
import classes from "./UserPage.module.css";



const UserPage = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(fetchUserAction())
    }, []);

    return (
        <div className={classes.user_card}>
            {users.map((user) => <User key={user.name} usersInfo={user}/>)}
        </div>
    );
};

export default UserPage;