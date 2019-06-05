import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
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


  render () {
    return (

    
      <div className="App">
        <SearchBar submit={this.searchData} change={this.handleChange} value={this.state.user} />
        <ComponentFromWithAuthenticate />
        {this.state.data.map(data => (
          <PostContainer data={data} key={data.id} />
        ))}

      </div>
    );

  }
  
}
export default App;
