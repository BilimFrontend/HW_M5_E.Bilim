import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserInfoAction} from "../../redux/actions";
import {Link, useParams} from "react-router-dom";
const UserInfo = () => {

    const dispatch = useDispatch()

    const {user_info} = useSelector(state => state.usersReducer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getUserInfoAction(id))
    }, []);

    return (
        <div>
            <p>{user_info?.name}</p>
            <p>{user_info?.email}</p>
            <p>{user_info?.address?.street}</p>
            <p>{user_info?.address?.city}</p>
            <Link to={'/'}>Назад</Link>
        </div>
    );
};

export default UserInfo;