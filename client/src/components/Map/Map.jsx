
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";



const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 39.8283,
        longitude: -98.5795,
        width: "100vw",
        height: "100vh",
        zoom: 4
    })

    const [selectedPark, setSelectedPark] = useState(null)

    const park = "National Park"

    useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedPark(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);
    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
            >
                <Marker 
                key={1}
                latitude={35.611763}
                longitude={-83.489548}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault(
                            setSelectedPark()
                        )
                    }}>
                        
                    </button>
                </Marker>
                {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>NationalPark</h2>
              <p> Smokey Mountains</p>
            </div>
          </Popup>
        ) : null}
                
            </ReactMapGL>
        </div>
    )
}
export default Map