import React, { useEffect, useState } from 'react';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [selectedTours, setSelectedTours] = useState([]);

  const handleSelectTour = (tour) => {
    setSelectedTours(prevSelected =>
      prevSelected.includes(tour)
        ? prevSelected.filter(t => t !== tour)
        : [...prevSelected, tour]
    );
  };
}

export default Gallery;
