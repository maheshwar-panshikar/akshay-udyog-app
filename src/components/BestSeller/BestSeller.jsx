import React, { useState, useEffect } from 'react';
import './BestSeller.css';

const BEST_SELLERS = [
  { id: 1, name: 'Margherita Basil Pizza', price: '₹449', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Truffle Mushroom Risotto', price: '₹599', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Classic Greek Salad', price: '₹299', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Belgium Dark Mousse', price: '₹349', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Iced Caramel Macchiato', price: '₹249', img: 'https://images.unsplash.com/photo-1461023235550-11f2f0558442?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Sizzling Garlic Prawns', price: '₹699', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=600' }
];

const BestSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Updated to 4
  const maxIndex = BEST_SELLERS.length - itemsToShow;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bestseller-container">
      <div className="section-header">
        <p style={{color: '#e67e22', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '5px'}}>Our Favorites</p>
        <h2>Best Sellers</h2>
      </div>

      <div className="carousel-viewport">
        <div 
          className="cards-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {BEST_SELLERS.map(item => (
            <div key={item.id} className="food-card">
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.name} className="card-img" />
              </div>
              <div className="card-info">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;