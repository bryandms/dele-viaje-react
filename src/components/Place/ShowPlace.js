import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Grid, Header } from 'semantic-ui-react'

import PlaceGallery from './PlaceGallery'
import PlaceInformation from './PlaceInformation'
import PlaceMap from './PlaceMap'
import PlaceServices from './PlaceServices'
import RideEstimateUber from './RideEstimateUber'
import PlaceWeather from './PlaceWeather'
import { placeQuery } from '../../graphql/place'
import { errorNotification } from '../../helpers/notification'
import { isAuth } from '../../helpers/auth'

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
            >
              <PlaceInformation place={place} />
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className='google-maps'
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
          </Grid.Row>

          <Grid.Row>
            <Grid.Column
              width={16}
              className='p-b'
            >
              {
                displayComponents ?
                  <PlaceServices services={place.services} /> : null
              }
            </Grid.Column>

            {
              isAuth() ?
                <React.Fragment>
                  <Grid.Column
                    mobile={16}
                    tablet={8}
                    computer={8}
                    className='p-b'
                  >
                    <RideEstimateUber
                      eLat={place.latitude}
                      eLng={place.longitude}
                    />
                  </Grid.Column>

                  <Grid.Column
                    mobile={16}
                    tablet={8}
                    computer={8}
                    className='p-b'
                  >
                    <PlaceWeather
                      lat={place.latitude}
                      lon={place.longitude}
                    />
                  </Grid.Column>
                </React.Fragment> : null
            }
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
