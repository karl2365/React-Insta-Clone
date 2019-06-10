import React from 'react';
import './comment.scss';
import PropTypes from 'prop-types';

const Comment = (props) => {


 
        return (
            <div>
                <span className="user">{props.comment.username}</span> {props.comment.text}
            </div>
        )


}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;