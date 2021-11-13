import React from 'react';
  
const Imprint = () => {
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
        <div className="twelve columns"><h1>Impressum</h1></div>
      </div>
      <div className="row">
        <div className="twelve columns"> <h2>Kontakt</h2>
Arne Ro&szlig;mann<br />Schlachthofstra&szlig; 6<br/>91126 Schwabach
      </div>
      <div className="row">
        <div className="twelve columns"><h2>Haftungshinweis</h2>
Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links.Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</div>
      </div>
    </div>
    </div>
    </div>
  );
};
  
export default Imprint;