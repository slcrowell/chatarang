import React from 'react';

const Metadata = (props) => {
    return (
        <div className='Metadata' style={styles.metadata}>
            <div className="userName" style={styles.user}>
                {props.userName}
            </div>
            <div className="time" style={styles.time}>
                {/* new Date().toLocaleString() */}
            </div>
        </div>
    )
}

const styles = {
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    },

    user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },

    time: {
        color: '#999',
        fontSize: '0.8rem',
    },
}

export default Metadata;