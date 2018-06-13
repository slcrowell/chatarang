import React from 'react';
import message from './Message';
import Message from './Message';

const MessageList = (props) => {
    return (
        <div className='MessageList' style={styles.messageList}>
            <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.header}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            {props.messages.map(message => <Message key={message.id} message={message}/>)}
        </div>
    )
}

const styles = {
        messageList: {
            backgroundColor: 'white',
            flex: '1',
            paddingBottom: '1rem',
            overflowY: 'scroll',
        },
        

        roomAnnouncement: {
            padding: '2rem 1rem', 
        },

        header: {
            fontSize: '1.5rem',
        },
}

export default MessageList;