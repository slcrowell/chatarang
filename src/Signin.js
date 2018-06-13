import React, {Component} from 'react';

class Signin extends Component {
    state = {
        newUser: '',
    }
    
    handleSumbit = (ev) => {
        ev.preventDefault();
        this.props.addUsername(this.state.newUser);
        this.setState({newUser: ''});
    } 

    handleChange = (ev) => {
        this.setState({newUser: ev.target.value});
    }

    render() {
        return(
            <form className="Signin" onSubmit={this.handleSumbit}>
                <input type='text' name='body' value={this.state.newUser} placeholder='Type a username' onChange={this.handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Signin;