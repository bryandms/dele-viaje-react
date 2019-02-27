import React, { Component } from 'react'

import AccountInfoContainer from './Partials/AccountInfoContainer'
import SearchPlaceContainer from './Place/SearchPlaceContainer'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchPlaceContainer />
        <AccountInfoContainer />
      </React.Fragment>
    )
  }
}

export default Home
