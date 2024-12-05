// NOTE: THE STARTING POINT OF OUR APPLICATION
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'; // NOTE to control component rendering based on URL. - basictly attach a page to a url.
import HomePage from './HomePage/pages/homePage';
import MyAdsPage from './Ads/pages/AdsPage';



// THIS SECTION LINKS PAGES BASED ON URL THE USER WILL INSERT.
const App = () => {
return (
    <BrowserRouter> {/* NOTE: we must wrap all our pages inside browserRouter to enable rendering them based on URL. */}
      <Routes> {/*NOTE:Ensures that in case of multiple routes matching it will only render the most specifc one.  */}

        <Route path="/" element={<HomePage />} /> {/* NOTE when use will type the url http://localhost:3000/ it will navigate to the homePage */}

        <Route path="/myAds" element={<MyAdsPage />} /> {/* NOTE when use will type the url http://localhost:3000/myAds it will navigate to the myAds page */}

        <Route path="*" element={<Navigate to="/" />} /> {/* NOTE: Redirects all unmatched routes to the homepage. */}


      </Routes>

    </BrowserRouter>
)

};

export default App;

// HIS USERS PAGE - MY AD DONATIONS PAGE.