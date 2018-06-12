import React from 'react';
import message from './Message';
import Message from './Message';

const MessageList = (props) => {
    return (
        <div className='MessageList'>
            {props.messages.map(message => <Message key={message.id} message={message}/>)}
        </div>
    )
}

const styles = {
    backgroundColor: 'white',
    flex: '1',
    paddingBottom: '1rem',
    overflowY: 'scroll',
}

export default MessageList;