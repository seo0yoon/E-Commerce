import React, { useCallback, useState } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import './css/index.css';

function Header() {
  const menuSet = useSelector((state) => state.layouts.menus);

  const [isEnClicked, setIsEnClicked] = useState(true);
  const [isRuClicked, setIsRuClicked] = useState(false);

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
        <Logo menus={menuSet} />
        <Navigation menus={menuSet} />
        <ul className="languages">
          <li
            className={`language ${isEnClicked ? 'clicked' : ''}
                  ${isRuClicked ? '' : 'clicked'}`}
            onClick={selectEn}
          >
            EN
          </li>
          <li
            className={`language ${isRuClicked ? 'clicked' : ''}
                  ${isEnClicked ? '' : 'clicked'}`}
            onClick={selectRu}
          >
            RU
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
