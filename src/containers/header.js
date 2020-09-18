import React from 'react';
// import { animateScroll as scroll, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <div className="header" id="header-section">
            <nav className="header--nav">
                <div className="header--nav--logo">
                    <img
                        onClick={() => {
                            window.location = "/";
                        }}
                        src="/assets/nRange-logo.png"
                        alt="header-logo"
                    />
                </div>
                <div className="header--nav--input">
                    <input
                        type="text"
                        placeholder=" Search Golf Courses"
                        className="header--nav--search"
                    />
                </div>
                <ul className="header--nav--buttons">
                    <li><Link className="header--buttons" to="/">Product</Link></li>
                    <li><Link className="header--buttons" to="/courses">Courses</Link></li>
                    <li>
                        <div
                            onClick={() => {
                                window.scrollTo({
                                    top: 900,
                                    behavior: 'smooth'
                                });
                            }}
                            className="header--buttons"
                        >Subscribe</div>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;

