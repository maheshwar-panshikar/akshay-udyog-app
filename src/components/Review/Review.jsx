import React, { useState } from 'react';
import './Review.css';

const REVIEWS_DATA = [
  {
    id: 1,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Absolutely incredible flavors. We can\'t cook without these spices now.',
    name: 'Sarah Chen'
  },
  {
    id: 2,
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Authentic Indian experience. The quality is visible the moment you open the box.',
    name: 'Michael Rodriguez'
  }
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[activeIndex];

  return (
    <section className="review-container">
      {/* Dark Readability Overlay */}
      <div className="review-overlay"></div>

      {/* Static Header Section */}
      <div className="review-header-wrapper">
        <h2 className="review-title">|| Customer Speak ||</h2>
        <hr className="title-line" />
      </div>

      {/* Dynamic Content and Navigation */}
      <div className="review-content-wrapper">
        <button className="nav-arrow left-arrow" onClick={handlePrev}>‹</button>

        <div className={`current-review-card active`}>
          <img src={currentReview.photo} alt={currentReview.name} className="user-photo" />
          <div className="quote-box">
            <blockquote className="review-quote-text">
              {currentReview.quote}
            </blockquote>
            <cite className="user-name">{currentReview.name}</cite>
          </div>
        </div>

        <button className="nav-arrow right-arrow" onClick={handleNext}>›</button>
      </div>
    </section>
  );
};

export default Review;