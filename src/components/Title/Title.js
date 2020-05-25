import React from 'react';
import './Title.css';

class Title extends React.Component {
    
    render () {
        return (
        <div className="title-block">
            <p className="title-name">{this.props.name}</p>
            <a href="https://google.com" className="title-nickname">{this.props.nickname}</a>
            <p className="title-date">  •  {this.props.date}</p>
           
            <i className="fas fa-chevron-down"></i>
           
        </div>
        )}
}

export default Title