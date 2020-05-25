import React from 'react';
import ReactDOM from 'react-dom';
import AvatarPhoto from './img/avatar.jpg'
import Avatar from './components/Avatar/Avatar';
import Title from './components/Title/Title';
import Post from './components/Post/Post';
import PostImage from '../src/img/post-image.jpg';
import CommentSection from './components/CommentsSection/CommentSection';
import './index.css';


let date = new Date ();


class Card extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            userName: 'Alexander',
            userNickname: '@alexdreamer23',
            date: date.toString().slice(4,7) + ' ' + date.toString().slice(8,10),
            text: 'Learning React? Start small. Author: @dscendia',
            postImage: PostImage,
            totalComments: '2',
            totalReposts: '48',
            totalLikes: '119'
        }
    }
    render () {
        
        return (
        
        <div className="card-wrapper">    
            <Avatar source={AvatarPhoto}/>
            <div>
            <Title name={this.state.userName} nickname={this.state.userNickname} date={this.state.date}/>
            <Post text={this.state.text} image={this.state.postImage}/>
            <CommentSection comments={this.state.totalComments} reposts={this.state.totalReposts} likes={this.state.totalLikes}/>
            </div>
        </div>
    )}
}

ReactDOM.render(
    <Card />, document.getElementById('root')
)