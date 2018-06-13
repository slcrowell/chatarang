import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Signin from './Signin';

class App extends Component {
  state = {
    user: {
      uid: '0',
      userName: "",
    }
  }

  addUsername = (text) => {
    const user = this.state.user;
    user.userName = text;

    this.setState({user});
  }
  render() {
      if(this.state.user.userName) {
        return (
          <div className="App">
            <Main user={this.state.user}/>
          </div>
        );
      }
        return(
          <div className="App">
            <Signin addUsername={this.addUsername}/>
          </div>
        );
  }
}

export default App;
