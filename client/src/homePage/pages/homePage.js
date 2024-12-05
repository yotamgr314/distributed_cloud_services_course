/* import React from 'react';

const HomePage = () => {
return <h2>homePage works babeeeeeeeeeeeee whooooooooooooa!</h2>;
};


export default HomePage; */



import React, { useEffect, useState } from 'react';
import AdList from '../../shared/components/AdList';

const HomePage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('/api/ads');
        const data = await response.json();
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
      <AdList ads={ads} />
    </div>
  );
};

export default HomePage;
