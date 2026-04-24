import React, { useState, useEffect } from 'react';
import './WeAre.css';

const ACHIEVEMENT_IMAGES = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', // Award ceremony or kitchen shot
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', // Team shot
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800'  // Signature dish shot
];

const WeAre = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === ACHIEVEMENT_IMAGES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="we-are-container">
      {/* Left: Auto-sliding Gallery */}
      <div className="we-are-left">
        {ACHIEVEMENT_IMAGES.map((img, index) => (
          <div 
            key={index} 
            className={`achievement-slide ${index === current ? 'active' : ''}`}
          >
            <img src={img} alt={`Achievement ${index}`} className="achievement-img" />
          </div>
        ))}
      </div>

      {/* Right: Owner Message */}
      <div className="we-are-right">
        <span className="owner-tag">Our Journey</span>
        <h2>A Legacy of Taste and Excellence</h2>
        <p className="owner-message">
          "What started as a small family kitchen has grown into a destination for food enthusiasts. 
          Our commitment has always been simple: to source the finest local ingredients and treat every 
          dish as a masterpiece. Over the last decade, we have been honored with multiple culinary 
          awards, but our greatest achievement remains the smile on our customers' faces."
        </p>
        <div className="owner-info">
          <p className="owner-signature">Chef Maheshwar</p>
          <p className="owner-designation">Founder & Executive Chef</p>
        </div>
      </div>
    </section>
  );
};

export default WeAre;