import React, { useState, useEffect } from 'react';
import './Header.css';

const MENU_DATA = [
  {
    title: 'Starters',
    submenu: [
      { name: 'Appetizers', link: '/menu/starters/appetizers' },
      { name: 'Soups & Salads', link: '/menu/starters/soups' },
      { name: 'Finger Foods', link: '/menu/starters/finger-foods' }
    ]
  },
  {
    title: 'Main Course',
    submenu: [
      { name: 'Continental', link: '/menu/main/continental' },
      { name: 'Traditional', link: '/menu/main/traditional' },
      { name: 'Grill & Roast', link: '/menu/main/grill' }
    ]
  },
  {
    title: 'Beverages',
    submenu: [
      { name: 'Mocktails', link: '/menu/drinks/mocktails' },
      { name: 'Hot Brews', link: '/menu/drinks/coffee' },
      { name: 'Fresh Juices', link: '/menu/drinks/juices' }
    ]
  },
  {
    title: 'Desserts',
    submenu: [
      { name: 'Cakes & Pastries', link: '/menu/desserts/cakes' },
      { name: 'Ice Cream', link: '/menu/desserts/ice-cream' },
      { name: 'Traditional Sweets', link: '/menu/desserts/traditional' }
    ]
  },
  {
    title: 'Specials',
    submenu: [
      { name: 'Chef’s Choice', link: '/menu/specials/chef' },
      { name: 'Seasonal Fest', link: '/menu/specials/seasonal' },
      { name: 'Combo Deals', link: '/menu/specials/combos' }
    ]
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); 
  };

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <a href="/" className="logo">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="logo-text">FRESHBITE</span>
        </a>

        {/* NAVIGATION */}
        <nav className={`nav-box ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {MENU_DATA.map((item, index) => (
              <li key={index} className={`nav-item ${activeSubmenu === index ? 'sub-open' : ''}`}>
                <button 
                  className="nav-trigger" 
                  onClick={() => handleSubmenuToggle(index)}
                >
                  {item.title}
                  <svg className="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                
                {/* Desktop uses CSS hover, Mobile uses React state toggle */}
                <div className={`dropdown-menu ${activeSubmenu === index ? 'force-show' : ''}`}>
                  {item.submenu.map((sub, sIdx) => (
                    <a key={sIdx} href={sub.link} className="dropdown-link" onClick={() => setIsMenuOpen(false)}>
                      {sub.name}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="header-right">
          <a href="tel:9876543210" className="call-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div className="call-btn-text">
              <span className="call-label">Call / Whatsapp</span>
              <span className="call-number">9876543210</span>
            </div>
          </a>

          <button className="hamburger" onClick={toggleMobileMenu}>
            <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;