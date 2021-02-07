import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../actions";

import MenuImg from "../assets/menu.svg";
import ExitImg from "../assets/exit.svg";

const Navbar = () => {
  const nav = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const showNav = () => {
    dispatch(show());
  };

  const hideNav = () => {
    dispatch(hide());
  };

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
          onClick={showNav}
        />

        <nav className={nav ? "active" : "menu-btn"}>
          <img
            className="mobile-menu-exit"
            src={ExitImg}
            alt="Close Navigation"
            onClick={hideNav}
          />

          <ul className="primary-nav">
            <li>
              <a className="current" href="#to-home" onClick={hideNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#to-features" onClick={hideNav}>
                Features
              </a>
            </li>
            <li>
              <a href="#to-testimonial" onClick={hideNav}>
                Testimonial
              </a>
            </li>
            <li>
              <a href="#to-contact" onClick={hideNav}>
                Contact
              </a>
            </li>
          </ul>

          <ul className="secondary-nav">
            <li>
              <a
                className="go-premium-cta"
                href="#to-contact"
                onClick={hideNav}
              >
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
