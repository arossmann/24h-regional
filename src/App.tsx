import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import de_by_Data from "./data/de-by.json"


console.log(de_by_Data)

function App() {
  return (
      <MapContainer center={[49.32946891093882, 11.014676682576878]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {de_by_Data.map(store => (          
          <Marker key = {store.id} position={[store.gps.latitude, store.gps.longitude]}>
            <Popup position={[store.gps.latitude, store.gps.longitude]}>
              <div>
                <h2>{store.name}</h2>
                <h4>Open: {store.open}</h4>
                <p>Products: {store.products.join(",")}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
  );
}

export default App;
