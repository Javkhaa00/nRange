import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useWindowSize from "../hooks/UseWindowSize";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

export const Header = () => {
  const [input, setInput] = useState("");
  const [activeClass, setActive] = useState("hamburger");

  const decodeurl = (a, b) => {
    let url = new URL(a);
    return url.searchParams.get(b) || "";
  };

  useEffect(() => {
    setInput(decodeurl(window.location.href, "keyword"));
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/search?keyword=" + input;
    }
  };

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
            onKeyPress={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Golf Courses"
            className="header--nav--input--search"
          />
          <Link
            className="header--nav--input--icon"
            to={`/search?keyword=${input}`}
          >
            <FontAwesomeIcon className="search" icon={faSearch} size="1x" />
          </Link>
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
        <div
          className={activeClass}
          onClick={() => {
            if (activeClass === "hamburger") {
              setActive("change");
            } else {
              setActive("hamburger");
            }
          }}
        >
          <div className="stick"></div>
          <div className="stick1"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
