import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { StoreType } from '../../models/store.interface';
import { Store } from '../../api/api';
import { useEffect, useState } from 'react';
import './map.css';

const Map = () => {

  const [stores, setStores] = useState<StoreType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Store.getStores()
			.then((data) => {
				setStores(data);
			})
			.catch((err) => {
        console.log(err);
				setIsError(true);
			});
		return () => {};
  }, []);
  return (
      <div className='regionalmap' id="map">
      <MapContainer center={[49.32946891093882, 11.014676682576878]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {isError ? (
						<p>
							Oop!!! Error getting stores
              {console.log(Error)}
						</p>
					) : (
						//Modify this section 
						stores.map((store) => (
              <Marker key = {store.id} position={[store.gps.latitude, store.gps.longitude]}>
                <Popup position={[store.gps.latitude, store.gps.longitude]}>
                  <div>
                    <h2 className="store_name">{store.name}</h2>
                    <dl>
                      <dt>Open</dt>
                      <dd>
                        {store.open}
                      </dd>
                      <dt>Products</dt>
                      <dd>{store.products.join(", ")}</dd>
                      <dt>Address</dt>
                      <dd>{store.location.street}; {store.location.zip} {store.location.city}</dd>
                    </dl>
                  </div>
                </Popup>
              </Marker>
							
						))
					)}
        
      </MapContainer>
      </div>
  );
};

export default Map;
