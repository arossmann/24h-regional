import React from 'react';
  
const About = () => {
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
        <div className="twelve columns"><h1>Warum diese Seite?</h1></div>
      </div>
      <div className="row">
        <div className="twelve columns"> Eines Sonntags wollte ich gerade die Vorbereitung f&uuml;r das Mittagessen beginnen, da fiel mir auf, dass ich die Kartoffeln schon am Vortag verarbeitet hatte. Also brauchte ich Neue, idealerweise von einem lokalen Bauern. Da es ja viele Hofl&auml;den und -automaten gibt, wollte ich Kartoffeln dort holen. Doch leider konnte ich keine Webseite finden, auf der ich danach suchen und auf einer Karte passende Automaten in meiner N&auml;he finden konnte.
          Nachdem ich dann nach etwas Erinnerung an einen Automaten, an dem ich einmal vorbeigefahren bin und etwas Suche doch g&uuml;ndig geworden bin, ist im Nachgang die Idee dieser Seite entstanden.</div>
      </div>
    </div>
    </div>
    
  );
};
  
export default About;