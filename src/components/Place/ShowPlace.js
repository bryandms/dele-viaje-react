import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { placeQuery } from '../../graphql/place'
import { errorNotification } from '../../helpers/notification'

class ShowPlace extends Component {
  state = {
    place: {}
  }
  async componentWillMount() {
    const res = await this.props.placeQuery.refetch()
    const { success, errors, data } = res.data.place

    if (success)
      this.setState({ place: data })
    else
      errorNotification(errors)
  }

  render() {
    const { place } = this.state
    return (
      <React.Fragment>
        { place.name }
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
