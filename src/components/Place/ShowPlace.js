import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Grid, Header } from 'semantic-ui-react'

import PlaceGallery from './PlaceGallery'
import PlaceInformation from './PlaceInformation'
import PlaceMap from './PlaceMap'
import PlaceServices from './PlaceServices'
import { placeQuery } from '../../graphql/place'
import { errorNotification } from '../../helpers/notification'

class ShowPlace extends Component {
  state = {
    place: {},
    displayComponents: false
  }

  componentWillMount = async () => {
    const res = await this.props.placeQuery.refetch()
    const { success, errors, data } = res.data.place

    if (success)
      this.setState({ place: data, displayComponents: true })
    else
      errorNotification(errors)
  }

  render() {
    const { place, displayComponents } = this.state

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
              style={{ minHeight: '300px' }}
            >
              {
                displayComponents ?
                  <PlaceMap
                    lat={place.latitude}
                    lng={place.longitude}
                    name={place.name}
                  /> : null
              }
            </Grid.Column>

            <Grid.Column
              width={16}
              className='p-b'
            >
              {
                displayComponents ?
                  <PlaceServices services={place.services} /> : null
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
