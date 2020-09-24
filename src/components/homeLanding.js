import React from 'react';

const HomeLanding = () => {
    return (
        <div className="landing" id="firstpage-section">
            <div className="landing--background">
                <img src="/assets/background.png" alt="background" />
            </div>
            <div className="landing--text-wrapper">
                <span className="landing--text-wrapper--welcome">
                    Welcome the leading
                </span>
                <span className="landing--text-wrapper--title">
                    Smartphone golf gps
                </span>
                <div className="landing--text-wrapper--stores">
                    <a href="http://itunes.apple.com/us/app/nrange-golf-gps/id366108491?mt=8" target="_blank">
                        <img src="/assets/app-store.svg" alt="app-store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.nrangegolfgps" target="_blank">
                        <img src="/assets/google-play.svg" alt="google-play" />
                    </a>
                </div>
            </div>
            <div className="landing--phones">
                <div className="landing--phones--iphone">
                    <img src="/assets/samsung-s8-mockup.png" alt="samsung-8" />
                </div>
                <div className="landing--phones--samsung">
                    <img src="/assets/iphone-x-mockup.png" alt="iphone-x" />
                </div>
            </div>
        </div>
    );
};

export default HomeLanding;