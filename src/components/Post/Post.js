import React from 'react';

import './Post.css';

class Post extends React.Component {
    
    render () {
        
              return (
            <div className="post-wrapper">
                <p className="text-upper">{this.props.text}</p>
                <div className="text-below">
                    <img src={this.props.image} alt='post-image'></img>
                    <p className="title-below">Learning React? Start Small</p>
                    <p>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</p>
                    <span>dev.to</span>
                </div>
            </div>
        )
    }
}

export default Post;