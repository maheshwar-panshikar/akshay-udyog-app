import React, { useState, useEffect } from 'react';
import './Hero.css';

const SLIDE_DATA = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600',
    title: 'Taste the Tradition',
    subtitle: 'Authentic flavors prepared with love'
  },
  {
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600',
    title: 'Sizzling Grills',
    subtitle: 'Signature steaks and grilled platters'
  },
  {
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=1600',
    title: 'Healthy Bowls',
    subtitle: 'Nourish your body with organic greens'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      {SLIDE_DATA.map((slide, index) => (
        <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.title} className="hero-image" />
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="dots-container">
        {SLIDE_DATA.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;