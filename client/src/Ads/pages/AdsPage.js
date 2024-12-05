import '../../shared/components/styles/AdCard.css';

import React, { useEffect, useState } from 'react';

const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ads'); // Ensure the URL matches your backend endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Ads:', data); // Log the fetched ads
        setAds(data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div>
      <h1>All Ads</h1>
      {ads.length > 0 ? (
        ads.map((ad) => (
          <div key={ad._id} className="ad-card">
            <h2>{ad.name}</h2>
            <p><strong>Description:</strong> {ad.description}</p>
            <p><strong>Condition:</strong> {ad.condition}</p>
            <p><strong>Category:</strong> {ad.category}</p>
            <p><strong>Status:</strong> {ad.status}</p>
            {ad.location && (
              <p>
                <strong>Location:</strong> Lat {ad.location.coordinates[1]}, Lng {ad.location.coordinates[0]}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>No ads available</p>
      )}
    </div>
  );
};

export default AdsPage;
