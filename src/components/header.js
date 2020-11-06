import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  const [input, setInput] = useState(""); // '' is the initial state value
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
            value={input}
            onInput={(e) => setInput(e.target.value)}
            placeholder="Search Golf Courses"
            className="header--nav--input--search"
          />
          <div className="header--nav--input--icon">
            <FontAwesomeIcon
              onClick={() => {
                window.location = "/search/" + input;
              }}
              icon={faSearch}
              size="1x"
            />
          </div>
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
            <HashLink
              className="header--buttons"
              smooth
              to="/#subscribe-section"
            >
              Subscribe
            </HashLink>
          </li>
        </ul>
        <div className="header--nav--burger"></div>
      </nav>
    </div>
  );
};

export default Header;
