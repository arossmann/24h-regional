import React from 'react';
import './../../i18n';
import {useTranslation} from "react-i18next";

import {
    NavLink
  } from './FooterElements';

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="footer">
            <div className="container">
            <NavLink to='/imprint'>{t('menu:imprint')}</NavLink>
            </div>
        </footer>
        );
};
export default Footer;