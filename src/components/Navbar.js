import { useState } from "react";

import MenuImg from "../assets/menu.svg";
import ExitImg from "../assets/exit.svg";

const Navbar = () => {
  const [navButton, setNavButton] = useState(false);

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
          onClick={() => setNavButton(true)}
        />

        {navButton ? (
          <nav>
            <img
              className="mobile-menu-exit"
              src={ExitImg}
              alt="Close Navigation"
              onClick={() => setNavButton(false)}
            />

            <ul className="primary-nav">
              <li>
                <a className="current" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>

            <ul className="secondary-nav">
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a className="go-premium-cta" href="/">
                  Go Premium
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
