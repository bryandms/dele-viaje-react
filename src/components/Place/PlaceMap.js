import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class PlaceMap extends Component {
  render() {
    const { lat, lng, name } = this.props
    const style = {
      height: '300px'
    }

    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat,
          lng
        }}
        zoom={14}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={name}
          name={name}
          position={{
            lat,
            lng
          }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(PlaceMap)
