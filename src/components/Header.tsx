import React from 'react';
import logo from '../img/logo.png';
const Header = () => {
return (
    <header className="header">
        <div className="container">
        <img src={logo} alt="logo" className="logoImg" />
            <h1 className="site-title">Finde einen 24h-Hofladenautomaten in deiner Nähe</h1>
        </div>
    </header>
    );
};
export default Header;