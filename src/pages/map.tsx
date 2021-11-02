import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './../App.scss';
import de_by_Data from "../data/de-by.json"

const Map = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <div id="map">
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
                <dl>
                  <dt>Open</dt>
                  <dd>
                    {store.open}
                  </dd>
                  <dt>Products</dt>
                  <dd>{store.products.join(", ")}</dd>
                </dl>
              </div>
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
      </div>
    </div>
  );
};
  
export default Map;