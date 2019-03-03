import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Grid, Header } from 'semantic-ui-react'

import PlaceGallery from './PlaceGallery'
import PlaceInformation from './PlaceInformation'
import PlaceMap from './PlaceMap'
import { placeQuery } from '../../graphql/place'
import { errorNotification } from '../../helpers/notification'

class ShowPlace extends Component {
  state = {
    place: {},
    displayMap: false
  }

  componentWillMount = async () => {
    const res = await this.props.placeQuery.refetch()
    const { success, errors, data } = res.data.place

    if (success)
      this.setState({ place: data, displayMap: true })
    else
      errorNotification(errors)
  }

  render() {
    const { place, displayMap } = this.state

    return (
      <React.Fragment>
        <PlaceGallery photos={place.photos} />

        <Grid className='custom-container'>
          <Grid.Row className='p-t'>
            <Header
              as='h1'
              content={ place.name }
              subheader={ place.description }
            />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className='p-b'
            >
              <PlaceInformation place={place} />
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className='p-b'
            >
              {
                displayMap ?
                  <PlaceMap
                    lat={place.latitude}
                    lng={place.longitude}
                    name={place.name}
                  /> : null
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default graphql(
  placeQuery, {
    name: 'placeQuery',
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }
)(ShowPlace)
