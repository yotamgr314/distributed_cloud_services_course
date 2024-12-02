const donationAdModel = require('../models/donation.ad.model.js');

exports.createDonationAd = async(req,res) => {
    try{
        const newDonationAd = await donationAdModel.create(req.body);
        res.status(201).json(newDonationAd); // Respond with the saved user as json file.

    }catch (err) {

        res.status(400).json({ 
            message: err.message
        });
    }
};


// ROUTES SECTION
/* router.get('/',donationAdsController.getDonations);  */ // GET/api/donationAds - gets all donation ads.
/* router.get('/:id',donationAdsController.getAdById); */ // GET/api/donationAds - get an Ad by its id.
/* router.delete('/:id',donationAdsController.deleteAdDonationById); */ // DELETE/api/donationAdsController - delete a donation Ad by its id.

