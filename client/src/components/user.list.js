import React from 'react';

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user._id}>
                    <strong>{user.name}</strong> - {user.email}, Age: {user.age}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
