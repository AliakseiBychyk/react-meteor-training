import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { RaisedButton, AppBar, Divider } from 'material-ui'
import Player from './Player'
import TeamList from './TeamList'
import TeamStats from './TeamStats'
import { List } from 'material-ui/List'
import players from '../assets/players.json'

class App extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    this.setState(() => ({
      players
    }))
  }

  renderPlayers = () => {
    return this.state.players.map(player => (
      <TeamList
        key={player._id}
        player={player}
      />
    ))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />  
          <div className="row">  
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team List</h2>  
              <Divider />
              <List>
                {this.renderPlayers()}
              </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>  
        </div>  
      </MuiThemeProvider>
    )
  }
}

export default App