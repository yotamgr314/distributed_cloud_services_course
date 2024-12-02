const express = require('express')

const donationAdsController = require('../controllers/donation.ad.controller.js');

const donationRouter = express();


// ROUTES SECTION
donationRouter.post('/',donationAdsController.createDonationAd);  // POST/api/donationAds - create a donation ad.
/* router.get('/',donationAdsController.getDonations);  */ // GET/api/donationAds - gets all donation ads.
/* router.get('/:id',donationAdsController.getAdById); */ // GET/api/donationAds - get an Ad by its id.
/* router.delete('/:id',donationAdsController.deleteAdDonationById); */ // DELETE/api/donationAdsController - delete a donation Ad by its id.


module.exports = donationRouter;
