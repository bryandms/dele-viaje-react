import React, { Component } from 'react'
import { Accordion, List, Icon } from 'semantic-ui-react'

class SchedulePlace extends Component {
  state = {
    activeIndex: -1
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { schedule } = this.props
    let scheduleClone = null
    let displaySchedule = []

    if (schedule) {
      const values = Object.keys(schedule)

      if (values.length) {
        scheduleClone = values

        displaySchedule = scheduleClone.map((key, i) =>
          <React.Fragment key={i}>
            <p>
              { key }:
              <span className='float-right'>
                { schedule[key] }
              </span>
            </p>
          </React.Fragment>
        )
      }
    }

    return (
      <React.Fragment>
        {
          scheduleClone ?
            <List.Item>
              <List.Icon
                className='accordion-icon'
                name='clock outline'
                size='large'
                verticalAlign='middle'
              />

              <List.Content>
                <List.Header>
                  Horario
                </List.Header>

                <List.Description>
                  <Accordion>
                    <Accordion.Title
                      className='accordion-dropdown p-0'
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      Ver
                      <Icon
                        name='dropdown'
                        className='float-right'
                      />
                    </Accordion.Title>

                    <Accordion.Content active={activeIndex === 0}>
                      { displaySchedule }
                    </Accordion.Content>
                  </Accordion>
                </List.Description>
              </List.Content>
            </List.Item> : null
        }
      </React.Fragment>
    )
  }
}

export default SchedulePlace
