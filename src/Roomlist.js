import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import RoomLink from './RoomLink';

class RoomList extends React.Component {
    state = {
        rooms: {
            general: {
                name: 'general',
                description: 'Announcements and general chat',
            },

            random: {
                name: 'random',
                description: 'Random Anything',
            }
        }
    }
    render() {
        return (
            <nav
            className={`RoomList ${css(styles.nav)}`}
            >
            <h2 className={css(styles.h2)}>Rooms</h2>
            <ul className={css(styles.list)}>
                {Object.keys(this.state.rooms).map(roomName => (<RoomLink key={roomName} loadRoom={this.props.loadRoom} room={this.state.rooms[roomName]}/>))}
            </ul>
            </nav>
        )
    } 
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },
})

export default RoomList
