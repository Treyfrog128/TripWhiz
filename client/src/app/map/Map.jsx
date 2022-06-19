import { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import EventMarker from './EventMarker'

export default function Map({ zoom, center }) {
  const [popup, setPopup] = useState(false)
  return (
    <GoogleMap {...{ zoom, center }} mapContainerClassName="map-container">
      <EventMarker position={center} />
    </GoogleMap>
  )
}