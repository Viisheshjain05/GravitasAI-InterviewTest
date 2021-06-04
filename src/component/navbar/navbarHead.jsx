//* Libraries
import React from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.scss";
import "./styles/HomeBtn.css";

const Home = () => {
  const MobileHamburgerToggle = () => {
    const menuIcon = document.querySelector(".menuIcon");
    const menu = document.querySelector(".menu");

    menuIcon.classList.toggle("humbargerAni");
    menu.classList.toggle("menuShow");
  };

  return (
    <>
      <button
        type="button"
        className="menuIcon"
        onClick={() => MobileHamburgerToggle()}
      >
        <span style={{ fontSize: "2em" }}></span>
      </button>

      <div className="menu" id="Mobile-only-navbar">
        <ul>
          <li>
            <Link to="/">
              <div>Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Conversational</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>User</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Engagement</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Integration</div>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="navbar-head" id="Desktop-only-navbar">
          <Link to="/">
            <div className="navbar-logo">botanalytics</div>
          </Link>
          <div className="navbar-list">
            <div className="navbar-list--item">
              <i className="bx bx-user"></i>
              Dashboard
              <i class="bx bx-chevron-down"></i>
            </div>
            <div className="navbar-list--item">
              <i class="bx bx-comment-detail"></i>
              Conversational
              <i class="bx bx-chevron-down"></i>
            </div>
            <div className="navbar-list--item">
              <i className="bx bx-user"></i>
              User
              <i class="bx bx-chevron-down"></i>
            </div>
            <div className="navbar-list--item">
              <i class="bx bx-rotate-right"></i>
              Engagement
              <i class="bx bx-chevron-down"></i>
            </div>
            <div className="navbar-list--item">
              <i class="bx bx-intersect"></i>
              Integration
              <i class="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="navbar-connect">
            <div className="navbar-connect--logo">
              <i class="bx bxl-twitter"></i>
            </div>
            <div className="navbar-connect--name">Twitter</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
