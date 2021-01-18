import React, { useState, useContext } from 'react';
import PortfolioContext from '../../context/context';

const Navbar = () => {
  const { navbar } = useContext(PortfolioContext);
  const { title, links } = navbar;
  // For opening/closing hamburger menu
  const [hamOpen, setHamOpen] = useState(false);

  const toggleHamburger = () => {
    setHamOpen(!hamOpen);
  };

  // Close hamburger if a nav-link is clicked
  const handleLinkClick = () => {
    setHamOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <a href="/">
        <h1>{title || 'siteName'}</h1>
      </a>
      <nav>
        <button className="hamburger-btn" type="button" onClick={toggleHamburger}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <ul className={`nav-links ${hamOpen ? 'open' : ''}`}>
          {links
            ? links.map((link) => (
                <li key={link.id} className={`${hamOpen ? 'fade' : ''}`}>
                  <a href={link.to} onClick={handleLinkClick}>
                    {link.name}
                  </a>
                </li>
              ))
            : ''}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
