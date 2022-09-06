import React from 'react';
import './css/index.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">Login</div>
          <div className="bread-crumbs">Home &gt; Login</div>
          <div className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
          <div className="underline"></div>
        </div>
        <section className="section">
          <div className="title txt-bold">Returning Customer</div>
          <div className="login-input">
            <div className="input-form">
              <div className="input-title txt-bold">Email address</div>
              <input
                className="input"
                type="text"
                placeholder="company@domain.com"
              />
            </div>
            <div className="input-form">
              <div className="input-title txt-bold">Password</div>
              <input className="input" type="password" placeholder="password" />
            </div>
          </div>
          <div className="login-btn txt-bold">Log in</div>
          <div className="underline"></div>
        </section>
        <div className="sign-up">
          <div className="title txt-bold">New Customer</div>
          <div className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
          <Link to="/signup">
            <div className="sign-up-btn txt-bold">Continue</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
