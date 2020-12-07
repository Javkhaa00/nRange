import React from "react";

const PhoneSubs = () => {
  return (
    <div className="subs--wrapper">
      <div className="subs--wrapper--side">
        <span className="subs--wrapper--main--popular">Most popular</span>
        <span className="subs--wrapper--side--title">One Time</span>
        <span className="subs--wrapper--side--desc">(life of phone)</span>
        <span className="subs--wrapper--side--amount">$29.00</span>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          id="form_gnsq73c3"
        >
          <input type="hidden" name="business" value="sabit.bazar@gmail.com" />
          <input type="hidden" name="cmd" value="_xclick" />
          <input
            type="hidden"
            name="item_name"
            value="One time (life of phone)"
          />
          <input type="hidden" name="amount" value="29" />
          <input type="hidden" name="a1" value="29" />
          <input type="hidden" name="p1" value="1200" />
          <input type="hidden" name="t1" value="M" />
          <input type="hidden" name="src" value="1" />
          <input type="hidden" name="sra" value="1" />
          <input
            type="hidden"
            name="notify_url"
            value="https://www.nrange.com/accesssubscr.php"
          />
          <input type="hidden" name="os0" id="os0_0" value="gnsq73c3" />
          <input
            type="hidden"
            name="return"
            id="return_gnsq73c3"
            value="https://www.nrange.com/subscribe/"
          />
          <input
            type="hidden"
            name="cancel_return"
            id="cancel_return_gnsq73c3"
            value="https://www.nrange.com/subscribe/"
          />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="on0" value="SubOpt" />
          <input
            type="hidden"
            name="custom"
            id="customEmailgnsq73c3"
            value=""
          />
          <button
            type="submit"
            name="submit"
            class="subscribe_btn"
            onclick="document.getElementById('customEmailgnsq73c3').value=document.getElementById('vuseremail').value;"
          >
            <div className="subs--wrapper--side--subscribe">Subscribe</div>
          </button>
        </form>
      </div>
      <div className="subs--wrapper--side">
        <span className="subs--wrapper--side--title">Life Time</span>
        <span className="subs--wrapper--side--desc">
          (transfers to any supported phone)
        </span>
        <span className="subs--wrapper--side--amount">$85.00</span>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          id="form_5p4vx8c4"
        >
          <input type="hidden" name="business" value="sabit.bazar@gmail.com" />
          <input type="hidden" name="cmd" value="_xclick" />
          <input
            type="hidden"
            name="item_name"
            value="Lifetime (transfers to any supported phone)"
          />
          <input type="hidden" name="amount" value="85" />
          <input type="hidden" name="a1" value="85" />
          <input type="hidden" name="p1" value="1200" />
          <input type="hidden" name="t1" value="M" />
          <input type="hidden" name="src" value="1" />
          <input type="hidden" name="sra" value="1" />
          <input
            type="hidden"
            name="notify_url"
            value="https://www.nrange.com/accesssubscr.php"
          />
          <input type="hidden" name="os0" id="os0_1" value="5p4vx8c4" />
          <input
            type="hidden"
            name="return"
            id="return_5p4vx8c4"
            value="https://www.nrange.com/subscribe/"
          />
          <input
            type="hidden"
            name="cancel_return"
            id="cancel_return_5p4vx8c4"
            value="https://www.nrange.com/subscribe/"
          />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="on0" value="SubOpt" />
          <input
            type="hidden"
            name="custom"
            id="customEmail5p4vx8c4"
            value=""
          />
          <button
            type="submit"
            name="submit"
            class="subscribe_btn"
            onclick="document.getElementById('customEmail5p4vx8c4').value=document.getElementById('vuseremail').value;"
          >
            <div className="subs--wrapper--side--subscribe">Subscribe</div>
          </button>
        </form>
      </div>
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
    </div>
  );
};

export default PhoneSubs;
