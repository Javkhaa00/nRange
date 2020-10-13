import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = () => {
  
  const url = "http://localhost:8000/courses/1995";
  // Simple GET request using fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="header" id="header-section">
      <nav className="header--nav">
        <div className="header--nav--logo">
          <img
            onClick={() => {
              window.location = "/";
            }}
            style={{ cursor: "pointer" }}
            src="/assets/nRange-logo.png"
            alt="header-logo"
          />
        </div>
        <div className="header--nav--input">
          <input
            type="text"
            placeholder="Search Golf Courses"
            className="header--nav--search"
          />
          <FontAwesomeIcon className="search" icon={faSearch} size="1x" />
        </div>
        <ul className="header--nav--buttons">
          <li>
            <Link className="header--buttons" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="header--buttons" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 890,
                  behavior: "smooth",
                });
              }}
              className="header--buttons"
            >
              Subscribe
            </Link>
          </li>
        </ul>
        <div className="header--nav--burger"></div>
      </nav>
    </div>
  );
};

export default Header;
