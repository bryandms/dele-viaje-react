import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

import { isAuth, isAdmin, isUser } from '../../helpers/auth'

class Navbar extends Component {
  state = {
    activeItem: 'Dele Viaje'
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { roles } = this.props.user
    const displayHomeLink = () => {
      if (roles) {
        if (isAdmin(roles))
          return '/admin/dashboard'

        if (isUser(roles))
          return '/dashboard'
      }

      return '/'
    }

    return (
      <Menu text fluid>
        <Menu.Item
          as={Link}
          to={displayHomeLink()}
          name='Dele Viaje'
          active={activeItem === 'Dele Viaje'}
          onClick={this.handleItemClick}
        />
        {
          isAuth() ?
            (
              <Menu.Item
                as={Link}
                to='/logout'
                position='right'
                name='Cerrar Sesión'
                active={activeItem === 'Cerrar Sesión'}
                onClick={this.handleItemClick}
              />
            ) : (
              <Menu.Menu position='right'>
                <Menu.Item
                  as={Link}
                  to='/login'
                  name='Iniciar Sesión'
                  active={activeItem === 'Iniciar Sesión'}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={Link}
                  to='/register'
                  name='Crear Cuenta'
                  active={activeItem === 'Crear Cuenta'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            )
        }
      </Menu>
    )
  }
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(Navbar)
