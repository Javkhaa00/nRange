import React from 'react';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing--background">
                <img src="/assets/background.png" alt="background" />
            </div>
            <div className="landing--text-wrapper">
                <div className="landing--text-wrapper--welcome">
                    Welcome the leading
                </div>
                <div className="landing--text-wrapper--title">
                    Smartphone golf gps rangefinder
                </div>
                <div className="landing--text-wrapper--desc">
                    Distinctively empower quality schemas through web-enabled communities. Continually whiteboard emerging meta-services whereas.
                </div>
                <div className="landing--text-wrapper--stores">
                    <img src="/assets/app-store.svg" alt="app-store" />
                    <img src="/assets/google-play.svg" alt="google-play" />
                </div>
            </div>
            <div className="landing--phones">
                <img src="/assets/samsung-s8-mockup.png" alt="samsung-8" />
                <img src="/assets/iphone-x-mockup.png" alt="iphone-x" />
            </div>
        </div>
    )
}

export default Landing;