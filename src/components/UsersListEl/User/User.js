import React, { memo } from 'react';
import './User.scss';

const User = (props) => {
    const ListOfUsers = props.data.map((user, index) => {
        return (
        <li className="User" key={index+1}>
            <span className="Number">{index+1}.</span>
            <strong>{user.name}</strong>
            <span className="UserName">{'@' + user.username}</span></li>
        )
    })

    return (
        <>
            {ListOfUsers}
        </>
    )
}
    

export default memo(User);