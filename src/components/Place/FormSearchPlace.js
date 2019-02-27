import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Button, Divider, Form, Header, Icon } from 'semantic-ui-react'

import { findPlacesQuery } from '../../graphql/place'
import { provinces, categories } from '../../helpers/selects'
import { errorNotification } from '../../helpers/notification'

class FormSearchPlace extends Component {
  state = {
    args: {}
  }

  handleSubmit = async (e, args) => {
    e.preventDefault()
    await this.props.findPlacesQuery.refetch(args)
    const res = await this.props.findPlacesQuery

    const { data, errors, success } = res.findPlaces

    if (success)
      this.props.onFormSubmit(data)
    else
      errorNotification(errors)
  }

  handleChange = (e, input) => {
    const args = this.state.args
    args[input.name] = input.value
    this.setState({ args })
  }

  render() {
    const { args } = this.state

    return (
      <Form onSubmit={e => this.handleSubmit(e, args)}>
        <Header
          as='h1'
          icon
          className='text-white'
        >
          Dele Viaje
        </Header>
        <p className='text-light'>
          Encuentre sitios similares a lo que anda buscando. Complete
          los criterios de búsqueda.
        </p>

        <Form.Field>
          <Form.Select
            onChange={this.handleChange}
            name='province'
            fluid
            options={provinces}
            placeholder='Provincia'
          />
        </Form.Field>

        <Form.Field>
          <Form.Select
            onChange={this.handleChange}
            name='category'
            fluid
            options={categories}
            placeholder='Categoría'
          />
        </Form.Field>

        <Button
          type='submit'
          primary
        >
          Buscar
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
          Gracias por usar Dele Viaje
        </p>
      </Form>
    )
  }
}

export default graphql(
  findPlacesQuery, { name: 'findPlacesQuery' }
)(FormSearchPlace)
