import React from "react";
import ComSubs from "../components/comSubs";
import PhoneSubs from "../components/phoneSubs";
import TabletSubs from "../components/tabletSubs";
import useWindowSize from "../hooks/UseWindowSize";

const HomeSubscription = () => {
  const windowSize = useWindowSize();

  const renderByWindowSize = () => {
    if (windowSize.width < 479) {
      return <PhoneSubs />;
    }
    if (windowSize.width < 872) {
      return <TabletSubs />;
    }
    return <ComSubs />;
  };

  return (
    <div className="subs" id="subscribe-section">
      <span className="subs--title">OUR SUBSCRIPTION PLANS</span>
      <span className="subs--desc">For registered users only (Optional)</span>
      <input
        type="text"
        placeholder="Enter your email here"
        className="subs--email"
      />
      {renderByWindowSize()}
    </div>
  );
};

export default HomeSubscription;
