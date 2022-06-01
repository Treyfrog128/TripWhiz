import React, { useEffect, useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Map({
  center,
  zoom,
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ height: '20rem' }}/>;
}

export default Map;