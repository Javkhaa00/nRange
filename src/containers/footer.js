import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--sub">
                <div className="footer--sub--wrapper">
                    <div className="footer--sub--wrapper--title">
                        Subscribe to
                    </div>
                    <div className="footer--sub--wrapper--desc">
                        Monotonectally iterate best-of-breed customer service whereas low-risk high-yield imperatives. Holisticly leverage existing.
                    </div>
                    <div className="footer--sub--wrapper--row">
                        <input className="footer--sub--wrapper--row--input" />
                        <div className="footer--sub--wrapper--row--button">Subscribe</div>
                    </div>
                </div>
                <div className="footer--sub--hand-phone">
                    <img src="/assets/hand-and-phone.png" alt="hand-phone" />
                </div>
            </div>
        </div>
    );
};

export default Footer;