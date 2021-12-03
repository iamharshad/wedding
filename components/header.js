import * as React from "react";
import HamburgerMenu from "./hamburgerMenu";
import { navspy } from "../shared/helpers";
const Header = () => {
  const [isHeaderSticky, setHeaderSticky] = React.useState(false);

  let lastScrollTop = 0;
  const handleScroll = () => {
    if (typeof window === "undefined") return;
    const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    setHeaderSticky(st < lastScrollTop);
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // setLastScrollTop(st < 0 ? 0 : st);
  };

  React.useEffect(() => {
    navspy({ from: ".nav-link", to: ".spyble-section", offset: 76 });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`position-fixed w-100 ${
        isHeaderSticky ? "sticky py-2" : " py-4"
      }`}
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="logo text-white">
            <img src="/media/images/logo.png" className="img-fluid" />
          </div>
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
            <a className="nav-link" href="#gallery">
              gallery
            </a>
            <a className="nav-link" href="#contact">
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
