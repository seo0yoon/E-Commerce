import React from 'react';
import './css/index.css';

function MyAccount() {
  return (
    <div className="my-account">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">My Account</div>
          <div className="bread-crumbs">Home &gt; My account</div>
        </div>
        <article className="article">
          <ul className="menus txt-bold">
            <li className="menu">Dashboard</li>
            <li className="menu">Others</li>
            <li className="menu">Downloads</li>
            <li className="menu">Addresses</li>
            <li className="menu">Account details</li>
            <li className="menu">Logout</li>
          </ul>
          <div className="desc">
            <span className="style-gray">Hello</span> admin (
            <span className="style-gray">not</span> admin? Log out)
            <br></br>
            <br></br>
            <span className="style-gray">From your account dashboard you </span>
            can view your recent orders,
            <span className="style-gray"> manage your </span>shipping and
            billing addresses, <span className="style-gray">and</span> edit your
            password and account details.
          </div>
        </article>
      </div>
    </div>
  );
}

export default MyAccount;
