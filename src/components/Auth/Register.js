import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Header, Icon } from 'semantic-ui-react'

import { registerMutation } from '../../graphql/auth'
import { errorNotification, successNotification } from '../../helpers/notification'

class Register extends Component {
  state = {
    args: {}
  }

  handleSubmit = async (e, args) => {
    e.preventDefault()
    const res = await this.props.registerMutation({
      variables: args
    })

    const { success, errors } = res.data.register

    if (success) {
      const message = 'Te has registrado exitosamente, ya puedes iniciar sesión'
      successNotification(message)
    } else {
      errorNotification(errors)
    }
  }

  handleChange = (e, input) => {
    const args = this.state.args
    args[input.name] = input.value
    this.setState({ args })
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
                Crear cuenta
              </Header>

              <Form.Field>
                <Form.Input
                  onChange={this.handleChange}
                  name='username'
                  type='username'
                  placeholder='Nombre de usuario'
                  required
                />
              </Form.Field>

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
                Crear
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
                ¿Ya tienes una cuenta? <Link to='/login'> Iniciar sesión</Link>
              </p>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default graphql(
  registerMutation, { name: 'registerMutation' }
)(Register)
