import React, {Component} from 'react';
import placeholder from './placeholder.png'
const Avatar = (props) => {
    return (
        <img className='Avatar' style={styles} src={placeholder}></img>
    )
}

const styles = {
    backround: 'url(../placeholder.png)',
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',      
}

export default Avatar;