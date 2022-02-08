import React from 'react';
import './../i18n';
import {useTranslation} from "react-i18next";

const Imprint = () => {
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
        <div className="twelve columns"><h1>{t('header:imprint')}</h1></div>
      </div>
      <div className="row">
        <div className="twelve columns"> <h2>{t('imprint:contact')}</h2>
Arne Ro&szlig;mann<br />Schlachthofstra&szlig; 6<br/>91126 Schwabach
      </div>
      <div className="row">
        <div className="twelve columns"><h2>{t('imprint:disclaimer.disclaimer')}</h2>
        {t('imprint:disclaimer.text')}
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};
  
export default Imprint;