import React, { Component } from 'react';

class VideoListItem extends Component {
    render(){
        const { imgUrl, title, description, videoId, channel, time, handleSelect } = this.props;
        return (
            <li 
                onClick={() => handleSelect(videoId, title, description)}
                className="list-group-item media videolist">
                <div>
                    <img 
                        className='mr-3' 
                        src={imgUrl} 
                        style={{marginLeft:'0px', width: '100px', height: '80px' }}
                        alt="Video thumbnail"
                    />
                </div>
                <div className='media-body'>
                    <h6>{title}</h6>
                    <p>Channel: {channel}</p>
                    <p>Published on: {time}</p>
                </div>
            </li>
        );
    }
}

export default VideoListItem;
