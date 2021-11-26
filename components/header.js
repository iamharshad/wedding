import * as React from 'react';
import HamburgerMenu from './hamburgerMenu';
import { navspy } from '../shared/helpers';
const Header = () => {
  const [isHeaderSticky, setHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    navspy({ from: '.nav-link', to: '.spyble-section', offset: 76 });
    window.addEventListener('scroll', () => {
      setHeaderSticky(window.scrollY > 60);
    });
  }, []);
  return (
    <header
      className={`position-fixed w-100 ${
        isHeaderSticky ? 'sticky py-2' : ' py-4'
      }`}
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="logo text-white">Wedding</div>
          {/* Desktop nav */}
          <nav className="navbar d-none d-md-flex  text-uppercase align-items-center">
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
          </nav>
          {/* Mobile nav */}
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
