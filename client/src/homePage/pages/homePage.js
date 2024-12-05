import React, { useEffect, useState } from 'react';
import AdList from '../../shared/components/AdList';

const HomePage = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ads'); // Use full URL to avoid incorrect relative path
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return (
    <div>
      <h1>All Ads</h1>
      {loading ? (
        <p>Loading ads...</p>
      ) : ads.length > 0 ? (
        <AdList ads={ads} />
      ) : (
        <p>No ads available</p>
      )}
    </div>
  );
};

export default HomePage;
