import React from 'react';
import "./post.scss";
import PostContainer from "./PostContainer"
import dummyData from '../../dummy-data';
import SearchBar from '../../components/SearchBar/SearchBar';





class PostsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true,
            data: [],
            user: ''
        }
    }

    componentDidMount() {
        this.setState ({
            data: dummyData,
            user: ''
        })
    }

    searchData = e => {
        e.preventDefault();
        let userFilter = this.state.user;
        let filtered = this.state.data.filter(user => (userFilter===user.username))
        this.setState({
            data: filtered,
            user: ''
        })
    }
    
    


    handleChange = e => {
        this.setState({
            data: dummyData,
            user: e.target.value
        });
    }
    
 

    render(){
        return (
            <div>
                <SearchBar submit={this.searchData} change={this.handleChange} value={this.state.user} />
                {this.state.data.map(data => (
                <PostContainer data={data} key={data.id} />
                ))}
            </div>

        )
    }
}

export default PostsPage