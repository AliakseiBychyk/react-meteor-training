import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardText, CardTitle } from 'material-ui/Card'
import { RaisedButton, Avatar, Chip } from 'material-ui'
import { blue200, blue900 } from 'material-ui/styles/colors'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
}

const statMetrics = [
  'Ball manipulation',
  'Kicking abilities',
  'Passing abilities',
  'Duel/Tackling abilities',
  'Field speed coverage',
  'Blocking abilities',
  'Game Strategy',
  'Playmaking risks',
]

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
          <div style={styles.wrapper}>  
            {statMetrics.map((metric, index) => 
              <Chip
                key={index}  
                backgroundColor={blue200}
                style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  2
                </Avatar>
                {metric}
              </Chip>
            )}
          </div>  
        </CardText>
        <CardActions>  
        </CardActions>
      </Card>
    )
  }
}

export default Player