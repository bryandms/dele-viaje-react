import React, { Component } from 'react'
import { Card, Grid, Header, Image } from 'semantic-ui-react'

import FormSearchPlace from './FormSearchPlace'
import PlaceCard from './PlaceCard'
import scrollTo from '../../helpers/scrollTo'

class SearchPlaceContainer extends Component {
  state = {
    places: []
  }

  handleSearchFormSubmit = places => {
    this.setState({ places })
    scrollTo('#result')
  }

  render() {
    const displayPlaceCards = this.state.places.map(place =>
      <PlaceCard key={place.id} place={place} />
    )

    return (
      <React.Fragment>
        <Grid>
          <Grid.Row
            centered
            className='bg-form'
          >
            <Grid.Column
              mobile={12}
              tablet={8}
              computer={6}
              verticalAlign='middle'
            >
              <FormSearchPlace onFormSubmit={this.handleSearchFormSubmit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid className='custom-container bg-secondary'>
          {
            displayPlaceCards.length ?
              (
                <Grid.Row
                  id='result'
                  centered
                  className='p-y'
                >
                  <Grid.Column width={16}>
                    <Header
                      as='h2'
                      dividing
                      textAlign='center'
                    >
                      Sitios turísticos encontrados
                    </Header>

                    <Card.Group centered>
                      { displayPlaceCards }
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              ) :
              (
                <Grid.Row
                  id='result'
                  centered
                  className='bg-secondary p-y'
                >
                  <Grid.Column
                    width={14}
                    textAlign='center'
                  >
                    <Image
                      src='/images/logo-dele-viaje.png'
                      centered
                    />
                    <Header
                      as='h2'
                      className='m-0'
                      subheader='Encuentre su próximo destino'
                    />
                  </Grid.Column>
                </Grid.Row>
              )
          }
        </Grid>
      </React.Fragment>
    )
  }
}

export default SearchPlaceContainer
