import React from 'react';
import classes from "./User.module.css";
import {Link} from "react-router-dom";

const User = ({usersInfo}) => {
    return (
            <Link to={`/users/${usersInfo?.id}`} className={classes.user_card}>
                <div className={classes.user_info}>
                    <img src="" alt="userIcon"/>
                        <h1>{usersInfo?.name}</h1>
                        <p>{usersInfo?.username}</p>
                        <p>{usersInfo?.email}</p>
                </div>
            </Link>
    );
};

export default User;