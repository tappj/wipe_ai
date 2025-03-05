import React, { useState, useEffect } from 'react';
import './App.css';
import SwipeCard from './components/SwipeCard';

function App() {
  const [mediaItems, setMediaItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data - replace this with actual photo/video gallery access
  useEffect(() => {
    // This would be replaced with actual media loading logic
    const mockMediaItems = [
      { id: 1, type: 'image', url: 'https://picsum.photos/400/600' },
      { id: 2, type: 'image', url: 'https://picsum.photos/400/601' },
      { id: 3, type: 'image', url: 'https://picsum.photos/400/602' },
      // Add more items as needed
    ];
    setMediaItems(mockMediaItems);
  }, []);

  const handleKeep = () => {
    // Implement keep logic here
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const handleDelete = () => {
    // Implement delete logic here
    const newMediaItems = mediaItems.filter((_, index) => index !== currentIndex);
    setMediaItems(newMediaItems);
  };

  return (
    <div className="App">
      <div className="gallery-container">
        {mediaItems.length > 0 && currentIndex < mediaItems.length ? (
          <SwipeCard
            item={mediaItems[currentIndex]}
            onKeep={handleKeep}
            onDelete={handleDelete}
          />
        ) : (
          <div className="no-more-items">
            <h2>No more items to review</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
