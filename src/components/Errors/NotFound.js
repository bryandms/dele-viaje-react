import React, { Component } from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

class NotFound extends Component {
  render() {
    return (
      <Grid className='bg-error'>
        <Grid.Row>
          <Grid.Column
            verticalAlign='middle'
            textAlign='center'
          >
            <Image
              src='/images/logo-dele-viaje.png'
              centered
            />
            <Header
              as='h2'
              className='m-0'
            >
              <Header.Subheader>
                No hemos podido encontrar la página solicitada
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default NotFound
