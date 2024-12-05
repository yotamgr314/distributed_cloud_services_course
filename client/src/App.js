// NOTE: THE STARTING POINT OF OUR APPLICATION
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'; // NOTE to control component rendering based on URL. - basictly attach a page to a url.
import HomePage from './homePage/pages/homePage';
import MyAdsPage from './ads/pages/ads'; // NOTE: react component name must be With Capital prefix and camel case. 

const App = () => {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* NOTE: http://localhost:3000/ */}
        <Route path="/myAds" element={<MyAdsPage />} /> {/* NOTE: http://localhost:3000/ */}
      </Routes>

    </BrowserRouter>
)

};

export default App;

// HIS USERS PAGE - MY AD DONATIONS PAGE.