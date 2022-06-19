import { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import Event from '../Event'

export default function EventMarker({ position }) {
  const [popup, setPopup] = useState(false)
  return (
    <div>
      <Marker {...{ position }} onClick={e => setPopup(true)} />
      {popup ? <Event /> : null}
    </div>
  )
}