import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../../redux/actions";
import User from "../../components/User";
import classes from "./UserPage.modulec.css";


const UserPage = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(fetchUserAction())
    }, []);

    return (
        <div className={classes.user}>
            {users.map((user, index) => <User key={index} usersInfo={user}/>)}
        </div>
    );
};

export default UserPage;