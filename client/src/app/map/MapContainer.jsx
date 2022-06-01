import React, { useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map'
import Marker from './Marker'

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MapContainer() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <Wrapper apiKey="AIzaSyDlotiA6nqcCyudjF4B3E-7tB-2GTxfkH0" render={render}>
      <Map center={center} zoom={zoom}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </Map>
    </Wrapper>
  );
}

export default MapContainer;