import React, { useState, useEffect } from 'react';
import MyImage from '../assets/69231211226518Alt1x20714018.jpg';
import UserList from '../components/user.list';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addUser = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'liat',
                    email: 'liat@gmail.com',
                    age:33
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            const data = await response.json();
            setUsers([...users, data]);
    } catch (err) {
        console.log(err)
    }
    }
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <UserList users={users} />
            <button onClick={addUser}>ADD ME</button>
            <img src={MyImage} alt="teddy bear" />
        </div>
    );
};

export default HomePage;
