import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

import SchedulePlace from './SchedulePlace'

class PlaceInformation extends Component {
  render() {
    const {
      province,
      accessibility,
      category,
      website,
      phone,
      email,
      schedule
    } = this.props.place

    return (
      <List divided relaxed>
        {
          province ?
            <List.Item>
              <List.Icon
                name='map marker alternate'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Provincia
                </List.Header>
                <List.Description>
                  { province }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }

        {
          accessibility ?
            <List.Item>
              <List.Icon
                name='universal access'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Accesibilidad
                </List.Header>
                <List.Description>
                  { accessibility }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }


        {
          category ?
            <List.Item>
              <List.Icon
                name='tag'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Categoría
                </List.Header>
                <List.Description>
                  { category }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }

        {
          website ?
            <List.Item>
              <List.Icon
                name='linkify'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Sitio web
                </List.Header>
                <List.Description>
                  { website }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }

        {
          phone ?
            <List.Item>
              <List.Icon
                name='phone'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Teléfono
                </List.Header>
                <List.Description>
                  { phone }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }

        {
          email ?
            <List.Item>
              <List.Icon
                name='mail'
                size='large'
                verticalAlign='middle'
              />
              <List.Content>
                <List.Header>
                  Correo
                </List.Header>
                <List.Description>
                  { email }
                </List.Description>
              </List.Content>
            </List.Item> : null
        }

        <SchedulePlace schedule={schedule} />
      </List>
    )
  }
}

export default PlaceInformation
