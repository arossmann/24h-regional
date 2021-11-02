import React from 'react';
import vegetables from '../img/sharon-pittaway-KUZnfk-2DSQ-unsplash.jpg';

const Home = () => {
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
        <div className="twelve columns"><h1>Willkommen auf 24h Regional - Finde einen 24h-Hofladenautomaten in deiner N&auml;he</h1></div>
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