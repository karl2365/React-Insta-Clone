import React from 'react';
import Comment from '../CommentSection/Comment'
import './post.scss';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            username: '',
            text: '',
            id: Date.now(),
            likes: 0
        }
        console.log(props);
    }

    componentDidMount() {
        this.setState({
            comments: this.props.data.comments,
            username: 'default',
            text: '',
            id: Date.now(),
            likes: this.props.data.likes
        })
    }
    
    addComment = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.text,
            id: Date.now(),
            username: 'default'
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            text: '',
            id: Date.now(),
            username: 'default'
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            id: Date.now()
        });
    }
    
    addLike = e => {
        console.log(this.state.likes)
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {

        return (
            <div className="post-container">
                    
                <div className="post-header">
                    <img className="thumb" src={this.props.data.thumbnailUrl}></img>
                    <p>{this.props.data.username}</p>
                </div>
                <p><img className="main-image" src={this.props.data.imageUrl}></img></p>
                
                <div className="bottom">   
                    <p ><i className="far fa-heart" onClick={this.addLike}></i>&nbsp;&nbsp;&nbsp; <i className="far fa-comment"></i></p>
                    <span className="likes">{this.state.likes} likes</span>
                    {this.state.comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                    <form className="add-comment" onSubmit={this.addComment}>
                        <input className="input" type="text" onChange={this.handleChange} name="text" value={this.state.text} placeholder="Add a comment..." required></input>
                        {/* <button type='submit'>submit</button> */}
                    </form>
                </div>        
            </div>
        )                
    }    

}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.object
        )
    })
}


export default PostContainer;