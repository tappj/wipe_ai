import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './SwipeCard.css';

const SwipeCard = ({ item, onKeep, onDelete }) => {
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleDragStart = (event, info) => {
    setDragStart({ x: info.point.x, y: info.point.y });
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 100;
    const deltaX = info.point.x - dragStart.x;

    if (deltaX > swipeThreshold) {
      // Swipe right - Keep
      controls.start({ x: '100%', opacity: 0 });
      onKeep();
    } else if (deltaX < -swipeThreshold) {
      // Swipe left - Delete
      controls.start({ x: '-100%', opacity: 0 });
      onDelete();
    } else {
      // Return to center
      controls.start({ x: 0, opacity: 1 });
    }
  };

  return (
    <motion.div
      className="swipe-card"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={controls}
    >
      <div className="media-container">
        {item.type === 'image' ? (
          <img src={item.url} alt="Gallery item" />
        ) : (
          <video src={item.url} controls />
        )}
      </div>
      <div className="action-hints">
        <div className="hint-delete">Delete</div>
        <div className="hint-keep">Keep</div>
      </div>
    </motion.div>
  );
};

export default SwipeCard; 