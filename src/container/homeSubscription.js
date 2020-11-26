import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSubscription = () => {
  return (
    <div className="subs" id="subscribe-section">
      <span className="subs--title">OUR SUBSCRIPTION PLANS</span>
      <span className="subs--desc">For registered users only (Optional)</span>
      <input
        type="text"
        placeholder="Enter your email here"
        className="subs--email"
      />
      <div className="subs--wrapper">
        <div className="subs--wrapper--side">
          <span className="subs--wrapper--side--title">Free</span>
          <span className="subs--wrapper--side--desc">(free 3 courses)</span>
          <span className="subs--wrapper--side--amount">$0.00</span>
          <div
            style={{ visibility: "hidden" }}
            className="subs--wrapper--side--subscribe"
          >
            Subscribe
          </div>
        </div>
        <div className="subs--wrapper--main">
          <span className="subs--wrapper--main--popular">Most popular</span>
          <span className="subs--wrapper--side--title">One Time</span>
          <span className="subs--wrapper--side--desc">(life of phone)</span>
          <span className="subs--wrapper--side--amount">$29.00</span>
          <div className="subs--wrapper--main--subscribe">Subscribe</div>
        </div>
        <div className="subs--wrapper--side">
          <span className="subs--wrapper--side--title">Life Time</span>
          <span className="subs--wrapper--side--desc">
            (transfers to any supported phone)
          </span>
          <span className="subs--wrapper--side--amount">$85.00</span>
          <div className="subs--wrapper--side--subscribe">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscription;

{
  /* <div className="subs--wrapper">
  <div className="subs--wrapper--side">
    <span className="subs--wrapper--side--title">Free</span>
    <span className="subs--wrapper--side--desc">(free 3 courses)</span>
    <span className="subs--wrapper--side--amount">$0.00</span>
    <div
      style={{ visibility: "hidden" }}
      className="subs--wrapper--side--subscribe"
    >
      Subscribe
    </div>
  </div>
  <div className="subs--wrapper--main">
    <span className="subs--wrapper--main--popular">Most popular</span>
    <span className="subs--wrapper--side--title">One Time</span>
    <span className="subs--wrapper--side--desc">(life of phone)</span>
    <span className="subs--wrapper--side--amount">$29.00</span>
    <div className="subs--wrapper--main--subscribe">Subscribe</div>
  </div>
  <div className="subs--wrapper--side">
    <span className="subs--wrapper--side--title">Life Time</span>
    <span className="subs--wrapper--side--desc">
      (transfers to any supported phone)
    </span>
    <span className="subs--wrapper--side--amount">$85.00</span>
    <div className="subs--wrapper--side--subscribe">Subscribe</div>
  </div>
</div>; */
}
