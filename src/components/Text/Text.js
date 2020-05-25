import React from 'react';
import './Text.css';

class Text extends React.Component  {

    render () {        
    return (
        
        <div className="text-block">
            <p>
                {this.props.text}
            </p>
        </div>
    )
}
}

export default Text