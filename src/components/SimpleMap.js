import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  maxWidth: "100%",
  maxHeight: 360,
  border: "1px solid grey",
  borderRadius: "30px",
  margin: "50px 50px 100px 50px"
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Your location'}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  //ENTER HERE YOUR GOOGLE MAP API KEY PLEASE THEN IT WILL SHOW THE MAP PROPERLLY
  apiKey: ''
})(SimpleMap);