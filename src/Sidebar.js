import React, {Component} from 'react';

const Sidebar = (props) =>  {
    return (
        <aside class="Sidebar" style={styles.sidebar}>
            <div class="UserInfo" style={styles.children}>
                <div class="user">{props.user.userName}</div>
                <a href="#">
                    <i class="fas fa-sign-out-alt"></i>
                </a>
            </div>
            <h1 style={{...styles.heading, ...styles.children}}>XTBC 18</h1>
            <nav class="RoomList" style={styles.children}>
                <h2>Rooms</h2>
                <ul>
                    <li><a href="#">general</a></li>
                    <li><a href="#">random</a></li>
                </ul>
            </nav>
        </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },

    children: {
        padding: '0 1rem',
    },

    heading: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: '0',
    },
}

export default Sidebar;