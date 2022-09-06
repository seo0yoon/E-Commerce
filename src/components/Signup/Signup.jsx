import React, { useState, useCallback } from 'react';
import './css/index.css';

function Signup() {
  const [check, setCheck] = useState(false);

  const isChecked = useCallback(() => {
    setCheck(true);
  }, []);

  const unChecked = useCallback(() => {
    setCheck(false);
  }, []);

  return (
    <div className="sign-up">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">Sign up</div>
          <div className="bread-crumbs">Home &gt; Sign up</div>
          <div className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
          <div className="underline"></div>
        </div>
        <section className="section">
          <div className="info-block">
            <div className="title txt-bold">Your Personal Details</div>
            <div className="login-input">
              <div className="input-form">
                <div className="input-title txt-bold">First Name</div>
                <input className="input" type="text" placeholder="First Name" />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Last Name</div>
                <input className="input" type="text" placeholder="Last Name" />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Email address</div>
                <input
                  className="input"
                  type="email"
                  placeholder="company@domain.com"
                />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Telephone</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div className="underline"></div>
          </div>
          <div className="info-block">
            <div className="title txt-bold">New Customer</div>
            <div className="login-input">
              <div className="input-form">
                <div className="input-title txt-bold">Address 1</div>
                <input
                  className="input"
                  type="text"
                  placeholder="4279 Zboncak Port Suite 6212"
                />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Address 2</div>
                <input className="input" type="text" placeholder="-" />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">City</div>
                <input className="input" type="text" placeholder="Your City" />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Post Code</div>
                <input className="input" type="text" placeholder="05228" />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Country</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Please select"
                />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Region/State</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Please select"
                />
              </div>
            </div>

            <div className="underline"></div>
          </div>
          <div className="info-block">
            <div className="title txt-bold">Your Password</div>
            <div className="login-input">
              <div className="input-form">
                <div className="input-title txt-bold">Password</div>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="input-form">
                <div className="input-title txt-bold">Repreat Password</div>
                <input
                  className="input"
                  type="password"
                  placeholder="Repreat password"
                />
              </div>
            </div>
            <div className="underline"></div>
          </div>
        </section>
        <div className="submit-block">
          <div className="submit-policy">
            <div className="check-box">
              <img src="/assets/signup/not-checked-box.svg" alt="check-box" />
            </div>
            <div className="policy-context">
              I have read and agree to the Privacy Policy
            </div>
          </div>
          <div className="select-subscribe">
            <div className="select-desc">Subscribe Newsletter</div>
            <div className="check-block">
              <div className="check-box">
                <img src="/assets/signup/not-checked-box.svg" alt="check-box" />
              </div>
              <div className="context">Yes</div>
            </div>
            <div className="check-block">
              <div className="check-box">
                <img src="/assets/signup/checked-box.svg" alt="check-box" />
              </div>
              <div className="context">No</div>
            </div>
          </div>
          <div className="login-btn txt-bold">Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
