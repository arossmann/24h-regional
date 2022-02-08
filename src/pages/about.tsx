import React from 'react';
import './../i18n';
import {useTranslation} from "react-i18next";


const About = () => {
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
        <div className="twelve columns"><h1>{t('header:about')}</h1></div>
      </div>
      <div className="row">
        <div className="twelve columns">{t('about:main_text')}</div>
      </div>
    </div>
    </div>
    
  );
};
  
export default About;