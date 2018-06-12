import React from 'react';

class MessageForm extends React.Component {
    state = {
        newMessage: '',
    }
    handleSumbit = (ev) => {
        ev.preventDefault();
        this.props.addMessage(this.state.newMessage);
        this.setState({newMessage: ''});
    } 

    handleChange = (ev) => {
        this.setState({newMessage: ev.target.value});
    }

    render() {
        return(
            <form className="MessageForm" onSubmit={this.handleSumbit}>
                <input type='text' name='body' value={this.state.newMessage} placeholder='Type a message' onChange={this.handleChange}></input>
                <input type='submit'></input>
            </form>
        )
    }
       
}

export default MessageForm;