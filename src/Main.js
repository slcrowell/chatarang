import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

class Main extends Component {
  state = {
    room: 'general',
    messages: []
  }

  
  addMessage = (body) => {
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      user: this.props.user,
      body,
    })

    this.setState({ messages })
  }
  
  changeRoom = (room) => {
    this.setState({room});
    base.syncState(`${room}/messages`, {
      context: this,
      state:'messages',
      asArray: true,
    });
  }

  componentDidMount() {
    base.syncState(`${this.state.room}/messages`, {
      context: this,
      state:'messages',
      asArray: true,
    });
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user} signOut={this.props.signOut} changeRoom={this.changeRoom}/>
        <Chat user={this.props.user} room={this.state.room} messages={this.state.messages} addMessage={this.addMessage}  />
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
