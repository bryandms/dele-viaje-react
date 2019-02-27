import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Navbar from './Navbar'

const Layout = props => (
  <React.Fragment>
    <Grid>
      <Navbar />
    </Grid>

    <Route {...props} />
  </React.Fragment>
)

export default Layout
