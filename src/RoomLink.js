import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const RoomLink = (props) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        props.loadRoom(props.room);
    }

    return(
        <li className={css(styles.item)}>
          <a href="/" className={css(styles.link)} onClick={handleClick}>{props.room.name}</a>
        </li>
    )
}

export default RoomLink;

const styles = StyleSheet.create({
    item: {
      marginBottom: '0.5rem',
    },
  
    link: {
      display: 'block',
      color: 'whitesmoke',
      textDecoration: 'none',
  
      '::before': {
        content: '"# "',
      },
  
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    },
  })