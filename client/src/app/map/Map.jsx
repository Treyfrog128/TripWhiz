import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map(props) {
  return (
    <GoogleMap zoom={props.zoom} center={props.center} mapContainerClassName="map-container">
      <Marker position={props.center} />
    </GoogleMap>
  )
}