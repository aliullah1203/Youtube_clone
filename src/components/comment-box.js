import React, { Component } from 'react';

class CommentBox extends Component {
    render() {
        const { newComment,handleCommentChange,handleCommentSubmit,comments } = this.props;
        return (
            <div style={{ marginTop: '20px' }}>
                <h5>Comments</h5>
                <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    style={{
                        width: '75%', 
                        padding: '8px',
                        marginBottom: '10px', 
                        borderRadius: '4px', 
                        border: '1px solid #ddd' 
                    }}
                />
                <button onClick={handleCommentSubmit}
                    style={{
                        padding: '8px 16px', 
                        backgroundColor: '#007bff', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        marginLeft: '8px' 
                    }}
                >Submit
                </button>
                                
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                    {comments.map((comment, index) => (
                        <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>{comment}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CommentBox;
