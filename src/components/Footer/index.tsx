import React from 'react';
import {
    NavLink
  } from './FooterElements';

const Footer = () => {
return (
    <footer className="footer">
        <div className="container">
        <NavLink to='/imprint' activeClassName="selectedLink">Impressum</NavLink>
        </div>
    </footer>
    );
};
export default Footer;