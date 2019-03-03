import React, { Component } from 'react'
import { Header, Label } from 'semantic-ui-react'

class PlaceService extends Component {
  render() {
    const displayServices = this.props.services.map((service, i) =>
      <Label
        key={i}
        content={service.name}
        icon={service.icon}
      />
    )

    return (
      <React.Fragment>
        {
          displayServices.length ?
            <React.Fragment>
              <Header
                as='h2'
                content='Servicios'
                dividing
              />
               { displayServices }
            </React.Fragment> : null
        }
      </React.Fragment>
    )
  }
}

export default PlaceService
