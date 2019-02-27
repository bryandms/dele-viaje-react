import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

class AccountInfoItem extends Component {
  render() {
    const { icon, title, description } = this.props

    return (
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={4}
        textAlign='center'
      >
        <Header
          as='h4'
          icon
        >
          <Icon
            name={icon}
            color='blue'
            inverted
            circular
          />
          { title }

          <Header.Subheader>
            { description }
          </Header.Subheader>
        </Header>
      </Grid.Column>
    )
  }
}

export default AccountInfoItem
