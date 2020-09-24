import React from 'react';

const HomeSubscription = () => {

    return (
        <div className="subs" id="subscribe-section">
            <span className="subs--title">Subscriptions</span>
            <span className="subs--desc">
                Monotonectally iterate best-of-breed customer service whereas low-risk high-yield imperatives. Holisticly leverage existing.
            </span>
            <div className="subs--wrapper">
                <template className="subs--wrapper--side">
                    <span className="subs--wrapper--side--title">Free</span>
                    <span className="subs--wrapper--side--desc">(free 3 courses)</span>
                    <span className="subs--wrapper--side--amount">$0.00</span>
                    <div style={{visibility: "hidden"}} className="subs--wrapper--side--subscribe">Subscribe</div>
                </template>
                <template className="subs--wrapper--main">
                    <span className="subs--wrapper--main--popular">Most popular</span>
                    <span className="subs--wrapper--side--title">One Time</span>
                    <span className="subs--wrapper--side--desc">(life of phone)</span>
                    <span className="subs--wrapper--side--amount">$29.00</span>
                    <div className="subs--wrapper--main--subscribe">Subscribe</div>
                </template>
                <template className="subs--wrapper--side">
                    <span className="subs--wrapper--side--title">Life Time</span>
                    <span className="subs--wrapper--side--desc">
                        (transfers to any supported phone)
                    </span>
                    <span className="subs--wrapper--side--amount">$85.00</span>
                    <div className="subs--wrapper--side--subscribe">Subscribe</div>
                </template>
            </div>
        </div>
    );
};

export default HomeSubscription;