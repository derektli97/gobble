import React from "react";
import { Background, MapContainer, MapTitle, ImageContainer, Image } from "Pages/Live/LiveMaps/LiveMapsStyles";
import Venue from "assets/venuemap.png";
class LiveMaps extends React.Component {
  state = {};

  constructor (props) {
    super(props);
    this.hello = "hello";
  }

  render () {
    return (
      <Background>
        <MapContainer>
          <MapTitle style={{ backgroundColor: "#e8678b" }}>TAMUhack Location and Parking</MapTitle>
        </MapContainer>
        <MapContainer>
          <MapTitle style={{ backgroundColor: "#9791b5" }}>Venue Map</MapTitle>
          <ImageContainer>
            <Image src={Venue} />
          </ImageContainer>
        </MapContainer>
      </Background>
    );
  }
}

export default LiveMaps;
