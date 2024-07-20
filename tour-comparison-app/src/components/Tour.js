import React, { useState } from 'react';
import './Tour.css';

function Tour({ tour, isSelected, onSelect }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`tour ${isSelected ? 'selected' : ''}`}>
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>{showMore ? tour.info : `${tour.info.substring(0, 100)}...`}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
      <button onClick={onSelect}>
        {isSelected ? 'Deselect' : 'Select'}
      </button>
    </div>
  );
}

export default Tour;
