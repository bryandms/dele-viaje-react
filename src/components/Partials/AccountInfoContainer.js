import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

import AccountInfoItem from './AccountInfoItem'

class AccountInfoContainer extends Component {
  render() {
    return (
      <Grid className='custom-container'>
        <Grid.Row
          centered
          className='p-y'
        >
          <Grid.Column
            width={16}
            className='m-b-1'
          >
            <Header
              as='h2'
              dividing
              textAlign='center'
              content='Beneficios de tener una cuenta'
            />
          </Grid.Column>

          <AccountInfoItem
            icon='bookmark'
            title='Favoritos'
            description='Guarda un sitio turístico como favorito.'
          />

          <AccountInfoItem
            icon='cloud'
            title='Clima'
            description='Consulta el clima del sitio turístico.'
          />

          <AccountInfoItem
            icon='car'
            title='Uber'
            description='Consulta el costo estimado del viaje en Uber.'
          />

          <AccountInfoItem
            icon='star'
            title='Calificar'
            description='Asigna una calificación a un sitio turístico.'
          />
        </Grid.Row>
      </Grid>
    )
  }
}

export default AccountInfoContainer
