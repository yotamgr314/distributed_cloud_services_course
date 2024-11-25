/*NOTE: DONT KNOW WHAT THIS IS !! NOT SURE - The components folder contains reusable React components that represent UI elements or features. 
This file (user.list.js) is responsible for rendering the list of users, and handling UI logic such as 
iterating over users, displaying their data, and optionally interacting with user-related hooks or services.
*/


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
