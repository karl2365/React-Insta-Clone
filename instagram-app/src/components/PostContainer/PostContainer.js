import React from 'react';
import Comment from '../CommentSection/Comment'
import './post.scss';
import 'font-awesome/css/font-awesome.min.css';


const PostContainer = (props) => {
 
        return (
            <div className="post-container">

                <div className="post-header">
                    <img className="thumb" src={props.data.thumbnailUrl}></img>
                    <p>{props.data.username}</p>
                </div>
                <p><img className="main-image" src={props.data.imageUrl}></img></p>
                <div className="bottom">   
                    <p ><i class="far fa-heart"></i>&nbsp;&nbsp;&nbsp; <i class="far fa-comment"></i></p>
                    <span className="likes">{props.data.likes} likes</span>
                    {props.data.comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                    <input class="input" type="text" placeholder="Add a comment..."></input>
                </div>        
            </div>
        )


}



export default PostContainer;