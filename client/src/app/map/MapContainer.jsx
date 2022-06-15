import React, { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';

function MapContainer() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 6;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_JS_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map center={center} zoom={zoom} />
}

export default MapContainer;