import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
    render () {
        return (
            <div className="avatar-block">
                <img src={this.props.source} alt="avatar-icon"></img>
            </div>
        )
    }
}

export default Avatar;