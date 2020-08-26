import React from 'react';
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

import mapStyles from './mapStyles'


//fill the div
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}


// center lat and lng for Main USA
const center = {
    lat: 39.8283,
    lng: 98.5795,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map() {
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        
    })

    if(loadError) return "Error loading maps"
    if(!isLoaded) return "Loading Maps"

    return (
    <div>
        <GoogleMap mapContainerStyle={mapContainerStyle}
         zoom={5} 
         center={center}
         options={options}
        >
            <Marker>
                
            </Marker>
        </GoogleMap>
    </div>
    )
}