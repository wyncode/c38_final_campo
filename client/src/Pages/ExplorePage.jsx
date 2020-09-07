import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import NavigationBar from '../components/NavigationBar';
import data from '../parks-simple.json'


const ExplorePage = () => {
  const [viewport, setViewport] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    width: '100vw',
    height: '100vh',
    zoom: 4
  });

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);


  return (
    <div>
      <NavigationBar />
      <Container id="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >

          <Marker key={1} latitude={35.611763} longitude={-83.489548}
          key>
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault(setSelectedPark());
              }}
            ><h1>Park</h1></button>
            
          </Marker>
          {selectedPark ? (
            <Popup
              latitude={selectedPark.geometry.coordinates[1]}
              longitude={selectedPark.geometry.coordinates[0]}
              onClose={() => {
                setSelectedPark(null);
              }}
            >
           
            </Popup>
          ) : null}
        </ReactMapGL>
      </Container>
    </div>
  );
};
export default ExplorePage;
