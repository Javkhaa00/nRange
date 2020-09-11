import React from 'react';

export const Header = () => {
    return (
        <div className="header" id="header-section">
            <nav className="header--nav">
                <div className="header--nav--logo">
                    <img src="/assets/nRange-logo.png" alt="header-logo" />
                </div>
                <div className="header--nav--input">
                    <input
                        type="text"
                        placeholder=" Search Golf Courses "
                        className="header--nav--search"
                    />
                </div>
                <ul className="header--nav--buttons">
                    <li><a>Product</a></li>
                    <li><a>Courses</a></li>
                    <li><a>Stats</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;

