import React from 'react';
import {BrowserRouter, Router, Route, Redirect, Switch } from 'react-router-dom'; // to control component rendering based on URL. - basictly attach a page to a url.
import homePage from './homePage/pages/homePage';
/* import donationAds from './ads/donationAds/pages/donations'
 */
const App = () => {
    return (
        <router>
            <Route path="/" exact>
            <homePage/>
            </Route>
        </router>

    );
};

export default App;

// HIS USERS PAGE - MY AD DONATIONS PAGE.