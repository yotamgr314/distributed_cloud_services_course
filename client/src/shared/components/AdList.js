import React from 'react';
import AdCard from './AdCard';

const AdList = ({ ads }) => {
  return (
    <div>
      {ads.map((ad) => (
        <AdCard key={ad._id} ad={ad} />
      ))}
    </div>
  );
};

export default AdList;
