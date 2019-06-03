import React from 'react';
import './comment.scss';


const Comment = (props) => {


 
        return (
            <div>
                <span className="user">{props.comment.username}</span> {props.comment.text}
            </div>
        )


}



export default Comment;