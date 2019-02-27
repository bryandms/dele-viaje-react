import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Divider, Form, Grid, Header, Icon } from 'semantic-ui-react'

import { loginMutation } from '../../graphql/auth'
import { isAdmin, isUser } from '../../helpers/auth'
import { errorNotification } from '../../helpers/notification'

class Login extends Component {
  state = {
    args: {}
  }

  handleSubmit = async (e, args) => {
    e.preventDefault()
    const res = await this.props.loginMutation({
      variables: args
    })

    const { success, errors, token, data } = res.data.login

    if (success)
      this.handleRedirect(data, token)
    else
      errorNotification(errors)
  }

  handleChange = (e, input) => {
    const args = this.state.args
    args[input.name] = input.value
    this.setState({ args })
  }

  handleRedirect = (data, token) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(data))
    this.props.setUser(data)

    if (isAdmin(data.roles))
      return this.props.history.push('/admin/dashboard')

    if (isUser(data.roles))
      return this.props.history.push('/dashboard')

    return this.props.history.push('/login')
  }

  render() {
    const { args } = this.state

    return (
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
            <Form onSubmit={e => this.handleSubmit(e, args)}>
              <Header
                as='h1'
                icon
                className='text-white'
              >
                Iniciar Sesión
              </Header>

              <Form.Field>
                <Form.Input
                  onChange={this.handleChange}
                  name='email'
                  type='email'
                  placeholder='Correo electrónico'
                  required
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  onChange={this.handleChange}
                  name='password'
                  type='password'
                  placeholder='Contraseña'
                  required
                />
              </Form.Field>

              <Button
                type='submit'
                primary
              >
                Iniciar
              </Button>

              <Divider
                horizontal
                className='p-t'
              >
                <Icon
                  name='paper plane'
                  color='grey'
                />
              </Divider>
              <p className='text-light'>
                ¿No tienes una cuenta? <Link to='/register'> Crear cuenta</Link>
              </p>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  setUser: dispatch.user.setUser
})

export default compose(
  connect(mapState, mapDispatch),
  graphql(loginMutation, { name: 'loginMutation' })
)(Login)
