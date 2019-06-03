import React from 'react';
import Comment from '../CommentSection/Comment'
import './post.scss';

const PostContainer = (props) => {


 
        return (
            <div className="post-container">

                <div className="post-header">
                    <img className="thumb" src={props.data.thumbnailUrl}></img>
                    <p>{props.data.username}</p>
                </div>
                <p><img className="main-image" src={props.data.imageUrl}></img></p>
                <p>ico1 ico2</p>
                <span className="likes">{props.data.likes} likes</span>
                {props.data.comments.map(comment => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        )


}



export default PostContainer;