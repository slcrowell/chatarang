import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.setState({user})
    }
  }

  handleAuth = (info) => {
    this.setState({user: info});
    localStorage.setItem('user', JSON.stringify(info));
  }

  signOut = () => {
    this.setState({user: {}});
    localStorage.removeItem('user')
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
