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
    zoom: 2
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



 //********************************************        
 //********************************************        
// No matter what I did, object returned undefined when trying to map. One hour before code freeze. 
//Wanted something to show on map for Demo.
       
          <Marker key={0} latitude={35.611763} longitude={-83.489548}
          key>
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault(setSelectedPark());
              }}
            ></button>
          </Marker>
          <Marker className="marker-btn" key={1} latitude={44.3386} longitude={-68.2733}></Marker>
          <Marker className="marker-btn" key={1} latitude={14.25} longitude={-170.68}></Marker>
          <Marker className="marker-btn" key={1} latitude={38.68} longitude={-109.57}></Marker>
          <Marker className="marker-btn" key={1} latitude={43.75} longitude={-102.50}></Marker>
          <Marker className="marker-btn" key={1} latitude={29.25} longitude={-103.25}></Marker>
          <Marker className="marker-btn" key={1} latitude={25.65} longitude={-80.08}></Marker>
          <Marker className="marker-btn" key={1} latitude={38.57} longitude={-107.72}></Marker>
          <Marker className="marker-btn" key={1} latitude={44.33} longitude={-109.93}></Marker>
          <Marker className="marker-btn" key={1} latitude={38.2} longitude={-68.2733}></Marker>
          <Marker className="marker-btn" key={1} latitude={33.78} longitude={-80.78}></Marker>
          <Marker className="marker-btn" key={1} latitude={36.24} longitude={-116.82}></Marker>
          <Marker className="marker-btn" key={1} latitude={34.01} longitude={-119.42}></Marker>
          <Marker className="marker-btn" key={1} latitude={42.94} longitude={-122.1}></Marker>
          <Marker className="marker-btn" key={1} latitude={63.33} longitude={-150.50}></Marker>
          <Marker className="marker-btn" key={1} latitude={24.63} longitude={-82.87}></Marker>
          <Marker className="marker-btn" key={1} latitude={25.32} longitude={-80.93}></Marker>
          <Marker className="marker-btn" key={1} latitude={67.78} longitude={-153.30}></Marker>
          <Marker className="marker-btn" key={1} latitude={38.63} longitude={-90.19}></Marker>
          <Marker className="marker-btn" key={1} latitude={48.80} longitude={-114.00}></Marker>
          <Marker className="marker-btn" key={1} latitude={36.06} longitude={-112.14}></Marker>
          <Marker className="marker-btn" key={1} latitude={43.73} longitude={-100.80}></Marker>
          <Marker className="marker-btn" key={1} latitude={38.98} longitude={-114.30}></Marker>
          <Marker className="marker-btn" key={1} latitude={37.73} longitude={-105.51}></Marker>
          <Marker className="marker-btn" key={1} latitude={31.92} longitude={-104.87}></Marker>
          <Marker className="marker-btn" key={1} latitude={20.72} longitude={-156.17}></Marker>
          <Marker className="marker-btn" key={1} latitude={19.38} longitude={-155.20}></Marker>
          <Marker className="marker-btn" key={1} latitude={34.51} longitude={-93.05}></Marker>
          <Marker className="marker-btn" key={1} latitude={58.50} longitude={-155.00}></Marker>
          <Marker className="marker-btn" key={1} latitude={59.92} longitude={-149.65}></Marker>
          <Marker className="marker-btn" key={1} latitude={36.80} longitude={-118.55}></Marker>
          <Marker className="marker-btn" key={1} latitude={60.97} longitude={-153.42}></Marker>
          <Marker className="marker-btn" key={1} latitude={40.49} longitude={-121.51}></Marker>
          <Marker className="marker-btn" key={1} latitude={37.18} longitude={-86.10}></Marker>
          <Marker className="marker-btn" key={1} latitude={37.18} longitude={-108.49}></Marker>
          <Marker className="marker-btn" key={1} latitude={46.85} longitude={-121.75}></Marker>
          <Marker className="marker-btn" key={1} latitude={48.70} longitude={-121.20}></Marker>
          <Marker className="marker-btn" key={1} latitude={47.97} longitude={-123.50}></Marker>
          <Marker className="marker-btn" key={1} latitude={35.07} longitude={-109.78}></Marker>
          <Marker className="marker-btn" key={1} latitude={36.48} longitude={-121.16}></Marker>
          <Marker className="marker-btn" key={1} latitude={41.30} longitude={-124.00}></Marker>
          <Marker className="marker-btn" key={1} latitude={40.40} longitude={-105.58}></Marker>
          <Marker className="marker-btn" key={1} latitude={32.25} longitude={-110.50}></Marker>
          <Marker className="marker-btn" key={1} latitude={18.33} longitude={-64.73}></Marker>



          {selectedPark ? (
            <Popup

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
