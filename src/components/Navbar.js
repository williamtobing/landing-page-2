import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../actions";

import MenuImg from "../assets/menu.svg";
import ExitImg from "../assets/exit.svg";

const Navbar = () => {
  const nav = useSelector((state) => state.nav);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(show())}
        />

        <nav className={nav ? "active" : "menu-btn"}>
          <img
            className="mobile-menu-exit"
            src={ExitImg}
            alt="Close Navigation"
            onClick={() => dispatch(show())}
          />

          <ul className="primary-nav">
            <li>
              <a
                className="current"
                href="#to-home"
                onClick={() => dispatch(hide())}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#to-features" onClick={() => dispatch(hide())}>
                Features
              </a>
            </li>
            <li>
              <a href="#to-testimonial" onClick={() => dispatch(hide())}>
                Testimonial
              </a>
            </li>
            <li>
              <a href="#to-contact" onClick={() => dispatch(hide())}>
                Contact
              </a>
            </li>
          </ul>

          <ul className="secondary-nav">
            <li>
              <a
                className="go-premium-cta"
                href="#to-contact"
                onClick={() => dispatch(hide())}
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
