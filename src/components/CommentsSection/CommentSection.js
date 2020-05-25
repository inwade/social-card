import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    render () {
        return (
            <div className="comment-section">
            <div className="small-comment">
                <i className="far fa-comment"></i>
                <span>{this.props.comments}</span>
            </div>
            <div className="small-repost">
                <i className="fas fa-retweet"></i>
                <span>{this.props.reposts}</span>
            </div>    
            <div className="small-like">
                <i className="fas fa-heart"></i>
                <span>{this.props.likes}</span>
            </div>    
            <div>
                <i className="far fa-envelope"></i>
            </div>
            </div>
        )
    }
}

export default CommentSection