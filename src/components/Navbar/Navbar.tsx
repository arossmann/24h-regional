import React, { useState } from "react";
import './../../i18n';
import {useTranslation} from "react-i18next";
import {availableLanguages} from "./../../i18n";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {t, i18n} = useTranslation()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t('menu:start')}
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t('menu:about')}
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink
            to="/map"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t('menu:map')}
          </NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
    </div>
  );
};

export default Navbar;
