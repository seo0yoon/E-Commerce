import React, { useCallback, useState } from "react";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const menuSet = useSelector((state) => state.layouts.menus); //전역변수 사용

  const [isEnClicked, setIsEnClicked] = useState(true); //보이게
  const [isRuClicked, setIsRuClicked] = useState(false); //안보이게

  const selectEn = useCallback(() => {
    setIsEnClicked(true);
    setIsRuClicked(false);
  }, []);

  const selectRu = useCallback(() => {
    setIsRuClicked(true);
    setIsEnClicked(false);
  }, []);

  return (
    <header className="header">
      <div className="wrapper">
        <Logo />
        <Navigation menus={menuSet} />
        <ul className="languages">
          <li
            className={`language ${isEnClicked ? "clicked" : ""}
                  ${isRuClicked ? "" : "clicked"}`}
            onClick={selectEn}
          >
            EN
          </li>
          <li
            className={`language ${isRuClicked ? "clicked" : ""}
                  ${isEnClicked ? "" : "clicked"}`}
            onClick={selectRu}
          >
            RU
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
