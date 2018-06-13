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
            <form className="MessageForm" onSubmit={this.handleSumbit} style={styles.messageForm}>
                <div className="chatIcon" style={styles.chatIcon}>
                    <i className="fas fa-comment-alt"></i>
                </div>
                <input type='text' name='body' value={this.state.newMessage} placeholder='Type a message' onChange={this.handleChange} style={styles.input}></input>
                <button type='submit' style={styles.button}>
                    <i className="far fa-paper-plane" title="Send"></i>
                </button>
            </form>
        )
    }  
}

const styles = {
    messageForm: {
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: '0',
    },

    chatIcon: {
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#ccc',
        padding: '0 0.5rem',
        fontSize: '1.2rem',
    },

    input: {
        flex: '1',
        fontSize: '1.2rem',
        border: '0',
    },

    button: {
       fontSize: '1.5rem',
       backgroundColor: '#1A8FE3',
       color: 'white',
       paddingLeft: '1rem',
       paddingRight: '1rem',
       borderTopRightRadius: '0.5rem',
       borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
    },
}

export default MessageForm;