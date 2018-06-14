import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div className="MessageList" style={styles.list}>
      <div className="roomAnnouncement" style={styles.announcement}>
        <h3 style={styles.h3}>#{props.room}</h3>
        <p>This is the very beginning of the #{props.room} room.</p>
      </div>

      {
        props.messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))
      }
    </div>
  )
}

const styles = {
  list: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  announcement: {
    padding: '2rem 1rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList
