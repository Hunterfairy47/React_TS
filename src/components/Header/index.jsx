import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <div className="heading">
      <nav className="heading__nav" style={{ textAlign: "center" }}>
        <span className="heading__left">
          <Link to="/">ReactApp </Link>
        </span>
        <ul className="heading__menu">
          <li>
            <Link to="/todolist">To Do App</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <span className="heading__right">
          <Link to="/">Login </Link>
        </span>
      </nav>
    </div>
  );
}

export default Header;
