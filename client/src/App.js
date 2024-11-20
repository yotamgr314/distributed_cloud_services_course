import React from 'react';
import './styles/app.css'; // Import updated styles
import HomePage from './pages/home.page'; // Import the main page component

const App = () => {
    return (
        <div className="app-container">
            <HomePage />
        </div>
    );
};

export default App;
