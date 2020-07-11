import React, { Fragment, useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-button" onClick={handleShow}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <a className="navbar-brand" href="">
          <i class="fas fa-fire"></i> <span>sociio</span>
        </a>
        <ul className={`nav-list ${show && "show"}`}>
          <li className="nav-item">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Groups
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
