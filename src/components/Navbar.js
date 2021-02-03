import { useState } from "react";

import MenuImg from "../assets/menu.svg";
import ExitImg from "../assets/exit.svg";

const Navbar = () => {
  const [navButton, setNavButton] = useState(false);

  const showNavigation = () => setNavButton(!navButton);

  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="/">
          Remember<span>That</span>
        </a>

        <img
          className="mobile-menu"
          src={MenuImg}
          alt="Open Navigation"
          onClick={showNavigation}
        />

        <nav className={navButton ? "active" : "menu-btn"}>
          <img
            className="mobile-menu-exit"
            src={ExitImg}
            alt="Close Navigation"
            onClick={showNavigation}
          />

          <ul className="primary-nav">
            <li>
              <a className="current" href="#to-home">
                Home
              </a>
            </li>
            <li>
              <a href="#to-features">Features</a>
            </li>
            <li>
              <a href="#to-testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#to-contact">Contact</a>
            </li>
          </ul>

          <ul className="secondary-nav">
            <li>
              <a className="go-premium-cta" href="#to-contact">
                Go Premium
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
