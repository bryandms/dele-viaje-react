import React, { Component } from 'react'
import { Button, Header, Image, List } from 'semantic-ui-react'
import { errorNotification } from '../../helpers/notification'
const Uber = require('uber-api')({
  server_token: process.env.REACT_APP_UBER_SERVER_TOKEN,
  version:'v1'
})

class RideEstimateUber extends Component {
  state = {
    sLat: null,
    sLng: null,
    prices: [],
    toggleUber: false
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            sLat: position.coords.latitude,
            sLng: position.coords.longitude
          })
        }
      )
    }
  }

  handleClick = (e, sLat, sLng, eLat, eLng) => {
    if (sLat && sLng) {
      Uber.getPriceEstimate({ sLat, sLng, eLat, eLng }, (err, res) => {
        if (err) {
          const error = [{
            message: 'No hemos podido estimar el costo del viaje'
          }]
          errorNotification(error)
        } else {
          this.setState({ prices: res.prices, toggleUber: true })
        }
      })
    }
  }

  render() {
    const { eLat, eLng } = this.props
    const { sLat, sLng } = this.state
    const displayPrices = this.state.prices.map((price, i) =>
      <List.Item
        key={i}
        image={
          <Image
            circular
            src={'/images/uber/' + price.display_name + '.png'}
          />
        }
        header={price.display_name}
        content={'₡' + price.minimum}
      />
    )

    return (
      <React.Fragment>
        <Header
          as='h2'
          content='Costo del viaje en Uber'
          dividing
        />
        {
          this.state.toggleUber ?
            <List horizontal>
              { displayPrices }
            </List> :
            <Button
              content='Estimar viaje'
              primary
              disabled={ !sLat && !sLng }
              onClick={(e) => this.handleClick(e, sLat, sLng, eLat, eLng)}
            />
        }
      </React.Fragment>
    )
  }
}

export default RideEstimateUber
