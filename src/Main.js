import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    room: {
      name: 'general',
      desciption: 'Announcements and general chat',
    }
  }

  loadRoom = (room) => {
    this.setState({room});
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user} signOut={this.props.signOut} loadRoom={this.loadRoom}/>
        <Chat key={this.state.room} user={this.props.user} room={this.state.room}/>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
