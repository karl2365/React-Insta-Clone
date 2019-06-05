import React from 'react';
import "./post.scss";
import PostContainer from "./PostContainer"





class PostsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true
        }
    }


    logout = () => {
        if(localStorage.getItem('username')) {
            localStorage.removeItem('username');
            this.setState({
                loggedIn: false
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Posts PostsPage</h1>
                <button onClick={this.logout}>Log Out</button>
            </div>

        )
    }
}

export default PostsPage