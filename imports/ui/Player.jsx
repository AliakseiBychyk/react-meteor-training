import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardText, CardTitle } from 'material-ui/Card'

class Player extends Component {
  render() {
    return (
      <Card>  
        <CardMedia
          overlay={<CardTitle title="Aleks Bychyk" subtitle="Offense: 12 - Defense: 8" />}
        >
          <img src="player.jpg" alt="player image" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          
        </CardActions>
      </Card>
    )
  }
}

export default Player