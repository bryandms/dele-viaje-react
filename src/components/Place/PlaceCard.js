import React, { Component } from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'

import { isAuth } from '../../helpers/auth'

class PlaceCard extends Component {
  render() {
    const { place } = this.props
    const photos = place.photos ? Object.values(place.photos) : []
    const rating = place.votes ? (place.score / place.votes) : 0

    return (
      <Card>
        <Image
          width='100%'
          height='200'
          fluid
          label={{ as: 'a', color: 'red', corner: 'right', icon: 'heart' }}
          src={
            photos.length
              ? photos[0]
              : 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg'
          }
        />

        <Card.Content>
          <Card.Header>
            { place.name }
            { isAuth() ? 'auth' : 'no auth' }
          </Card.Header>

          <Card.Meta>
            <span className='date'>
              { place.category } | { place.accessibility }
            </span>
          </Card.Meta>

          <Card.Description>
            { place.description }
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Rating
            icon='star'
            defaultRating={rating}
            maxRating={5}
            disabled
          />
          { ' ' + rating.toFixed(1) }
        </Card.Content>
      </Card>
    )
  }
}

export default PlaceCard
