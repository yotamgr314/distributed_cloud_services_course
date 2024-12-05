import React from 'react';
import './styles/AdCard.css';

const AdCard = ({ ad }) => {
  return (
    <div className="ad-card">
      <h2>{ad.name || 'Unnamed Ad'}</h2>
      <p><strong>Description:</strong> {ad.description || 'No description provided'}</p>
      <p><strong>Condition:</strong> {ad.condition || 'Unknown'}</p>
      <p><strong>Category:</strong> {ad.category || 'Uncategorized'}</p>
      <p><strong>Status:</strong> {ad.status || 'Unknown'}</p>
      <p><strong>Donor:</strong> {ad.donor ? ad.donor : 'Anonymous'}</p>
      {ad.location && ad.location.coordinates && (
        <p>
          <strong>Location:</strong> Lat {ad.location.coordinates[1]}, Lng {ad.location.coordinates[0]}
        </p>
      )}
    </div>
  );
};

export default AdCard;
