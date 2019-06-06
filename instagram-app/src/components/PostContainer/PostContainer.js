import React from 'react';
import Comment from '../CommentSection/Comment'
// import './post.scss';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    text-align: left;
    margin-left: 20px;
    border: 1px solid lightgrey;
    width: 600px;
    margin-top: 25px;
`;

const Thumb = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 10px;
`;


const MainImage = styled.img`
    width: 100%;

`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    p {
        font-weight: 700;
    }
`;

const Likes = styled.span`
    font-weight: 700;
`;

const Bottom = styled.div`
    margin: 0 0 10px 10px;
    i {
        font-size: 1.7rem;
    }
    input {
        margin-top: 15px;
        margin-right: 15px;
        border-radius: 5px;
        font-size: 1.4rem;
        border-color: #cc6633;
    
        &:focus {
            outline: none;
        }
    }
`;

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
    }

    componentDidMount() {
        this.setState({
            comments: this.props.data.comments,
            username: 'default',
            text: '',
            id: Date.now(),
            likes: this.props.data.likes,
            liked: false

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
        if(this.state.liked){
            this.setState({
                likes: this.state.likes - 1,
                liked: false
            }) 
        }else{ this.setState({
            likes: this.state.likes + 1,
            liked: true
            });            
        }    
    }
    
    render() {

        return (
            <PostContainerDiv>
                    
                <PostHeader>
                    <Thumb src={this.props.data.thumbnailUrl}></Thumb>
                    <p>{this.props.data.username}</p>
                </PostHeader>
                <p><MainImage src={this.props.data.imageUrl}></MainImage></p>
                
                <Bottom>   
                    <p ><i className="far fa-heart" onClick={this.addLike}></i>&nbsp;&nbsp;&nbsp; <i className="far fa-comment"></i></p>
                    <Likes>{this.state.likes} likes</Likes>
                    {this.state.comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                    <form className="add-comment" onSubmit={this.addComment}>
                        <input className="input" type="text" onChange={this.handleChange} name="text" value={this.state.text} placeholder="Add a comment..." required></input>
                        {/* <button type='submit'>submit</button> */}
                    </form>
                </Bottom>        
            </PostContainerDiv>
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