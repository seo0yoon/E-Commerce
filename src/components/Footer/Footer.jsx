import React from 'react';
import Menus from './components/Menus/Menus';
import Socials from './components/Socials/Socials';
import './css/index.css';
import { useSelector } from 'react-redux';

function Footer() {
  const menuSet = useSelector((state) => state.layouts.footer.menus);
  const menuShop = useSelector((state) => state.layouts.footer.shop);
  const menuHelp = useSelector((state) => state.layouts.footer.help);

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="menus">
            <div className="items">
              <div className="title txt-bold">MENU</div>
              <Menus menus={menuSet} />
            </div>
            <div className="items">
              <div className="title txt-bold">SHOP</div>
              <Menus menus={menuShop} />
            </div>
            <div className="items">
              <div className="title txt-bold">HELP</div>
              <Menus menus={menuHelp} />
            </div>
          </div>
          <div className="left_bottom">
            <Socials />
          </div>
        </div>
        <div className="contacts">
          <div className="number txt-bold">(052) 611-5711</div>
          <div className="email txt-bold">company@domain.com</div>
          <div className="address">575 Crescent Ave. Quakertown, PA 18951</div>
        </div>
        <div className="right">
          <div className="logo">
            <img src="/assets/Footer/logo.svg" alt="OREBI" />
          </div>
          <div className="rights">
            2020 Orebi Minimal eCommerce Adobe XD Template by Adveits
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
