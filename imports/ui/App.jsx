import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { RaisedButton, AppBar } from 'material-ui'
import Player from './Player'
import TeamList from './TeamList'
import TeamStats from './TeamStats'

class App extends Component {
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
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>  
        </div>  
      </MuiThemeProvider>
    )
  }
}

export default App