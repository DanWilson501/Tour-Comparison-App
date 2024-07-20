import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tour from './Tour';
import './Gallery.css';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [selectedTours, setSelectedTours] = useState([]);

  useEffect(() => {
    axios.get('/react-tours-project')
      .then(response => {
        console.log(response.data);
        setTours(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSelectTour = (tour) => {
    setSelectedTours(prevSelected =>
      prevSelected.includes(tour)
        ? prevSelected.filter(t => t !== tour)
        : [...prevSelected, tour]
    );
  };

  return (
    <div className="gallery">
      <h1>Tour Comparison</h1>
      <div className="tour-list">
        {tours.length === 0 ? <p>Loading tours...</p> : null}
        {tours.map(tour => (
          <Tour
            key={tour.id}
            tour={tour}
            isSelected={selectedTours.includes(tour)}
            onSelect={() => handleSelectTour(tour)}
          />
        ))}
      </div>
      <div className="tour-comparison">
        {selectedTours.length > 0 ? (
          selectedTours.map(tour => (
            <div key={tour.id} className="tour-details">
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <img src={tour.image} alt={tour.name} />
              <p>Price: ${tour.price}</p>
            </div>
          ))
        ) : (
          <p>No tours selected for comparison.</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
