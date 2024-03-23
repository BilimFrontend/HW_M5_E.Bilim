import React from 'react';
import classes from "./User.module.css";
import {Link} from "react-router-dom";

const User = ({usersInfo}) => {
    return (
        <Link to={`/users/${usersInfo?.id}`} className={classes.user_item}>
            <div className={classes.user_info}>
                    <p>Name: {usersInfo?.name}</p>
                    <p>UserName: {usersInfo?.username}</p>
                    <p>Email: {usersInfo?.email}</p>
            </div>
        </Link>
    );
};

export default User;