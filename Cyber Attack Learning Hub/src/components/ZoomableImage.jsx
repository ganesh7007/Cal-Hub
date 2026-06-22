import React, { useState } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import './ZoomableImage.css';

const ZoomableImage = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const openModal = () => {
    setIsOpen(true);
    setScale(1);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4)); // Max scale 4
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 0.5)); // Min scale 0.5
  };

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={`zoomable-trigger ${className || ''}`} 
        onClick={openModal} 
        title="Click to zoom"
      />
      
      {isOpen && (
        <div className="zoomable-modal" onClick={closeModal}>
          <div className="zoomable-controls" onClick={e => e.stopPropagation()}>
            <button onClick={zoomIn} title="Zoom In"><ZoomIn size={24} /></button>
            <button onClick={zoomOut} title="Zoom Out"><ZoomOut size={24} /></button>
            <button onClick={closeModal} title="Close"><X size={24} /></button>
          </div>
          <div className="zoomable-image-container" onClick={e => e.stopPropagation()}>
            <img 
              src={src} 
              alt={alt} 
              style={{ transform: `scale(${scale})`, transition: 'transform 0.2s ease' }} 
              className="zoomed-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
