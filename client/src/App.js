import React from 'react';
import {BrowserRouter, Router, Route, Redirect, Switch } from 'react-router-dom';
import homePage from './src/homePage/pages/.homePage';
import donationOffers from './src/offers/pages.donationOffers';
import myAds from './src/ads' 
const App = () => {
    return (
        <router>
            <Route path="/" exact>
            <donations>

            </donations>
            </Route>
        </router>

    );
};

export default App;
