import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { ContactStyled, MapStyled, ContactContainer } from "./ContactStyled";


class Contact extends React.Component {
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.723976, lng: -74.005974 }}
      >
        <Marker
          position={{ lat: 40.732342, lng: -74.004081 }}
        />
      </GoogleMap>
    ));

    return (
      <ContactContainer>
        <ContactStyled>
          <h3>Come visit us at</h3>
          <p>34 Barrow St, New York, NY 10014, USA</p>
          <MapStyled>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGS5hwl1N9dpx_BZaODV9PbxHpKzFRtGY&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`, width: `700px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapStyled>
        </ContactStyled>
      </ContactContainer>
    )
  }
}

export default Contact;