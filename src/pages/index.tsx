import React from 'react';
import vegetables from '../img/sharon-pittaway-KUZnfk-2DSQ-unsplash.jpg';
import './../i18n';
import {useTranslation} from "react-i18next";

const Home = () => {
  const {t} = useTranslation()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
     <div className="container">
      <div className="row">
        <div className="twelve columns"><h1>{t('header:welcome')}</h1></div>
      </div>
      <div className="row">
        <div className="twelve columns">
          <img src={vegetables} alt="veg"/>
          <p>Source: https://unsplash.com/photos/KUZnfk-2DSQ</p>
        </div>
      </div>
    </div>
    </div>
  );
};
  
export default Home;