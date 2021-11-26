import * as React from 'react';
import { navigationItems } from '../shared/dataset';
const HamburgerMenu = ({ className = '' }) => {
  const [isNavbarOpen, setNavbarOpen] = React.useState(false);

  const handleHamburgerClick = () => {
    setNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className={`d-flex align-items-center d-md-none ${className}`}>
      <div
        className={`hamburger ${isNavbarOpen ? 'active' : ''}`}
        onClick={handleHamburgerClick}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div
        className={`menu position-absolute text-uppercase ${
          isNavbarOpen ? 'active' : ''
        }`}
      >
        <a className="nav-link active" href="#banner">
          Home
        </a>

        <a className="nav-link" href="#invitation">
          Invitation
        </a>
        <a className="nav-link" href="#events">
          events
        </a>
        <a className="nav-link" href="#story">
          story
        </a>
        <a className="nav-link" href="#story">
          gallery
        </a>
        <a className="nav-link" href="#story">
          contact
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
