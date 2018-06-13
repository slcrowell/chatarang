import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {},
  }

  handleAuth = (info) => {
    this.setState({user: info})
  }

  signOut = () => {
    this.setState({user: {}})
  }

  render() {
    return (
      <div className="App">
        {(this.state.user.uid) ? <Main user={this.state.user} signOut={this.signOut} /> : <SignIn handleAuth={this.handleAuth}/>}
      </div>
    )
  }
}

export default App
