import React from 'react';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--sub">
                <div className="footer--sub--wrapper">
                    <span className="footer--sub--wrapper--title">
                        Subscribe to
                    </span>
                    <span className="footer--sub--wrapper--desc">
                        Monotonectally iterate best-of-breed customer service whereas low-risk high-yield imperatives. Holisticly leverage existing.
                    </span>
                    <div className="footer--sub--wrapper--row">
                        <input className="footer--sub--wrapper--row--input" />
                        <span className="footer--sub--wrapper--row--button">Subscribe</span>
                    </div>
                </div>
                <div className="footer--sub--hand-phone">
                    <img src="/assets/hand-and-phone.png" alt="hand-phone" />
                </div>
            </div>
            <div className="footer--download">
                <div className="footer--download--logo">
                    <img src="/assets/nrange-logo-footer.png" alt="footer-nrange-logo" />
                </div>
                <span className="footer--download--title">Download now for free</span>
                <span className="footer--download--desc">Join the 1million+ golfers today</span>
                <div className="footer--download--stores">
                    <img src="/assets/app-store.svg" alt="app-store" />
                    <img src="/assets/google-play.svg" alt="google-play" />
                </div>
            </div>
            <div className="footer--extra">
                <div className="footer--extra--wrapper">
                    <div className="footer--extra--wrapper--logos">
                        <div className="footer--extra--wrapper--logos--nrange">
                            <img src="/assets/nRange-logo-black.png" alt="footer-logo" />
                        </div>
                        <div className="footer--extra--wrapper--logos--social">
                            <FontAwesomeIcon 
                                style={{paddingRight: "30px"}}
                                className="fontawe"
                                icon={faFacebookF}
                                size="lg" />
                            <FontAwesomeIcon className="fontawe" icon={faTwitter} size="lg" />
                            <FontAwesomeIcon className="fontawe" icon={faInstagram} size="lg" />
                        </div>
                    </div>
                    <div className="footer--extra--wrapper--column">
                        <ul>
                            <li className="footer--extra--title">About</li>
                            <li className="footer--extra--desc">Company</li>
                            <li className="footer--extra--desc">Careers</li>
                            <li className="footer--extra--desc">Blog</li>
                        </ul>
                    </div>
                    <div className="footer--extra--wrapper--column">
                        <ul>
                            <li className="footer--extra--title">For Golfers</li>
                            <li className="footer--extra--desc">Company</li>
                            <li className="footer--extra--desc">Careers</li>
                            <li className="footer--extra--desc">Blog</li>
                        </ul>
                    </div>
                    <div className="footer--extra--wrapper--column">
                        <ul>
                            <li className="footer--extra--title">Business/Partnerships</li>
                            <li className="footer--extra--desc">Company</li>
                            <li className="footer--extra--desc">Careers</li>
                            <li className="footer--extra--desc">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer--all-rights">
                <span className="footer--all-rights--desc">
                    © 2020 Nrange Golf Gps. All rights reserved. Terms & Conditions
                </span>
                <div className="footer--all-rights--logos">
                    <img src="/assets/app-store.svg" alt="app-store" />
                    <img style={{ paddingLeft: "12px" }} src="/assets/google-play.svg" alt="google-play" />
                </div>
            </div>
        </div>
    );
};

export default Footer;