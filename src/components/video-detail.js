import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBox from './comment-box';

class VideoDetail extends Component {
    state = {
        comments: [],
        newComment: ''
    }

    handleCommentChange = (event) => this.setState({ newComment: event.target.value });
    handleCommentSubmit = () => {
        const { newComment, comments } = this.state;
        if (newComment.trim()) {
            this.setState({
                comments: [...comments, newComment],
                newComment: ''
            });
        }
    };

    render(){
        const {videoId,title,description}=this.props;
        return (
            <div className='col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe 
                        className='embed-responsive-item' 
                        src={`https://www.youtube.com/embed/${videoId}`}
                        style={{ height: '500px', width: '100%'}}
                    />
                </div> 

                <div className='details' style={{marginTop:'10px',padding: '10px',border: '1px solid #ddd',borderEndEndRadius: '4px'}}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div className="App">
                    <CommentBox 
                        newComment={this.state.newComment}
                        handleCommentChange={this.handleCommentChange}
                        handleCommentSubmit={this.handleCommentSubmit}
                        comments={this.state.comments}
                    />
                </div>
            </div>
        );
    }
}

export default VideoDetail;
