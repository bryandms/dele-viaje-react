import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          label={
            isAuth()
              ? { as: 'a', color: 'red', corner: 'right', icon: 'heart' }
              : { icon: 'heart', className: 'd-none' }
            }
          src={
            photos.length
              ? photos[0]
              : 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg'
          }
        />

        <Card.Content>
          <Card.Header>
            { place.name }
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

          <Link
            to={'/place/' + place.id}
            className='float-right'
          >
            Ver más
          </Link>

        </Card.Content>
      </Card>
    )
  }
}

export default PlaceCard
