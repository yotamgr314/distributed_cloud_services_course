import React from 'react';

const AdCard = ({ ad }) => {
  return (
    <div className={`ad-card ${ad.type}`}>
      <h3>{ad.title}</h3>
      {ad.type === 'donation' ? (
        <div>
          <p><strong>Condition:</strong> {ad.condition}</p>
          <p><strong>Description:</strong> {ad.description}</p>
          <p><strong>Donor:</strong> {ad.donor?.name}</p>
        </div>
      ) : (
        <div>
          <p><strong>Status:</strong> {ad.status}</p>
          <p><strong>Description:</strong> {ad.description}</p>
          <p><strong>Requestor:</strong> {ad.donor?.name}</p>
        </div>
      )}
    </div>
  );
};

export default AdCard;
