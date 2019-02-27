import React, { Component } from 'react'

import Forbidden from '../Errors/Forbidden'
import { havePermissions } from '../../helpers/auth'

const Authorization = (allowedRoles, store) => WrappedComponent =>
  class Authorization extends Component {
    render() {
      const user = store.getState().user
      const { roles } = user

      const havePermission = havePermissions(allowedRoles, roles)

      if (havePermission) {
        return <WrappedComponent {...this.props} user={user} />
      } else {
        return <Forbidden />
      }
    }
  }

export default Authorization
