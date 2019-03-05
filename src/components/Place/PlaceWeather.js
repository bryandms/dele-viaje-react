import React, { Component } from 'react'
import ReactWeather from 'react-open-weather'
import { Header } from 'semantic-ui-react'
import 'react-open-weather/lib/css/ReactWeather.css'

class PlaceWeather extends Component {
  render() {
    const { lat, lon } = this.props

    return (
      <React.Fragment>
        <Header
          as='h2'
          content='Clima'
          dividing
        />
        {
          lat && lon ?
            <ReactWeather
              forecast='today'
              apikey={process.env.REACT_APP_APIXU}
              unit='metric'
              lang='es'
              type='geo'
              lat={lat.toString()}
              lon={lon.toString()}
            /> : null
        }
      </React.Fragment>
    )
  }
}

export default PlaceWeather
