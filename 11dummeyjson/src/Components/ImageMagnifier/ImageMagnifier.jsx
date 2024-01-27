import React, { useState } from 'react';
import './ImageMagnifier.css'; // Import your CSS file for styling

function ImageMagnifier({ src, alt }) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const boundingBox = e.target.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    setMagnifierPosition({ x, y });
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
    >
      <img src={src} alt={alt} className="image" />

      {showMagnifier && (
        <div
          className="magnifier"
          style={{ backgroundImage: `url(${src})`, backgroundPosition: `-${magnifierPosition.x}px -${magnifierPosition.y}px` }}
        />
      )}
    </div>
  );
}

export default ImageMagnifier;
