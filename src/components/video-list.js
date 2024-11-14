import React, { Component } from 'react';
import VideoListItem from './video-list-item';

class VideoList extends Component {
    render() {
        const { items, handleSelect } = this.props;
        return (
            <div className='col-md-4'>
                <ul className="list-group col-md-4">
                    {items.map(item => (
                        <VideoListItem
                            key={item.id.videoId}
                            imgUrl={item.snippet.thumbnails.high.url}
                            title={item.snippet.title}
                            description={item.snippet.description}
                            videoId={item.id.videoId}
                            channel={item.snippet.channelTitle}
                            time={item.snippet.publishTime}
                            handleSelect={handleSelect}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default VideoList;
