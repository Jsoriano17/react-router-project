import React from 'react'
import { Menu, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Link to="/Home">
          <Menu.Item
            as={Divider}
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
        </Menu.Item>
        </Link>
        <Link  to='/About'>
          <Menu.Item
            as={Divider}
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            About
        </Menu.Item>
        </Link>
        <Link to='/Virus'>
          <Menu.Item
            as={Divider}
            name='virus'
            active={activeItem === 'virus'}
            onClick={this.handleItemClick}
          >
            Virus
        </Menu.Item>
        </Link>

      </Menu >
    )
  }
}