import React from 'react';
import classes from "./User.module.css";
import {Link} from "react-router-dom";

const User = ({usersInfo}) => {
    return (
        <Link to={`/users/${usersInfo?.id}`} className={classes.user_item}>
            <div className={classes.user_info}>
                <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt=""/>
                <div className={classes.user_information}>
                    <p>Name: {usersInfo?.name}</p>
                    <p>UserName: {usersInfo?.username}</p>
                    <p>Email: {usersInfo?.email}</p>
                </div>
            </div>
        </Link>
    );
};

export default User;