import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';
// import closeIcon from '../Assets/close.png';

const Navbar = ({ currentSection, handleNavigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
  
    // Delay adding the scroll event listener to avoid blocking rendering
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 500);  // Delay event listener
  
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavigation('home')}>
          <span className="logo-text">The Invincible Studio</span>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
  <div className="close-button" onClick={toggleMenu}>
  <XIcon className="h-8 w-8 text-white" />
  </div>
  {navItems.map((item) => (
    <li key={item.id} className="nav-item">
      <a
        href={`#${item.id}`}
        className={currentSection === item.id ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation(item.id);
          setMenuOpen(false);
        }}
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;