import React, { Component } from 'react'
import { Avatar } from 'material-ui'
import { ListItem } from 'material-ui/List'

class TeamList extends Component {
  render() {
    const { name, metrics } = this.props.player
    
    return (
      <ListItem
        primaryText={name}
        leftAvatar={<Avatar src="player.jpg" />}
      />
    )
  }
}

export default TeamList