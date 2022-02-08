import React from 'react';
import logo from '../img/logo.png';
import './../i18n';
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation()
    return (
        <header className="header">
            <div className="container">
            <img src={logo} alt="logo" className="logoImg" />
                <h1 className="site-title">{t('head:header')}</h1>
            </div>
        </header>
        );
};
export default Header;