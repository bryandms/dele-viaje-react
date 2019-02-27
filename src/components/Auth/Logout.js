import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Logout extends Component {
  componentWillMount() {
    this.props.setUser({})
  }

  render() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    return <Redirect to='/login' />
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  setUser: dispatch.user.setUser
})

export default connect(mapState, mapDispatch)(Logout)
