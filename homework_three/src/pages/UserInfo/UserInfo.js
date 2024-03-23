import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {getUserInfoAction} from "../../redux/actions";
import user from "../../components/User";
import {getUserInfoAction} from "../../redux/actions";
import {Link, useParams} from "react-router-dom";
const UserInfo = () => {

    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getUserInfoAction(id))
    }, []);

    return (
        <div>
            <p>{users?.name}</p>
            <p>{users?.email}</p>
            <p>{users?.address?.street}</p>
            <p>{users?.address?.city}</p>
            <Link to={'/'}>Назад</Link>
        </div>
    );
};

export default UserInfo;