import React from 'react';
// import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
class App extends React.Component {

  render () {
    return (
      <StyledApp>
        <ComponentFromWithAuthenticate />
      </StyledApp>
    );
  }
}
export default App;
