import { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Event from '../Event'

export default function Map({ zoom, center }) {
  const [popup, setPopup] = useState(false)
  return (
    <GoogleMap {...{ zoom, center }} mapContainerClassName="map-container">
      <Marker position={center} onClick={e => setPopup(true)} />
      {popup ? <Event /> : null}
    </GoogleMap>
  )
}