import React, { memo } from 'react';
import './UsersListEl.scss';

import User from './User/User';

const UserListEl = (props) => (
	<ul className="UsersListEl">
        <User data={props.data} />
    </ul>
);

export default memo(UserListEl);