import React, {Component} from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    constructor() {
        super();

        this.state = {
            messages: [
                {
                    id: 0,
                    userName: 'crowelsl',
                    body: 'Test',
                },
                {
                    id: 1,
                    userName: 'Bot',
                    body: 'Test again',
                },
            ],
        }
    }
    

    updateMessage = (event) => {
        this.setState({newMessage: event.target.value});
    }

    addMessage = (text) => {
        const messages = [...this.state.messages];
        messages.push({
            id: messages.length,
            userName: this.props.user.userName,
            body: text,
        });
        this.setState({messages});
        this.setState({newComment: ''});
    }

    render() {
        return (
            <div className='Chat' style={styles}>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage} updateMessage={this.updateMessage} newComment={this.state.newComment}/>
            </div>
        )
    }
}

const styles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
}

export default Chat;