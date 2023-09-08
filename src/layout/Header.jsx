import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header id="header">
      <div className="header__logo">
        <Link to="/">React-Hooks</Link>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/state">useState</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/tab">Tab</Link>
          </li>
        </ul>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/effect">useEffect</Link>
          </li>
          <li>
            <Link to="/title">Title</Link>
          </li>
          <li>
            <Link to="/click">Click</Link>
          </li>
          <li>
            <Link to="/confirm">Comfirm</Link>
          </li>
          <li>
            <Link to="/preventleave">PreventLeave</Link>
          </li>
          <li>
            <Link to="/beforeleave">BeforeLeave</Link>
          </li>
          <li>
            <Link to="/fade">Fade</Link>
          </li>
          <li>
            <Link to="/network">Network</Link>
          </li>
          <li>
            <Link to="/scroll">Scroll</Link>
          </li>
          <li>
            <Link to="/fullscreen">Fullscreen</Link>
          </li>
          <li>
            <Link to="/notification">Notification</Link>
          </li>
          <li>
            <Link to="/axios">Axios</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
