import React from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
class App extends React.Component {

  render () {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}
export default App;
