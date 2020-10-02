import React from 'react';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--sub">
                <div className="footer--sub--hand-phone">
                    <img src="/assets/hand-and-phone.png" alt="hand-phone" />
                </div>
            </div>
            <div className="footer--download">
                <div className="footer--download--logo">
                    <img style={{ cursor: "pointer" }} onClick={() => { window.location = "/"; }} src="/assets/nrange-logo-footer.png" alt="footer-nrange-logo" />
                </div>
                <span className="footer--download--title">Download now for free</span>
                <span className="footer--download--desc">Join the 1million+ golfers today</span>
                <div className="footer--download--stores">
                    <a href="http://itunes.apple.com/us/app/nrange-golf-gps/id366108491?mt=8" target="blank">
                        <img src="/assets/app-store.svg" alt="app-store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.nrangegolfgps" target="blank">
                        <img src="/assets/google-play.svg" alt="google-play" />
                    </a>
                </div>
            </div>
            <div className="footer--extra">
                <div className="footer--extra--wrapper">
                    <div className="footer--extra--wrapper--logos">
                        <div className="footer--extra--wrapper--logos--nrange">
                            <img style={{cursor: "pointer"}} onClick={() => { window.location = "/"; }} src="/assets/nRange-logo-black.png" alt="footer-logo" />
                        </div>
                        <div className="footer--extra--wrapper--logos--social">
                            <a className="black" href="https://www.facebook.com/nrangegolfgps" target="blank">
                                <FontAwesomeIcon
                                    style={{ paddingRight: "30px" }}
                                    className="fontawe"
                                    icon={faFacebookF}
                                    size="lg" />
                            </a>
                            <a className="black" href="bla">
                                <FontAwesomeIcon className="fontawe" icon={faTwitter} size="lg" />
                            </a>
                            <a className="black" href="https://instagram.com/nrangegolfgps" target="blank">
                                <FontAwesomeIcon className="fontawe" icon={faInstagram} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="footer--extra--wrapper--column">
                        <ul>
                            <li className="footer--extra--title">About</li>
                            <li className="footer--extra--desc">
                                <a className="black" href="https://www.facebook.com/nrangegolfgps" target="blank">Facebook</a>
                            </li>
                            <li className="footer--extra--desc">
                                <a className="black" href="https://instagram.com/nrangegolfgps" target="blank">Instagram</a>
                            </li>
                            <li className="footer--extra--desc">
                                <a className="black" href="mailto:nRange@nrange.com?subject=To nRange&body=Support Us" target="blank">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--extra--wrapper--column">
                        <ul>
                            <li className="footer--extra--title">Business/Partnerships</li>
                            <li className="footer--extra--desc">
                                <a className="black" href="https://infinite.mn/#/" target="blank">Company</a>
                            </li>
                            <li className="footer--extra--desc">
                                <a
                                    className="black"
                                    href="mailto:info@infinite.mn ?subject=to infinite&body"
                                >Contact Us</a>
                            </li>
                            <li style={{ visibility: "hidden" }} className="footer--extra--desc">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer--all-rights">
                <div className="footer--all-rights--wrapper">
                    <span className="footer--all-rights--wrapper--desc">
                        Copyright © 2008-2020 nRange Golf GPS Developed by Infinite Solutions, LLC
                        nRange and nRange Golf GPS are trademarks or registered trademarks of, LLC in the United States and other countries.
                        <a href="/terms" className="footer--all-rights--terms" >
                            Terms of Service
                        </a>
                    </span>
                </div>
                <div className="footer--all-rights--logos">
                    <a href="http://itunes.apple.com/us/app/nrange-golf-gps/id366108491?mt=8" target="blank">
                        <img src="/assets/app-store.svg" alt="app-store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.nrangegolfgps" target="blank">
                        <img style={{ paddingLeft: "12px" }} src="/assets/google-play.svg" alt="google-play" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;