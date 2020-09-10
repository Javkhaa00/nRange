import React from 'react';

export const Header = () => {
    return (
        <div className="header" id="header-section">
            <nav className="header--nav">
                <div className="header--nav--logo">
                    <img src="/assets/nRange.svg" alt="header-logo" />
                </div>
                <input spaceholder="SEARCH GOLF COURSES" />
                <ul>
                    <li><a>Product</a></li>
                    <li><a>Courses</a></li>
                    <li><a>Stats</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;

